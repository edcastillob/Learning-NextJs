import moongose from "mongoose";
const { MONGODB_URI } = process.env;

if (!MONGODB_URI) {
  throw new Error("Define MONGODB_URI");
}
export const connectDB = async () => {
  try {
    const { connection } = await moongose.connect(MONGODB_URI);
    if (connection.readyState === 1) {
      console.log("MongoDB connected...");
      return Promise.resolve(true);
    }
  } catch (error) {
    console.log(error);
    return Promise.reject(false);
  }
};

