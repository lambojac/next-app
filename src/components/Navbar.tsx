import React from 'react';
import Link from "next/link";

const Navbar = () => {
  return (
    <div className='hidden lg:block'>
      <div className="container">
        <div className="flex w-fit gap-10 mx-auto font-medium py-4 text-blackish">
          <Link href="/" className="navbar__link">Home</Link>
          <Link href="/about" className="navbar__link relative">Categories</Link>
          <Link href="/mens" className="navbar__link relative">MEN'S</Link>
          <Link href="/womens" className="navbar__link relative">WOMEN'S</Link>
          <Link href="/kids" className="navbar__link relative">KIDS</Link>
          <Link href="/accessories" className="navbar__link relative">ACCESSORIES</Link>
          <Link href="/sale" className="navbar__link relative">SALE</Link>
          <Link href="/new-arrivals" className="navbar__link relative">NEW ARRIVALS</Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
