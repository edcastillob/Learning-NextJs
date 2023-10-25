import Image from "next/image";
import nextImg from "../public/next.svg";


export default function HomePage() {
  return (
    <>
      <h1> Home</h1>
      <section>
        <span>Practice Next Js!</span>
        <p>
          Is necesary to be studing many english for to be programming in
          tecnologies what  enterprise many it's searching for example <strong>NextJs</strong>
        </p>
        <Image 
        src={nextImg}
        width={200}
        height={200}
        alt="NextJs"
        ></Image>
      </section>
    </>
  );
}
