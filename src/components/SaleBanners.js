import ApplesImage from '../assets/apples-image.jpg';
import CheeseImage from '../assets/cheese-image.jpg';
import ArrowIcon from '../assets/arrow-icon.svg';

export function SaleBanners() {
  return (
    <div className="container px-5 mx-auto max-xl:flex-col flex gap-7 justify-between">
      <div className="bg-[#DEF1BD] max-xl:flex-col-reverse max-xl:gap-4 flex items-center pt-6 pb-5 xl:pb-20 shadow-lg rounded-md">
        <img
          src={ApplesImage}
          alt="Apples"
          className="2xl:w-[660px] w-2/3 h-auto"
        />
        <div className="flex flex-col items-center">
          <p className="text-opensans text-base sm:text-xl 2xl:text-2xl mb-4 sm:mb-8 2xl:mb-16">
            SUMMER SALE
          </p>
          <p
            className="text-palanquin font-bold mb-3 sm:mb-4 2xl:mb-5 text-2xl sm:text-3xl 2xl:text-[40px] text-[#517907]"
            style={{ WebkitTextStroke: '1px black' }}
          >
            40%OFF
          </p>
          <p className="text-center text-3xl sm:text-4xl xl:text-5xl 2xl:text-[64px] mb-4 sm:mb-6 2xl:mb-8 text-palanquin font-bold">
            Fresh Fruit %100
          </p>
          <button className="text-palanquin font-bold text-base sm:text-xl 2xl:text-2xl flex gap-4 items-center px-6 sm:px-8 2xl:px-[35px] py-3 sm:py-4 2xl:py-6 bg-white border-black border-[1px] hover:bg-[#517907] hover:text-white hover:border-transparent group transition-colors duration-300">
            Shop Now
            <span className="transition-all duration-300 group-hover:translate-x-1 group-hover:brightness-0 group-hover:invert">
              <img src={ArrowIcon} alt="Arrow Icon" />
            </span>
          </button>
        </div>
      </div>
      <div className="bg-[#FDF8D0] flex flex-col items-center justify-between pt-5 xl:pt-20 2xl:w-[430px] shadow-lg rounded-md">
        <p className="text-2xl sm:text-4xl 2xl:text-6xl text-palanquin font-bold text-center max-xl:mb-4 px-4">
          Fresh Delivered Daily
        </p>
        <img src={CheeseImage} alt="Cheese" className=" max-md:w-2/3 h-auto" />
      </div>
    </div>
  );
}
