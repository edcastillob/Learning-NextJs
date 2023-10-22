'use client';
import styles from "./Navbar.module.css"; 
import { Spacer } from '@nextui-org/react';
import Image from 'next/image'

export const Navbar = () => {

  return (
    <>
    <div className={styles.navbar}>
    <Image  
    src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"}
    alt="iconoApp"
    width={70}
    height={70}
    />

      <h2 className={styles.h2}>P</h2> 
      <h3 className={styles.h3}>okémon</h3> 
   
      <Spacer />
      <h3 className={styles.h4}>Favoritos</h3> 

   


    </div>
    </>
  );
};
