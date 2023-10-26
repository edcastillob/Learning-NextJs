import Image from "next/image";
import nextImg from "@public/next.svg";


export default function HomePage() {
  return (
    <>
      
      <div>
        <h1 className="text-2xl mt-3 ml-4" >Practice Next Js!</h1>
        <p className="text-1xl-slate-200 mb-4 ml-4">
          Is necesary to be studing many english for to be programming in
          tecnologies what  enterprise many it's searching for example <strong>NextJs</strong>
        </p>
        <Image
        className="mx-auto" 
        src={nextImg}
        width={200}
        height={200}
        alt="NextJs"
        ></Image>
      </div>
    </>
  );
}
