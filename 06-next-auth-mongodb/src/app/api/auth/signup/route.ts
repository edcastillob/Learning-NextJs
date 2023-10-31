import { NextResponse } from "next/server";
import { connectDB } from "@/libs/mongodb";
import User from "@/models/user";
import bcrypt from "bcryptjs";

export async function POST(request: Request) {
  const { fullname, email, password } = await request.json();
  console.log("fullname: ", fullname, "email: ", email, "password: ", password);
  if (!password)
    return NextResponse.json(
      { message: "Password is required " },
      { status: 400 }
    );
  if (password.length < 6)
    return NextResponse.json(
      { message: "Password must be at least 6 characters" },
      { status: 400 }
    );

  try {
    await connectDB();
    const userFound = await User.findOne({ email });
    if (userFound)
      return NextResponse.json(
        {
          message: "Email already exists",
        },
        { status: 409 }
      );

    const passwordHash = await bcrypt.hash(password, 3);
    const user = new User({
      fullname,
      email,
      password: passwordHash,
    });

    const saveUser = await user.save();
    console.log(saveUser);
    return NextResponse.json(saveUser);
  } catch (error) {
    console.log(error);
    if (error instanceof Error) {
      return NextResponse.json(
        {
          message: error.message,
        },
        { status: 400 }
      );
    }
  }
}
