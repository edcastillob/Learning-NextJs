import Image from "next/image";
import "./Store.css"
import PC01 from "../../public/images/PC01.webp";
import PC02 from "../../public/images/PC02.webp";
import PC03 from "../../public/images/PC03.webp";
import PC04 from "../../public/images/PC04.png";
import TV01 from "../../public/images/TV01.webp";
import TV02 from "../../public/images/TV02.png";
import TV03 from "../../public/images/TV03.jpeg";
import TV04 from "../../public/images/TV04.webp";
import TV05 from "../../public/images/TV05.webp";
import RT01 from "../../public/images/RT01.webp";

export default function Store() {
  return (
    <div className="m-4 card">
      <Image className="store img" src={ PC01 } width={220} height={220}  alt="Picture"/>
      <Image className="store img" src={ PC02 } width={220} height={220}  alt="Picture"/>
      <Image className="store img" src={ PC03 } width={220} height={220}  alt="Picture"/>
      <Image className="store img" src={ PC04 } width={220} height={220}  alt="Picture"/>
      <Image className="store img" src={ TV01 } width={220} height={220}  alt="Picture"/>
      <Image className="store img" src={ TV02 } width={220} height={220}  alt="Picture"/>
      <Image className="store img" src={ TV03 } width={220} height={220}  alt="Picture"/>
      <Image className="store img" src={ TV04 } width={220} height={220}  alt="Picture"/>
      <Image className="store img" src={ TV05 } width={220} height={220}  alt="Picture"/>
      <Image className="store img" src={ RT01 } width={220} height={220}  alt="Picture"/>
    </div>
  );
}
