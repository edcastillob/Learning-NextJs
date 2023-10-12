import Image from "next/image";
import styles from "@/styles/Home.module.css";
import { MainLayout } from "@/components/Layouts/MainLayout";

const About = () => {
  return (
    <>
      <MainLayout>
        <h1 className={styles.center}>About</h1>
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
};

export default About;
