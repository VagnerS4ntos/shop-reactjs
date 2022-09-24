import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateCart } from '../store/sliceCart';

function RemoveFromCart({ id }) {
  const { cart } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const { pathname } = window.location;

  function addProductToCart({ target }) {
    const currentCart = cart.map((product) => Object.assign({}, product));
    currentCart.map((product) => {
      if (product.id.toString() === target.dataset.id.toString()) {
        product.cartQuantity -= 1;
      }
      return product;
    });
    const noEmptyQuantity = currentCart.filter(
      (product) => product.cartQuantity !== 0,
    );
    dispatch(updateCart(noEmptyQuantity));
  }

  return (
    <>
      {pathname === '/cart' ? (
        <button
          className="bg-gray-400 hover:bg-gray-500 active:bg-gray-300 w-6 font-bold"
          data-id={id}
          onClick={addProductToCart}
        >
          -
        </button>
      ) : (
        <button
          className="bg-red-500 hover:bg-red-600 active:bg-red-400 text-white px-2 py-1 rounded-md"
          data-id={id}
          onClick={addProductToCart}
        >
          Remove from cart
        </button>
      )}
    </>
  );
}

export default RemoveFromCart;
