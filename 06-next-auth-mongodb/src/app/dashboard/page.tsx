"use client";
import { useSession } from 'next-auth/react' 


const DashboasrdPage = () => {
  const { data: session, status} = useSession();
  console.log(session, status)
  return (
    <div>_</div>
  )
}

export default DashboasrdPage;