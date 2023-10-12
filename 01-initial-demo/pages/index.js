import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { MainLayout } from "@/components/Layouts/MainLayout";

const inter = Inter({ subsets: ["latin"] });

export default function Edwar() {
  return (
    <>
    <MainLayout>
    <h1 className={styles.center}>Home</h1>
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
    </MainLayout>

    </>
  );
}
