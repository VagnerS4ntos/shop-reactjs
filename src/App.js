import React from 'react';
import ReactStars from 'react-rating-stars-component';
import AddToCart from './components/AddToCart';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from './store/sliceProducts';

function App() {
  const dispatch = useDispatch();
  const { allProducts, loading } = useSelector((state) => state.allProducts);

  React.useEffect(() => {
    dispatch(fetchProducts());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <main className="container py-10">
      {loading ? (
        <h1 className="text-2xl">Loading...</h1>
      ) : (
        <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
          {allProducts.map((product) => (
            <div
              key={product.id}
              className="flex flex-col xs:flex-row gap-5 bg-white p-2 rounded-md"
            >
              <img src={product.image} alt={product.title} className="w-40" />
              <ul className="flex flex-col">
                <li className="font-bold">{product.title}</li>
                <li className="text-xl">
                  {product.price.toLocaleString('en-us', {
                    style: 'currency',
                    currency: 'USD',
                  })}
                </li>
                <li className="flex items-center gap-2">
                  <ReactStars
                    size={30}
                    edit={false}
                    value={product.rating.rate}
                    isHalf={true}
                    activeColor="#FDE047"
                  />
                  ({product.rating.count})
                </li>
                <li className="mt-auto mb-2">
                  <AddToCart id={product.id} />
                </li>
              </ul>
            </div>
          ))}
        </section>
      )}
    </main>
  );
}

export default App;
