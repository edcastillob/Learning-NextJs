import Image from "next/image";
import code from "../../public/code.png";

export const metadata = {
  title: " Next App- About",
};
function AboutPage() {
  return (
    <div>
      <h1>About</h1>
      <hr />
      <h3>Hello,</h3>
      <p>
        I'm <b>Edwar Castillo,</b> System Engineer and Full Stack Web Developer
        it's a practice of Next Js
      </p>
      <p>
        With extensive experience in the analysis, design and development of
        information systems, I stand out for my ability to improve operational
        efficiency and optimize tasks in various work environments. I have
        successfully led projects and teams
      </p>

      <Image src={code} width={400} height={400} alt="Code"></Image>
    </div>
  );
}

export default AboutPage;
