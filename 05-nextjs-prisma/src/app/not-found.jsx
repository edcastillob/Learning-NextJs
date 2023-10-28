import Image from "next/image";


export default function NotFound() {
  return (
    <section className="flex h-[calc(100vh-10rem)] justify-center items-center">
      <Image
      className="mx-auto"
        src="/notF2.png"
        width={200}
        height={200}
        alt="Error 404- Pag NO encontrada"
      />       
    </section>
  );
}
