import Logo from '../../assets/logo.png';
import SearchIcon from '../../assets/search-icon.svg';
import HeartIcon from '../../assets/heart-icon.svg';
import ShoppingCartIcon from '../../assets/shopping-cart-icon.svg';
import { Link } from 'react-router-dom';
import { useState, useCallback } from 'react';
import { Menu, X } from 'lucide-react';
import { MobileMenu } from './MobileMenu';
import { NavLink } from 'react-router-dom';

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const handleMenuClose = useCallback(() => {
    setIsMobileMenuOpen(false);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-10 bg-[#FCFCF7]">
      <div className="container w-full mx-auto flex items-center justify-between px-5 py-6">
        <Link to="/" className="flex items-center gap-5 ">
          <img src={Logo} alt="Green-Grocer-Logo" className="w-12 h-12" />
          <div className="font-jomhuria text-3xl 2xl:text-4xl mt-2">
            Green Grocer
          </div>
        </Link>
        <div className="flex items-center gap-10 ml-3 2xl:ml-0">
          <ul className="hidden xl:flex items-center gap-7 2xl:gap-16">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `text-lg 2xl:text-xl font-bold transition-colors duration-200 ${
                    isActive ? 'text-[#517907]' : 'hover:text-[#517907]'
                  }`
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/shop"
                className={({ isActive }) =>
                  `text-lg 2xl:text-xl font-bold transition-colors duration-200 ${
                    isActive ? 'text-[#517907]' : 'hover:text-[#517907]'
                  }`
                }
              >
                Shop
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `text-lg 2xl:text-xl font-bold transition-colors duration-200 ${
                    isActive ? 'text-[#517907]' : 'hover:text-[#517907]'
                  }`
                }
              >
                About
              </NavLink>
            </li>
          </ul>
          <div className="hidden xl:flex items-center min-w-[465px] xl:border-black border-[1px] h-12 px-2">
            <span className="mr-2">
              <img src={SearchIcon} alt="Search Icon" className="w-5 h-5" />
            </span>
            <input
              type="text"
              placeholder="search"
              className="w-full outline-none"
            />
          </div>
        </div>
        <div className="flex items-center gap-3 xl:gap-10 ml-10 2xl:ml-0">
          <div className="hidden sm:flex items-center gap-3 xl:gap-7">
            <div className="flex flex-row-reverse xl:hidden items-center gap-2">
              <button
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className=" p-2 md:p-4 hover:bg-slate-100 rounded-md flex-shrink-0"
              >
                {isSearchOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <img src={SearchIcon} alt="Search Icon" className="w-5 h-5" />
                )}
              </button>
              <input
                type="text"
                placeholder="search"
                className={` border-gray-900 border-b-[1px]  outline-none transition-all duration-300 ${isSearchOpen ? 'w-full opacity-100' : 'w-0 opacity-0'}`}
              />
            </div>
            <span className=" flex-shrink-0 p-2 md:p-4 xl:p-0 xl:hover:bg-inherit hover:bg-slate-100 cursor-pointer rounded-md hover:scale-110 transition-transform duration-200">
              <img src={HeartIcon} alt="Heart Icon" className="w-6 h-6" />
            </span>
            <span className="flex-shrink-0 p-2 md:p-4 xl:p-0 xl:hover:bg-inherit hover:bg-slate-100 cursor-pointer rounded-md hover:scale-110 transition-transform duration-200">
              <img
                src={ShoppingCartIcon}
                alt="Shopping Cart Icon"
                className="w-6 h-6"
              />
            </span>
          </div>
          <div className="hidden xl:flex gap-7">
            <button className="text-inter text-xl border-black border-[1px] px-3 py-2 hover:bg-black hover:text-white transition-colors duration-200">
              Login
            </button>
            <button className="text-inter text-xl px-3 py-2 hover:text-[#517907] transition-colors duration-200">
              Sign Up
            </button>
          </div>
          <button
            className="xl:hidden p-2 md:p-4 hover:bg-slate-100 cursor-pointer rounded-md"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      <MobileMenu isMenuOpen={isMobileMenuOpen} onMenuClose={handleMenuClose} />
    </header>
  );
}
