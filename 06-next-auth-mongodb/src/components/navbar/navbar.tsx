
import Link from "next/link";
import { getServerSession } from 'next-auth'



const Navbar = async() => {
  const session = await getServerSession();

 
  
  return (
    <nav className="bg-zinc-900 p-4">
      <div className="flex justify-between container mx-auto">
      <Link href="/">
        <h1 className="text-3xl font-bold">App-auth</h1>  
        </Link>      
      <ul className=" flex gap-x-2">
       {
          session ? (
            <>
          <Link href="/">
          <li className="px-3 py-1">Home</li>
        </Link>  
        <Link href="/dashboard">
          <li className="px-3 py-1">DashBoard</li>
        </Link>
        <Link href="/api/auth/signout">
          <li className="px-3 py-1">SignOut</li>
        </Link>
        </>
          ) : (
            <>
          <Link href="/register">
          <li className="px-3 py-1">Register</li>
        </Link>
        <Link href="/login">
          <li className="px-3 py-1">Login</li>
        </Link> 
       
        </> 
          )           
        }
        
        
        

      </ul>
      </div>
    </nav>
  );
};

export default Navbar;
