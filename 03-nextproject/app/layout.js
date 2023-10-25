import Footer from "@/components/footer/Footer";
import Navbar from "../components/navbar/page";
import { Roboto } from 'next/font/google';
import './globals.css';

export const metadata = {
  title: " Next App",
  description: "Practicando desarrollo con Next",
  author: "Full Stack Edwar Castillo",
  keywords: ['NextJs', 'FullStack']
}

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  style: ['italic', 'normal'],
  subsets: ['latin']
})
export default function RootLayout({ children }) {
 return (
    <html lang="en">
      <body className={ roboto.className }>
      <Navbar />
        {children}
      <Footer/>

        </body>
    </html>
  )
}
