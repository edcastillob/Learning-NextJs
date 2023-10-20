
import {  ReactNode  } from "react";
import Head from "next/head";

export const LayouT = ( { children, title }: { children: React.ReactNode, title: string }) => {
  

  return (
    <>
      <Head>
        <title>{title || "ED"}</title>
        <meta name="author" content="Edwar Castillo" />
        <meta name="description" content="Información del poke" />
        <meta name="keywords" content="poke, app, next" />
      </Head>

      <main>{children}</main>
    </>
  )
};



