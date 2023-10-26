import Link from "next/link"

const Navbar = () => {
  return (
    <nav className="bg-slate-400 items-center px-20 font-bold text-black">
        <Link href="/">
        Home
        </Link>
    </nav>
  )
}

export default Navbar;