import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { openProductDetails } from '../store/sliceProducts';
import ReactStars from 'react-rating-stars-component';
import AddToCart from './AddToCart';

function ProductDetail() {
  const dispatch = useDispatch();
  const { productDetail } = useSelector((state) => state.products);

  function details({ target }) {
    if (target.dataset.close === 'true') {
      dispatch(openProductDetails(false));
    }
  }

  return (
    <div class="relative z-10">
      <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
      <div
        class="fixed inset-0 z-10 overflow-y-auto"
        onClick={details}
        data-close={10}
      >
        <div
          class="flex min-h-full items-center justify-center p-4 text-center"
          data-close={true}
        >
          <div class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
            <div class="bg-white px-4 pt-5 pb-4 sm:p-6">
              <div class="sm:flex sm:items-start">
                <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                  <div class="mt-2">
                    <div className="grid place-items-center">
                      <img
                        src={productDetail[0].image}
                        alt={productDetail[0].title}
                        className="w-32"
                      />
                    </div>
                    <ul className="mt-5 text-center">
                      <li className="text-xl font-bold">
                        {productDetail[0].title} -{' '}
                        {productDetail[0].price.toLocaleString('en-us', {
                          style: 'currency',
                          currency: 'USD',
                        })}
                      </li>
                      <li className="flex items-center justify-center">
                        <ReactStars
                          size={30}
                          edit={false}
                          value={productDetail[0].rating.rate}
                          isHalf={true}
                          activeColor="#FDE047"
                        />
                        ({productDetail[0].rating.count})
                      </li>
                      <li>{productDetail[0].description}</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 px-10 py-4">
              <AddToCart id={productDetail[0].id} />
              <button
                className="bg-red-500 hover:bg-red-600 active:bg-red-400 text-white px-2 py-1 rounded-md"
                data-close={true}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
