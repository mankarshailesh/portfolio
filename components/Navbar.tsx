import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="bg-gray-800 text-white">
      <div className="max-w-5xl mx-auto flex items-center justify-between px-4 py-3">
        <Link href="/" className="font-bold text-lg">
          Shailesh Mankar
        </Link>
        <button className="md:hidden" onClick={() => setOpen((o) => !o)}>
          <span className="material-icons">menu</span>
        </button>
        <div
          className={`flex-col md:flex-row md:flex gap-4 md:gap-6 items-center ${
            open ? "flex" : "hidden"
          } md:flex bg-gray-800 md:bg-transparent absolute md:static left-0 right-0 top-14 md:top-auto z-10 md:z-auto p-4 md:p-0`}
        >
          <Link href="/" className="hover:text-blue-300">
            Home
          </Link>
          <Link href="/about" className="hover:text-blue-300">
            About
          </Link>
          <Link href="/gallery" className="hover:text-blue-300">
            Gallery
          </Link>
          <Link href="/contact" className="hover:text-blue-300">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
