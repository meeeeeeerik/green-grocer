import { useEffect, useState } from 'react';
import { ProductCard } from '../ui/ProductCard';
import { getGroceries } from '../api/products';

export function DailyBestSell() {
  const [products, setProducts] = useState([]);
  const [activeFilter, setActiveFilter] = useState('All');
  const filters = ['All', 'Top sell', 'Vegetables', 'Fruit'];

  const filteredProducts = products.filter((product) => {
    if (activeFilter === 'All') return true;
    if (activeFilter === 'Vegetables')
      return product.tags.includes('vegetables');
    if (activeFilter === 'Fruit') return product.tags.includes('fruits');
    if (activeFilter === 'Top sell') return product.rating >= 4.5;
    return true;
  });

  const [visibleCount, setVisibleCount] = useState(8);
  const visibleProducts = filteredProducts.slice(0, visibleCount);

  const handleShowMore = () => setVisibleCount((prev) => prev + 8);

  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
    setVisibleCount(8);
  };

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await getGroceries();
      setProducts(data);
    };
    fetchProducts();
  }, []);

  return (
    <div>
      <div className="xl:sticky xl:top-[96px] bg-white xl:z-10 border-b border-gray-100">
        <div className="container mx-auto px-5 py-3 sm:py-5">
          <div className="flex flex-wrap items-center gap-4 sm:gap-6 lg:gap-10">
            <h2 className="text-2xl sm:text-3xl xl:text-4xl font-bold font-palanquin">
              Daily Best Sell
            </h2>
            <ul className="flex flex-wrap items-center gap-2 sm:gap-4">
              {filters.map((filter) => (
                <li key={filter}>
                  <button
                    onClick={() => handleFilterChange(filter)}
                    className={`font-opensans text-base sm:text-xl xl:text-2xl transition-colors duration-200 hover:text-[#517907] ${
                      activeFilter === filter
                        ? 'text-[#517907] font-semibold'
                        : 'text-black'
                    }`}
                  >
                    {filter}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-5">
        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-10 mt-8">
          {visibleProducts.map((product) => (
            <ProductCard
              key={product.id}
              title={product.title}
              price={product.price}
              rating={product.rating}
              image={product.thumbnail}
            />
          ))}
        </div>

        <div className="flex justify-center mt-8 sm:mt-10 mb-10">
          {visibleCount < filteredProducts.length ? (
            <button
              className="text-base sm:text-xl xl:text-2xl font-opensans border-gray-300 border-4 px-8 sm:px-12 py-4 sm:py-6 hover:border-[#517907] hover:text-[#517907] transition-colors duration-300"
              onClick={handleShowMore}
            >
              Show More
            </button>
          ) : (
            ''
          )}
        </div>
      </div>
    </div>
  );
}
