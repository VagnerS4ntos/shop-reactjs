import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateCart } from '../store/sliceCart';

function AddToCart({ id }) {
  const { cart } = useSelector((state) => state.cart);
  const { allProducts } = useSelector((state) => state.products);
  const dispatch = useDispatch();

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
    <button
      className="bg-green-500 hover:bg-green-600 active:bg-green-400 text-white px-2 py-1 rounded-md"
      data-id={id}
      onClick={addProductToCart}
    >
      Add to cart
    </button>
  );
}

export default AddToCart;
