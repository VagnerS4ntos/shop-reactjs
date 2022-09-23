import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateCart } from '../store/sliceCart';

function RemoveItem({ id }) {
  const { cart } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  function removeProductFromCart({ target }) {
    const currentCart = cart.map((product) => Object.assign({}, product));
    currentCart.map((product) => {
      if (product.id.toString() === target.dataset.id.toString()) {
        product.cartQuantity = 0;
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
      <button
        className="bg-yellow-400 hover:bg-yellow-300 p-1 rounded-md shadow-md my-2"
        data-id={id}
        onClick={removeProductFromCart}
      >
        Remove item
      </button>
    </>
  );
}

export default RemoveItem;
