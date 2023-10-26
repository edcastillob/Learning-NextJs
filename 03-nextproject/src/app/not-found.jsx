import Image from "next/image";
import Link from "next/link"; 

export default function NotFound() {
  return (
    <section>
      <Image
        src="/notF.png"
        width={200}
        height={200}
        alt="Picture of the author"
      />
      <Link href="/">Volver</Link>
    </section>
  );
}
