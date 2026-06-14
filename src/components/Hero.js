import ShoppingCartImage from '../assets/shopping-cart-image.png';


export function Hero() {

  return (
    <div className="bg-gradient-to-b from-[#FCFCF7] to-[#F5EEAD] pt-[200px] xl:pt-[266px] pb-[207px] mb-[115px]">
      <div className="container px-5 mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        <div className="w-full max-w-[705px] lg:ml-[72px] max-md:text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-[80px] line-clamp-3 2xl:text-[100px] font-palanquin leading-none mb-5">
            Your Ultimate Online{' '}
            <span
              className=" text-[#517907]"
              style={{ WebkitTextStroke: '1px black' }}
            >
              Grocery
            </span>
          </h1>

          <div className="text-base sm:text-lg md:text-xl xl:text-2xl 2xl:text-3xl font-light font-opensans mb-8 md:mb-16 line-clamp-5">
            Experience grocery shopping and swift home delivery with our wide
            range of fresh produce and essentials
          </div>

          <button className="text-palanquin text-white text-base md:text-xl xl:text-2xl px-6 md:px-10 2xl:px-14 py-3 md:py-5 font-semibold bg-black text-center">
            Learn More
          </button>
        </div>
        <div className="w-full max-w-[600px]">
          <img
            src={ShoppingCartImage}
            alt="Shopping-cart-image"
            className="w-full max-h-[300px] lg:max-h-[270px] xl:max-h-[400px] 2xl:max-h-none object-contain"
          />
        </div>
      </div>
    </div>
  );
}
