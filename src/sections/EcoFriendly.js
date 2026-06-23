import CartOfProducts from '../assets/cart-of-products-image.png';

export function EcoFriendly() {
  return (
    <div className="container mx-auto px-5 mb-[185px]">
      <div className="bg-gradient-to-tr from-[#DEF1BD] to-[#f8fcd6] flex flex-col xl:flex-row gap-8 md:gap-16 lg:gap-20 xl:gap-40 pt-10 md:pt-[75px] pl-8 md:pl-12 lg:pl-16 xl:pl-32 pb-10 md:pb-20 lg:pb-28 pr-6 md:pr-8 xl:pr-11 rounded-xl shadow-lg">
        <div className="flex justify-center">
          <img
            src={CartOfProducts}
            alt="Cart-of-products"
            className="w-[200px] sm:w-[280px] md:w-[380px] lg:w-[400px] xl:min-w-[420px] h-auto hover:scale-105 transition-transform duration-500"
          />
        </div>
        <div className="flex flex-col justify-center">
          <h2 className="font-palanquin text-3xl sm:text-4xl lg:text-6xl font-bold mb-3 md:mb-5">
            <span
              className="text-[#517907]"
              style={{ WebkitTextStroke: '1px black' }}
            >
              ECO
            </span>
            -Friendly
          </h2>
          <p className="text-lg sm:text-xl lg:text-3xl text-[#434342] font-opensans mb-6 md:mb-12">
            Discover a vibrant array of locally sourced and eco-friendly
            products on our grocery web store, connecting you with sustainable
            choices that support both the community and the planet.
          </p>
          <button className="font-palanquin text-base sm:text-xl lg:text-2xl font-semibold px-8 sm:px-10 lg:px-14 py-3 md:py-5 bg-white border-black border-[1px] w-fit hover:bg-black hover:text-white transition-colors duration-300">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}
