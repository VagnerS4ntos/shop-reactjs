import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getProductDetail, openProductDetails } from '../store/sliceProducts';

function Details({ id }) {
  const { allProducts } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  function openProductDetail({ target }) {
    const currentProductDetail = allProducts.filter(
      (product) => product.id.toString() === target.dataset.id.toString(),
    );
    dispatch(getProductDetail(currentProductDetail));
    dispatch(openProductDetails(true));
  }

  return (
    <button
      className="bg-blue-500 hover:bg-blue-600 active:bg-blue-400 text-white px-2 py-1 rounded-md"
      data-id={id}
      onClick={openProductDetail}
    >
      Details
    </button>
  );
}

export default Details;
