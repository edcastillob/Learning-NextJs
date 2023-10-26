import Image from 'next/image'
import PC01 from "@public/images/PC01.webp";
import PC02 from "@public/images/PC02.webp";
import "./Computer.css"
export const metadata = {
  title: " Store - Computer",  
}
export default function Computer() {
  return (
    <div className="ml-4">
      <h3 className="text-3xl">Computer</h3>
      <p className="text-center">
        Computers have revolutionized the way we live and work. These
        sophisticated machines process vast amounts of information at incredible
        speeds, allowing us to perform complex tasks, from data analysis to
        gaming, with ease. They come in various forms, from powerful desktop
        computers to sleek laptops and portable tablets, making them an integral
        part of our daily lives. The rapid advancement of technology continues
        to shape the future of computing, promising even more exciting
        possibilities in the years to come.
      </p>
      <br />
      <div className='grid'>
      <Image
        className="mx-auto" 
        src={PC02}
        width={200}
        height={200}
        alt="NextJs"
        ></Image> 
      <ul className="list-disc pl-4 ml-12">
        <li>Laptops (Notebooks)</li>
        <li>Desktops (Desktop Computers)</li>
        <li>Servers</li>
        <li>Tablets</li>
        <li>Gaming Computers</li>
        <li>Netbooks</li>
        <li>Workstations</li>
        <li>Small Form Factor Computers</li>
        <li>Mainframes</li>
        <li>Embedded Computers</li>
        <li>Microcomputers</li>
        <li>Quantum Computers</li>
        <li>Single-Board Computers</li>
        <li>Thin Clients</li>
      </ul>
      <Image
        className="mx-auto" 
        src={PC01}
        width={200}
        height={200}
        alt="NextJs"
        ></Image>
    </div>
    </div>
  );
}
