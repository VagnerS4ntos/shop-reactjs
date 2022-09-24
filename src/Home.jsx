import React from 'react';
import ReactStars from 'react-rating-stars-component';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from './store/sliceProducts';
import OpenDetails from './components/OpenDetails';
import ProductDetail from './components/ProductDetail';
import AddToCart from './components/AddToCart';

function Home() {
  const dispatch = useDispatch();
  const { allProducts, loading, openDetails } = useSelector(
    (state) => state.products,
  );

  React.useEffect(() => {
    dispatch(fetchProducts());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <main className="container pb-10 pt-32">
      {openDetails && <ProductDetail />}

      {loading ? (
        <h1 className="text-2xl">Loading...</h1>
      ) : (
        <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
          {allProducts.map(({ id, image, title, price, rating }) => (
            <div
              key={id}
              className="flex flex-col xs:flex-row gap-5 bg-white p-2 rounded-md shadow-lg"
            >
              <div className="flex items-center justify-center">
                <img src={image} alt={title} className="w-40" />
              </div>
              <ul className="flex flex-col w-full items-center xs:items-start">
                <li className="font-bold text-center xs:text-left">{title}</li>
                <li className="text-xl">
                  {price.toLocaleString('en-us', {
                    style: 'currency',
                    currency: 'USD',
                  })}
                </li>
                <li className="flex items-center gap-2 mb-2">
                  <ReactStars
                    size={30}
                    edit={false}
                    value={rating.rate}
                    isHalf={true}
                    activeColor="#FDE047"
                  />
                </li>
                <li className="mt-auto mb-2 text-center xs:text-left w-3/4 space-y-2">
                  <OpenDetails id={id} />
                  <AddToCart id={id} />
                </li>
              </ul>
            </div>
          ))}
        </section>
      )}
    </main>
  );
}

export default Home;
