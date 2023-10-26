import NavbarStore from "@/components/navbarStore/page";

export const metadata = {
  title: " Store - Next App",  
}
export default function LayoutStore({ children }) {
    return (
      <>
      <NavbarStore />
       {children}        
      </>
       
         
     
    );
  }