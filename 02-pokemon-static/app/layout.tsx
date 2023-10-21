import "@/styles/globals.css";
import { Providers } from "./providers";
import { Navbar } from "./components/ui";

export default function RootLayout({ children, title }: { children: React.ReactNode, title: string }) {
  return (
    <html lang="en" >
      <head>
        <title>{ title || 'Pokemon App' }</title>
        <meta name="author" content="Edwar Castillo" />
        <meta name="description" content={`Información sobre ${title}`} />
        <meta name="keywords" content={`${title},poke, app, next`} />
      </head>
      <body>
      <Navbar />
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>      
          {children}
        </Providers>
      </body>
    </html>
  );
}
