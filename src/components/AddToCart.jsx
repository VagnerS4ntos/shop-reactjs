import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateCart } from '../store/sliceCart';

function AddToCart({ id }) {
  const { cart } = useSelector((state) => state.cart);
  const { allProducts } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const { pathname } = window.location;

  function addProductToCart({ target }) {
    const currentCart = cart.map((product) => Object.assign({}, product));
    const currentProductOnCart = cart?.some(
      (element) => element.id.toString() === target.dataset.id.toString(),
    );
    if (currentProductOnCart) {
      currentCart.map((product) => {
        if (product.id.toString() === target.dataset.id.toString()) {
          product.cartQuantity += 1;
        }
        return product;
      });
    } else {
      const newProductToCart = allProducts.map((product) =>
        Object.assign({}, product),
      );
      newProductToCart.map((product) => {
        if (product.id.toString() === target.dataset.id.toString()) {
          product.cartQuantity += 1;
        }
        return product;
      });
      currentCart.push(...newProductToCart);
    }
    const noEmptyQuantity = currentCart.filter(
      (product) => product.cartQuantity !== 0,
    );
    dispatch(updateCart(noEmptyQuantity));
  }

  return (
    <>
      {pathname === '/cart' ? (
        <button
          className="bg-gray-400 hover:bg-gray-500 active:bg-gray-300 w-6"
          data-id={id}
          onClick={addProductToCart}
        >
          +
        </button>
      ) : (
        <button
          className="bg-green-500 hover:bg-green-600 active:bg-green-400 text-white px-2 py-1 rounded-md w-full"
          data-id={id}
          onClick={addProductToCart}
        >
          Add to cart
        </button>
      )}
    </>
  );
}

export default AddToCart;
