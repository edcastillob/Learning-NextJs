import Link from "next/link";

export default function NavbarStore() {
  return (
    <>
      <h1> Categories</h1>
      <ul>
        <li>
          <Link href="/store"> Store Go!</Link>
        </li>
        <li>
          <Link href="/store/computer"> Computer</Link>
        </li>
        <li>
          <Link href="/store/electronic"> Electronic</Link>
        </li>
       
      </ul>
    </>
  );
}
