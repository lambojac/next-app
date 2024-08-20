import React from 'react';
import Link from "next/link";

const Navbar = () => {
  return (
    <div className='hidden lg:block'>
      <div className="container">
        <div className="flex w-fit gap-10 mx-auto font-medium py-4 text-blackish">
          <Link href="/" className="navbar__link">Home</Link>
          <Link href="/about" className="navbar__link">Categories</Link>
          <Link href="/contact" className="navbar__link">MEN'S</Link>
          <Link href="/contact" className="navbar__link">WOMEN'S</Link>
          <Link href="/contact" className="navbar__link">JEWELRY</Link>
          <Link href="/contact" className="navbar__link">PERFUME</Link>
          <Link href="/contact" className="navbar__link">BLOG</Link>
          <Link href="/contact" className="navbar__link">NOT OFFERS</Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
