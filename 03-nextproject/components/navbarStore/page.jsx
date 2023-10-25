import Link from "next/link";
import "./NavbarStore.css"

export default function NavbarStore() {
  return (
    <nav className="navbarStore">
      <ul>
        
        <li>
          <Link href="/store/computer"> Computer</Link>
        </li>
        <li>
          <Link href="/store/electronic"> Electronic</Link>
        </li>
       
      </ul>
    </nav>
  );
}
