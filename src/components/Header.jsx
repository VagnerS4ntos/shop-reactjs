import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-black py-2 fixed w-full z-10">
      <section className="container flex justify-between items-center">
        <Link to="/">
          <img src="/logo.png" alt="Logo" className="w-20" />
        </Link>
        <div className="p-1 cursor-pointer">
          <Link to="/cart">
            <FaShoppingCart color="white" size={25} />
          </Link>
        </div>
      </section>
    </header>
  );
}

export default Header;
