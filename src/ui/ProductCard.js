import CartIcon from '../assets/shopping-cart-icon.svg';
import StarFilledIcon from '../assets/star-filled-icon.svg';
import StarEmptyIcon from '../assets/star-empty-icon.svg';
import HeartIcon from '../assets/heart-empty-icon.svg';

export function ProductCard({ title, price, rating, image }) {
  return (
    <div className="shadow-xl px-3 sm:px-5 py-4 sm:py-8 rounded-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer">
      <div className="w-full h-[120px] sm:h-[180px] mb-4 sm:mb-10 overflow-hidden">
        <img
          src={image}
          alt={title}
          loading="lazy"
          className="w-full h-full object-contain hover:scale-110 transition-transform duration-500"
        />
      </div>
      <div>
        <div className="flex items-center justify-between mb-3 sm:mb-4">
          <div>
            <div className="font-opensans text-base sm:text-xl lg:text-2xl font-light mb-1 sm:mb-3 line-clamp-2">
              {title}
            </div>
            <div className="font-bold font-opensans text-sm sm:text-lg lg:text-2xl">
              ${price.toFixed(2)}
            </div>
          </div>
          <button className="w-7 h-7 sm:w-10 sm:h-10 p-1 sm:p-2 rounded-full bg-[#D6ECAC] flex-shrink-0 hover:bg-[#517907] transition-colors duration-300 group ml-2">
            <img
              src={CartIcon}
              alt=""
              className="w-full h-full group-hover:brightness-0 group-hover:invert transition-all duration-300"
            />
          </button>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-[2px] sm:gap-4">
            {[1, 2, 3, 4, 5].map((star) => (
              <img
                key={star}
                src={
                  star <= Math.round(rating) ? StarFilledIcon : StarEmptyIcon
                }
                alt=""
                className="w-3 h-3 sm:w-6 sm:h-6"
              />
            ))}
          </div>
          <button className="hover:scale-125 transition-transform duration-200 flex-shrink-0">
            <img src={HeartIcon} alt="" className="w-4 h-4 sm:w-6 sm:h-6" />
          </button>
        </div>
      </div>
    </div>
  );
}
