import Image from 'next/image'
import TV01 from "@public/images/TV01.webp";
import RT01 from "@public/images/RT01.webp";
import "./Electronic.css"
export const metadata = {
  title: " Store - Electronic",  
}

export default function Electronic() {
  return (
    <>
      <h3 className='text-3xl ml-4'>Electronic</h3>
      <p className="text-center ml-4">
        "Discover the latest in cutting-edge electronics. From sleek smartphones
        to powerful laptops, our store offers a wide range of high-quality
        electronic devices. Whether you're looking for top-of-the-line
        headphones, smartwatches, or gaming consoles, we've got the gadgets to
        elevate your tech experience. Explore our selection today!"
      </p>
      <br />
      <div className='grid'>
      <Image
        className="mx-auto" 
        src={RT01}
        width={200}
        height={200}
        alt="NextJs"
        ></Image> 
      <ul className="list-disc pl-4 ml-12">
        <li>Smartphones</li>
        <li>Laptops</li>
        <li>Tablets</li>
        <li>Smartwatches</li>
        <li>Cameras</li>
        <li>Headphones</li>
        <li>Speakers</li>
        <li>Gaming Consoles</li>
        <li>TVs (Televisions)</li>
        <li>Wearable Devices</li>
        <li>Home Automation Devices</li>
        <li>VR (Virtual Reality) Headsets</li>
        <li>Drones</li>
        <li>Printers</li>
      </ul>
      <Image
        className="mx-auto" 
        src={TV01}
        width={200}
        height={200}
        alt="NextJs"
        ></Image> 
        </div>
    </>
  );
}
