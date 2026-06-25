import { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { ProductCard } from '../ui/ProductCard';

export function SearchPage() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q');
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (!query) {
      navigate('/');
      return;
    }

    const fetchProducts = async () => {
      const response = await fetch(
        'https://dummyjson.com/products/search?q=' + query
      );
      const data = await response.json();
      setProducts(
        data.products.filter((product) => product.category === 'groceries')
      );
    };

    fetchProducts();
  }, [query, navigate]);

  return (
    <div className="mt-44 container mx-auto px-5">
      {products.length === 0 ? (
        <p className="text-center font-opensans text-2xl text-gray-400 py-20">
          Nothing found for:{' '}
          <span className="text-[#517907] font-semibold">"{query}"</span>
        </p>
      ) : (
        <p className="font-opensans text-2xl font-semibold mb-2">
          Results for: <span className="text-[#517907]">"{query}"</span>
        </p>
      )}
      <ul className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-10 my-8">
        {products.map((product) => (
          <li key={product.id}>
            <ProductCard
              title={product.title}
              price={product.price}
              rating={product.rating}
              image={product.thumbnail}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
