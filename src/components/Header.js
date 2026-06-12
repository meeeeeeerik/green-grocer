import Logo from '../assets/logo.png';
import SearchIcon from '../assets/search-icon.svg';
import HeartIcon from '../assets/heart-icon.svg';
import ShoppingCartIcon from '../assets/shopping-cart-icon.svg';
import { Link } from 'react-router-dom';

export function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-10">
      <div className="container w-full mx-auto flex items-center justify-between px-5 py-6">
        <Link to="/" className="flex items-center gap-5 ">
          <img src={Logo} alt="Green-Grocer-Logo" />
          <div className="font-jomhuria text-4xl">Green Grocer</div>
        </Link>
        <div className="flex items-center gap-10 ">
          <ul className="flex items-center gap-7">
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
          <div className="flex items-center min-w-[465px] border-black border-[1px] h-12">
            <span className="mx-2">
              <img src={SearchIcon} alt="Search Icon" className="w-5 h-5" />
            </span>
            <input
              type="text"
              placeholder="search"
              className="w-full outline-none"
            />
          </div>
        </div>
        <div className="flex items-center gap-10 ">
          <div className="flex items-center gap-7">
            <img src={HeartIcon} alt="Heart Icon" className="w-6 h-6" />
            <img
              src={ShoppingCartIcon}
              alt="Shopping Cart Icon"
              className="w-6 h-6"
            />
          </div>
          <div className="flex gap-7">
            <button className="text-inter text-xl border-black border-[1px] px-3 py-2">
              Login
            </button>
            <button className="text-inter text-xl px-3 py-2">Sign Up</button>
          </div>
        </div>
      </div>
    </header>
  );
}
