import Image from "next/image";
import code from "@public/code.png";

export const metadata = {
  title: " Next App- About",
};
function AboutPage() {
  return (
    <div className="ml-4 text-center mt-9">    
     <div className="container mx-auto mt-8 select-none">
      <h3>Hello,</h3>
      <p>
        I am <b>Edwar Castillo,</b> System Engineer and Full Stack Web Developer
        it is a practice of Next Js
      </p>
      <p>
        With extensive experience in the analysis, design and development of
        information systems, I stand out for my ability to improve operational
        efficiency and optimize tasks in various work environments. I have
        successfully led projects and teams
      </p>

    <br />
     </div>
      <Image className="mx-auto mt-4" src={code} width={400} height={400} alt="Code"></Image>
    </div>
  );
}

export default AboutPage;
