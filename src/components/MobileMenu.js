import { Link } from 'react-router-dom';
import SearchIcon from '../assets/search-icon.svg';
import HeartIcon from '../assets/heart-icon.svg';
import ShoppingCartIcon from '../assets/shopping-cart-icon.svg';

export function MobileMenu({ isMenuOpen, onMenuClose }) {
  return (
    <>
      {isMenuOpen && (
        <div
          className="xl:hidden fixed top-[96px] md:top-[105px] inset-0 bg-black bg-opacity-30 z-10"
          onClick={onMenuClose}
        />
      )}
      <div
        className={`border-t-2 border-gray-300 z-20 xl:hidden fixed top-[96px] md:top-[105px] right-0 bottom-0 min-h-screen bg-slate-50  w-3/4 transition-transform duration-300 px-6 pb-32 pt-3 flex flex-col items-end gap-10 overflow-auto ${isMenuOpen ? ' translate-x-0' : ' translate-x-full'}`}
      >
        <div className=" flex sm:hidden items-center border-b border-gray-900 h-12 px-2">
          <img src={SearchIcon} alt="Search" className="w-5 h-5 mr-2" />
          <input
            type="text"
            placeholder="search"
            className="w-full outline-none bg-transparent"
          />
        </div>

        <ul className="flex flex-col gap-10 text-right">
          <li>
            <Link to="/" className="text-xl font-bold">
              Home
            </Link>
          </li>
          <li>
            <Link to="/shop" className="text-xl font-bold">
              Shop
            </Link>
          </li>
          <li>
            <Link to="/about" className="text-xl font-bold">
              About
            </Link>
          </li>
        </ul>

        <hr className="border-zinc-300 border-y-[1px] w-full mb-5" />

        <div className="flex sm:hidden items-center gap-6">
          <img src={HeartIcon} alt="Heart" className="w-6 h-6" />
          <img src={ShoppingCartIcon} alt="Cart" className="w-6 h-6" />
        </div>

        <div className="flex gap-3">
          <button className="border border-black px-3 py-2">Login</button>
          <button className="px-3 py-2">Sign Up</button>
        </div>
      </div>
    </>
  );
}
