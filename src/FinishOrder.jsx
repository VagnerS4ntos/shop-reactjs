import React from 'react';
import { Link } from 'react-router-dom';

function Checkout() {
  return (
    <main className="container pb-10 pt-32 gap-10">
      <h1 className="text-2xl font-bold text-center mb-4">Checkout</h1>
      <section className="bg-white border rounded-md shadow-lg p-4 border-black mt-2 max-w-6xl mx-auto">
        <h2 className="text-2xl  mb-2">Thank you for your order.</h2>
        <p>
          Your order number is #2001539. We have emailed your order
          confirmation, and will send you an update when your order has shipped.
        </p>
        <Link
          to="/"
          className="bg-blue-600 px-2 py-1 rounded-md text-white mt-5 inline-block uppercase"
        >
          Home page
        </Link>
      </section>
    </main>
  );
}

export default Checkout;
