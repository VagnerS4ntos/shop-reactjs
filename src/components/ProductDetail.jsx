import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { openProductDetails } from '../store/sliceProducts';
import ReactStars from 'react-rating-stars-component';

function ProductDetail() {
  const dispatch = useDispatch();
  const { productDetail } = useSelector((state) => state.products);

  function addToCart({ target }) {
    console.log(target.dataset.id);
  }

  function teste({ target }) {
    if (target.dataset.close === 'true') {
      dispatch(openProductDetails(false));
    }
  }

  return (
    <div class="relative z-10">
      <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
      <div
        class="fixed inset-0 z-10 overflow-y-auto"
        onClick={teste}
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
                  <h3
                    class="text-lg font-medium leading-6 text-gray-900"
                    id="modal-title"
                  >
                    Product Details
                  </h3>
                  <div class="mt-2">
                    <div className="grid place-items-center">
                      <img
                        src={productDetail[0].image}
                        alt={productDetail[0].title}
                        className="w-32"
                      />
                    </div>
                    <ul className="mt-5">
                      <li className="text-xl font-bold">
                        {productDetail[0].title} -{' '}
                        {productDetail[0].price.toLocaleString('en-us', {
                          style: 'currency',
                          currency: 'USD',
                        })}
                      </li>
                      <li className="flex items-center gap-2">
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
            <div class="bg-gray-50 px-4 py-3 space-y-2 sm:flex sm:flex-row-reverse sm:px-6 sm:space-y-0">
              <button
                type="button"
                class="inline-flex w-full justify-center rounded-md border border-transparent bg-green-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
                data-id={productDetail[0].id}
                onClick={addToCart}
              >
                Add to cart
              </button>
              <button
                type="button"
                class="inline-flex w-full justify-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
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
