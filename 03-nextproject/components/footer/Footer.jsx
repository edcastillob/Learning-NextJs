import React from "react";
import Link from "next/link";
import Image from "next/image";
import github from "../../public/github.png";
import linkedin from "../../public/linkedIn.png";
import email from "../../public/email.png";
import whatsapp from "../../public/whatsapp.png";
import "./Footer.css"


export default function Footer () {
  return (
    <footer className="footer py-5">
      <h2 className="text-1xl font-bold">© NextJs 2023 - <strong>Ing Edwar Castillo | Full Stack Developer </strong></h2>
     
      <div className="redes">
        <Link
          href="https://github.com/edcastillob"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image src={github} width={35} height={35} alt="GitHub"></Image>
        </Link>
        {" "}
        <Link
          href="https://www.linkedin.com/in/edcastillob/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image src={linkedin} width={32} height={32} alt="Linkedin"></Image>
        </Link>
        {" "}
        <Link
          href="mailto:edwar.castillo@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image src={email} width={32} height={32} alt="Email"></Image>
        </Link>
        {" "}
        <Link
          href="https://wa.me/5804145994073"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image src={whatsapp} width={32} height={32} alt="whatsapp"></Image>
        </Link>
      </div>
    </footer>
  );
};
