import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import AddToCart from './components/AddToCart';
import RemoveFromCart from './components/RemoveFromCart';
import RemoveItem from './components/RemoveItem';

function Cart() {
  const { cart } = useSelector((state) => state.cart);
  const total = cart.reduce((value, acc) => {
    return value + acc.price * acc.cartQuantity;
  }, 0);

  return (
    <main className="container pb-10 pt-32 sm:flex gap-10">
      {cart.length !== 0 ? (
        <>
          <div className="space-y-5">
            {cart.map((product) => (
              <div className="bg-white p-4 flex flex-col xs:flex-row gap-4 rounded-md shadow-md max-w-screen-md">
                <img src={product.image} alt={product.title} className="w-32" />
                <ul className="flex flex-col">
                  <li className="font-semibold text-md md:text-xl">
                    {product.title}
                  </li>
                  <li className="font-semibold text-ld md:text-xl">
                    Quantity: {product.cartQuantity}
                  </li>
                  <li className="my-2">
                    <AddToCart id={product.id} />
                    <span className="bg-gray-300 px-1 h-6 inline-block font-semibold">
                      {product.price.toLocaleString('en-us', {
                        style: 'currency',
                        currency: 'USD',
                      })}
                    </span>
                    <RemoveFromCart id={product.id} />
                  </li>
                  <li>
                    <RemoveItem id={product.id} />
                  </li>
                  <li className="mt-auto text-2xl">
                    Total:{' '}
                    <span className="text-red-600 font-bold">
                      {(product.price * product.cartQuantity).toLocaleString(
                        'en-us',
                        {
                          style: 'currency',
                          currency: 'USD',
                        },
                      )}
                    </span>
                  </li>
                </ul>
              </div>
            ))}
          </div>
          <div className="bg-gray-200 p-4 rounded-md shadow-md mt-5 sm:mt-0 h-fit text-xl text-red-600 font-bold uppercase">
            Total:{' '}
            {total.toLocaleString('en-us', {
              style: 'currency',
              currency: 'USD',
            })}
          </div>
        </>
      ) : (
        <div className="flex flex-col">
          <h1 className="text-2xl">Cart empty...</h1>
          <Link
            to="/"
            className="bg-blue-400 px-2 py-1 text-white rounded-md shadow-md w-fit mt-5 hover:bg-blue-500 uppercase"
          >
            Start buying
          </Link>
        </div>
      )}
    </main>
  );
}

export default Cart;
