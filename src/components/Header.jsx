import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';

function Header() {
  return (
    <header className="bg-black py-2 fixed w-full z-10">
      <section className="container flex justify-between items-center">
        <img src="/logo.png" alt="Logo" className="w-20" />
        <div className="p-1 cursor-pointer">
          <FaShoppingCart color="white" size={25} />
        </div>
      </section>
    </header>
  );
}

export default Header;
