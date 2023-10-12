// pages/contact.js
import { Navbar } from '@/components/Navbar/Navbar';
import Head from 'next/head';
import styles from "@/styles/Home.module.css";
import Image from "next/image";



const contact = () => {
  return (
    <>
      <Head>
        <title>Contacto - Edwar Next.js</title>
        <meta name="description" content="Formulario de contacto" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main className={styles.main}>
        <h1 className={styles.center}>Formulario de Contacto</h1>
        <form className={styles.center}>
          <div>
            <label htmlFor="name">Nombre:</label>
            <input type="text" id="name" name="name" />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" />
          </div>
          <div>
            <label htmlFor="message">Mensaje:</label>
            <textarea id="message" name="message" rows="4" />
          </div>
          <button type="submit">Enviar</button>
        </form>

        <div className={styles.center}>
          <Image
            className={styles.logo}
            src="/next.svg"
            alt="Next.js Logo"
            width={180}
            height={37}
            priority
          />
        </div>
      </main>
    </>
  );
};

export default contact;
