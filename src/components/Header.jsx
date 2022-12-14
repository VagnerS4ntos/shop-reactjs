import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Header() {
  const { cart } = useSelector((state) => state.cart);
  const totalProductsOnCart = cart.reduce((value, acc) => {
    return value + acc.cartQuantity;
  }, 0);

  return (
    <header className="bg-black py-2 fixed w-full z-10">
      <section className="container flex justify-between items-center">
        <Link to="/">
          <img src="/logo.png" alt="Logo" className="w-20" />
        </Link>
        <div className="p-1 cursor-pointer ">
          <Link to="/cart" className="relative">
            <FaShoppingCart color="white" size={25} />
            <span
              className={`text-white bg-green-700 absolute bottom-4 left-6 rounded-full w-6 h-6 place-items-center ${
                totalProductsOnCart ? 'grid' : 'hidden'
              }`}
            >
              {totalProductsOnCart}
            </span>
          </Link>
        </div>
      </section>
    </header>
  );
}

export default Header;
