import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <h1> Navbar</h1>
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
    </>
  );
}
