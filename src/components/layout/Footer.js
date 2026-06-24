import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.png';
import EmailIcon from '../../assets/email-icon.svg';
import ViewsCardsImage from '../../assets/views-cards-image.png';

export function Footer() {
  return (
    <footer className="">
      <div className="bg-[#DEF1BD] py-10">
        <div className="container mx-auto px-5 flex flex-col xl:flex-row items-center gap-8 xl:gap-32">
          <form className="flex flex-col lg:flex-row items-center gap-4 w-full md:w-auto md:ml-14">
            <label
              htmlFor="subscribe-email"
              className="flex items-center border-white border-2 w-full sm:w-[520px] h-[60px] p-3"
            >
              <img src={EmailIcon} alt="" className="w-7 h-5" />
              <input
                id="subscribe-email"
                type="email"
                placeholder="Enter Your Email"
                className="w-full bg-transparent outline-none pl-3"
              />
            </label>
            <button
              className="uppercase w-full sm:w-fit font-opensans text-lg xl:text-2xl py-[14px] px-6 bg-white cursor-pointer hover:bg-gray-100 transition"
              type="submit"
            >
              SUBSCRIBE
            </button>
          </form>
          <p className="font-opensans text-lg xl:text-2xl text-center md:text-left">
            Sign up for new Customer, updates, surveys
          </p>
        </div>
      </div>
      <div className="container px-5 mx-auto py-8 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-10 items-start">
        <div className="flex flex-col gap-5">
          <Link to="/" className="flex items-center gap-5 ">
            <img src={Logo} alt="Green-Grocer-Logo" className="w-12 h-12" />
            <span className="font-jomhuria text-3xl 2xl:text-4xl mt-2">
              Green Grocer
            </span>
          </Link>
          <h3 className="w-fit font-opensans text-lg uppercase">contact</h3>
          <p className="w-fit font-opensans text-lg">Phone : 99988765</p>
          <p className="w-fit font-opensans text-lg">
            Email : greengrocery9@gmail.com
          </p>
          <img src={ViewsCardsImage} alt="" className="w-[270px] h-[90px]" />
        </div>
        <div className="flex flex-col gap-7">
          <h3 className="font-semibold uppercase w-fit font-opensans text-xl">
            Information
          </h3>
          <ul className="flex flex-col gap-7">
            <li className="w-fit font-opensans text-lg text-[#636362] hover:underline hover:decoration-[#517907] hover:text-[#517907] transition-colors duration-200 ">
              <Link to="">About Us</Link>
            </li>
            <li className="w-fit font-opensans text-lg text-[#636362] hover:underline hover:decoration-[#517907] hover:text-[#517907] transition-colors duration-200">
              <Link to="">Blog</Link>
            </li>
            <li className="w-fit font-opensans text-lg text-[#636362] hover:underline hover:decoration-[#517907] hover:text-[#517907] transition-colors duration-200">
              <Link to="">Check Out</Link>
            </li>
            <li className=" w-fit font-opensans text-lg text-[#636362] hover:underline hover:decoration-[#517907] hover:text-[#517907] transition-colors duration-200">
              <Link to="">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-7">
          <h3 className="font-semibold uppercase w-fit font-opensans text-xl">
            MY ACCOUNTS
          </h3>
          <ul className="flex flex-col gap-7">
            <li className=" w-fit font-opensans text-lg text-[#636362] hover:underline hover:decoration-[#517907] hover:text-[#517907] transition-colors duration-200">
              <Link to="">MY Account</Link>
            </li>
            <li className=" w-fit font-opensans text-lg text-[#636362] hover:underline hover:decoration-[#517907] hover:text-[#517907] transition-colors duration-200">
              <Link to="">Wish list</Link>
            </li>
            <li className=" w-fit font-opensans text-lg text-[#636362] hover:underline hover:decoration-[#517907] hover:text-[#517907] transition-colors duration-200">
              <Link to="">Shopping Cart</Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-7">
          <h3 className="font-semibold uppercase w-fit font-opensans text-xl">
            CATEGORIES
          </h3>
          <ul className="flex flex-col gap-7">
            <li className=" w-fit font-opensans text-lg text-[#636362] hover:underline hover:decoration-[#517907] hover:text-[#517907] transition-colors duration-200">
              <Link to="">Fresh Product</Link>
            </li>
            <li className=" w-fit font-opensans text-lg text-[#636362] hover:underline hover:decoration-[#517907] hover:text-[#517907] transition-colors duration-200">
              <Link to="">Snacks</Link>
            </li>
            <li className=" w-fit font-opensans text-lg text-[#636362] hover:underline hover:decoration-[#517907] hover:text-[#517907] transition-colors duration-200">
              <Link to="">Meat</Link>
            </li>
            <li className=" w-fit font-opensans text-lg text-[#636362] hover:underline hover:decoration-[#517907] hover:text-[#517907] transition-colors duration-200">
              <Link to="">Drinks</Link>
            </li>
            <li className=" w-fit font-opensans text-lg text-[#636362] hover:underline hover:decoration-[#517907] hover:text-[#517907] transition-colors duration-200">
              <Link to="">Vegetables</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto px-5">
        <hr />
      </div>
      <p className="mt-4 text-base text-inter text-center">
        Copyright © 2024 Jahad ALfahdi.
      </p>
    </footer>
  );
}
