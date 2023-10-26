import Link from "next/link";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar py-5">
      <Link href="/">
        <h1 className="text-3xl font-bold"> NextJs Posts App</h1>
      </Link>

      <ul>
        <li>
          <Link href="/"> Home</Link>
        </li>
        <li>
          <Link href="/about"> About</Link>
        </li>
        <li>
          <Link href="/store"> Store</Link>
        </li>
        <li>
          <Link href="/post"> Post</Link>
        </li>
        <li>
          <Link href="/contact"> Contact</Link>
        </li>
      </ul>
    </nav>
  );
}
