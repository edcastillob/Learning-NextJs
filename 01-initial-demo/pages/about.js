import Image from "next/image";
import styles from "@/styles/Home.module.css";
import { MainLayout } from "@/components/Layouts/MainLayout";
import { DarkLayout } from "@/components/Layouts/DarkLayout";

const About = () => {
  return (
    <>
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
    </>
  );
};
About.getLayout = function getLayout(page) {
  return (
    <MainLayout>
      <DarkLayout>{page}</DarkLayout>
    </MainLayout>
  );
};

export default About;
