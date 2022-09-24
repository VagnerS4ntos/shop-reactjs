import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { updateCart } from './store/sliceCart';

function Checkout() {
  const { cart } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const total = cart.reduce((value, acc) => {
    return value + acc.price * acc.cartQuantity;
  }, 0);

  return (
    <main className="container pb-10 pt-32 gap-10">
      <h1 className="text-2xl font-bold text-center mb-4">Checkout</h1>
      <section className="bg-white border rounded-md shadow-lg p-4 border-black mt-2 max-w-6xl mx-auto">
        <div>
          <h2 className="text-xl font-bold mb-2">Shipping address</h2>
          <form>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-20 mb-2">
              <input
                type="text"
                placeholder="First name*"
                required
                className="border-b px-2 py-1 border-black"
              />
              <input
                type="text"
                placeholder="Last name*"
                required
                className="border-b px-2 py-1 border-black"
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-20 mb-2">
              <input
                type="email"
                placeholder="E-mail*"
                required
                className="border-b px-2 py-1 border-black"
              />
              <input
                type="text"
                placeholder="Phone"
                required
                className="border-b px-2 py-1 border-black"
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-20 mb-2">
              <input
                type="text"
                placeholder="Address*"
                required
                className="border-b px-2 py-1 border-black"
              />
              <input
                type="text"
                placeholder="City*"
                required
                className="border-b px-2 py-1 border-black"
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-20 mb-2">
              <input
                type="text"
                placeholder="Zip/ Postal Code*"
                required
                className="border-b px-2 py-1 border-black"
              />
              <input
                type="text"
                placeholder="Country*"
                required
                className="border-b px-2 py-1 border-black"
              />
            </div>
          </form>
        </div>

        <div className="mt-10">
          <h2 className="text-xl font-bold mb-2">Payment</h2>
          <form>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-20 mb-2">
              <input
                type="text"
                placeholder="Name on card*"
                required
                className="border-b px-2 py-1 border-black"
              />
              <input
                type="text"
                placeholder="Card number*"
                required
                className="border-b px-2 py-1 border-black"
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-20 mb-2">
              <input
                type="text"
                placeholder="Expire date*"
                required
                className="border-b px-2 py-1 border-black"
              />
              <input
                type="text"
                placeholder="CVV*"
                required
                className="border-b px-2 py-1 border-black"
              />
            </div>
          </form>
        </div>

        <div className="mt-10">
          <h2 className="text-xl font-bold mb-2">Sumary</h2>
          {cart.map((product) => (
            <div className="flex justify-between mb-3 gap-5 font-semibold">
              <p>{product.title}</p>
              <p className="text-green-600">
                {product.cartQuantity} x{' '}
                {product.price.toLocaleString('en-us', {
                  style: 'currency',
                  currency: 'USD',
                })}
              </p>
            </div>
          ))}
          <div className="text-xl font-bold flex justify-between">
            <p>Total</p>
            <p>
              {total.toLocaleString('en-us', {
                style: 'currency',
                currency: 'USD',
              })}
            </p>
          </div>
        </div>
        <Link
          to="/finishorder"
          className="bg-blue-500 hover:bg-blue-600  px-2 py-1 rounded-md uppercase text-white mt-5 font-bold inline-block"
          onClick={() => dispatch(updateCart([]))}
        >
          Place order
        </Link>
      </section>
    </main>
  );
}

export default Checkout;
