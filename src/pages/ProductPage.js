import StarFilledIcon from '../assets/star-filled-icon.svg';
import StarEmptyIcon from '../assets/star-empty-icon.svg';
import CartIcon from '../assets/shopping-cart-icon.svg';
import HeartIcon from '../assets/heart-empty-icon.svg';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getProduct } from '../api/product';

export function ProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [activeImage, setActiveImage] = useState('');
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const fetchProduct = async () => {
      const data = await getProduct(id);
      setProduct(data);
      setActiveImage(data.thumbnail);
    };

    fetchProduct();
  }, [id]);

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleIncrease = () => {
    if (quantity < stock) {
      setQuantity(quantity + 1);
    }
  };

  const { title, price, rating, description, stock, images, category } =
    product;

  if (!title) {
    return <div className="mt-44 container mx-auto px-5 py-20" />;
  }

  return (
    <div className="mt-32 sm:mt-44 container mx-auto px-5">
      <p className="font-opensans text-sm sm:text-base text-gray-400 capitalize mb-4 sm:mb-10">
        {category} / <span className="text-[#517907]">{title}</span>
      </p>

      <div className="grid md:grid-cols-2 gap-6 sm:gap-8 lg:gap-16">
        <div>
          <div className="w-full h-[220px] xs:h-[260px] sm:h-[400px] lg:h-[460px] rounded-3xl shadow-xl overflow-hidden mb-4 sm:mb-6">
            <img
              src={activeImage}
              alt={title}
              className="w-full h-full object-contain"
            />
          </div>
          {images.length > 1 && (
            <ul className="flex items-center gap-2 sm:gap-4 overflow-x-auto pb-1">
              {images.slice(0, 5).map((image) => (
                <li key={image} className="flex-shrink-0">
                  <button
                    onClick={() => setActiveImage(image)}
                    className={`w-14 h-14 sm:w-20 sm:h-20 rounded-2xl overflow-hidden border-2 transition-colors duration-200 ${
                      activeImage === image
                        ? 'border-[#517907]'
                        : 'border-transparent hover:border-gray-200'
                    }`}
                  >
                    <img
                      src={image}
                      alt=""
                      className="w-full h-full object-contain"
                    />
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div>
          <h1 className="font-palanquin text-2xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">
            {title}
          </h1>

          <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <img
                  key={star}
                  src={
                    star <= Math.round(rating) ? StarFilledIcon : StarEmptyIcon
                  }
                  alt=""
                  className="w-4 h-4 sm:w-5 sm:h-5"
                />
              ))}
            </div>
            <span className="font-opensans text-sm sm:text-base text-gray-400">
              {rating.toFixed(1)}
            </span>
          </div>

          <p className="font-bold font-opensans text-2xl sm:text-4xl mb-4 sm:mb-6">
            ${price.toFixed(2)}
          </p>

          <p className="font-opensans text-base sm:text-lg text-gray-500 leading-relaxed mb-6 sm:mb-8">
            {description}
          </p>

          <p className="font-opensans text-sm sm:text-base mb-6 sm:mb-8">
            {stock > 0 ? (
              <span className="text-[#517907] font-semibold">
                In stock ({stock} available)
              </span>
            ) : (
              <span className="text-red-500 font-semibold">Out of stock</span>
            )}
          </p>

          <div className="flex flex-wrap items-center gap-3 sm:gap-6 mb-6 sm:mb-8">
            <div className="flex items-center border border-gray-300 flex-shrink-0">
              <button
                onClick={handleDecrease}
                className="w-9 h-9 sm:w-12 sm:h-12 text-xl hover:bg-gray-100 transition-colors duration-200"
              >
                -
              </button>
              <span className="w-8 sm:w-14 text-center font-opensans text-lg">
                {quantity}
              </span>
              <button
                onClick={handleIncrease}
                className="w-9 h-9 sm:w-12 sm:h-12 text-xl hover:bg-gray-100 transition-colors duration-200"
              >
                +
              </button>
            </div>

            <button className="flex items-center justify-center gap-2 sm:gap-3 bg-[#D6ECAC] hover:bg-[#517907] text-black hover:text-white transition-colors duration-300 px-5 sm:px-10 py-3 sm:py-4 rounded-full font-opensans text-sm sm:text-lg font-semibold group flex-1 sm:flex-initial">
              <img
                src={CartIcon}
                alt=""
                className="w-5 h-5 sm:w-6 sm:h-6 group-hover:brightness-0 group-hover:invert transition-all duration-300"
              />
              Add to Cart
            </button>

            <button className="w-9 h-9 sm:w-12 sm:h-12 flex items-center justify-center border border-gray-300 rounded-full hover:scale-110 transition-transform duration-200 flex-shrink-0">
              <img src={HeartIcon} alt="" className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
