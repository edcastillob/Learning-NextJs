import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className='flex gap-4'>
      <h1 className='text-2xl'>App-auth</h1>
        <ul className='flex gap-2 justify-between'>
            <Link href='/'><li>Home</li></Link>
            <Link href='/register'><li>Register</li></Link>
            <Link href='/dashboard'><li>DashBoard</li></Link>
            <Link href='/api/auth/signin'><li>SignIn</li></Link>
            <Link href='/api/auth/signout'><li>SingnOut</li></Link>
            
            
            
            
        </ul>
    </nav>
  )
}

export default Navbar;