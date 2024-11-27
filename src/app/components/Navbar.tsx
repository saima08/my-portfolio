import React from 'react';
import Link from "next/link";



function Navbar() {
  return (
    <div className='bg-[#0f1117]'>
      <nav className="flex flex-col md:flex-row justify-between items-center p-6 md:p-8">
        <h1 className="text-[#8b5cf6] text-2xl font-bold mb-4 md:mb-0">
          Saima 
        </h1>
        <div className="flex gap-8">
          <Link href="/" className="text-[#8b5cf6] hover:opacity-80 transition-opacity">
            Home
          </Link>
          <Link href="/about" className="text-gray-400 hover:text-[#8b5cf6] transition-colors">
            About me
          </Link>
          <Link href="/contact" className="text-gray-400 hover:text-[#8b5cf6] transition-colors">
            Contact
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
