import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';

function Header() {
  return (
    <header className="bg-yellow-300 py-2">
      <section className="container flex justify-between items-center">
        <img src="/logo.png" alt="Logo" className="w-20" />
        <div className="p-1 cursor-pointer">
          <FaShoppingCart color="#2196F3" size={25} />
        </div>
      </section>
    </header>
  );
}

export default Header;
