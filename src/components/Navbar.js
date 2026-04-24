// src/components/Navbar.jsx
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md p-4 flex gap-6">
      <Link href="/" className="text-blue-600 hover:underline">Beranda</Link>
      <Link href="/catalogue" className="text-blue-600 hover:underline">Katalog</Link>
      <Link href="/about" className="text-blue-600 hover:underline">Tentang</Link>
      <Link href="/books" className="text-blue-600 hover:underline">Buku</Link>
    </nav>
  );
}