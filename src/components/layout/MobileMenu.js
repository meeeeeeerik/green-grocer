import { Link, NavLink, useLocation } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import SearchIcon from '../../assets/search-icon.svg';
import HeartIcon from '../../assets/heart-icon.svg';
import ShoppingCartIcon from '../../assets/shopping-cart-icon.svg';
import { AuthContext } from '../../context/AuthContext';

export function MobileMenu({
  isMenuOpen,
  onMenuClose,
  searchQuery,
  onSearchChange,
  onSearchSubmit,
  totalQuantityInCart,
}) {
  const location = useLocation();
  const { user, logoutUser } = useContext(AuthContext);

  useEffect(() => {
    const timer = setTimeout(() => onMenuClose(), 1000);
    return () => clearTimeout(timer);
  }, [location.pathname, location.search, onMenuClose]);

  return (
    <>
      {isMenuOpen && (
        <div
          className="xl:hidden fixed top-[96px] md:top-[104px] inset-0 bg-black bg-opacity-30 z-20"
          onClick={onMenuClose}
        />
      )}
      <div
        className={`border-t-2 border-gray-300 z-30 xl:hidden fixed top-[96px] md:top-[104px] right-0 bottom-0 min-h-screen bg-[#FCFCF7]  w-3/4 transition-transform duration-300 px-6 pb-32 pt-3 flex flex-col items-end gap-10 overflow-auto ${isMenuOpen ? ' translate-x-0' : ' translate-x-full'}`}
      >
        <form
          onSubmit={onSearchSubmit}
          className=" flex sm:hidden items-center border-b border-gray-900 h-12 px-2"
        >
          <img src={SearchIcon} alt="Search" className="w-5 h-5 mr-2" />
          <input
            value={searchQuery}
            onChange={onSearchChange}
            type="text"
            placeholder="search"
            className="w-full outline-none bg-transparent"
          />
        </form>

        <ul className="flex flex-col gap-10 text-right">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `text-xl font-bold transition-colors duration-200 ${
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
                `text-xl font-bold transition-colors duration-200 ${
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
                `text-xl font-bold transition-colors duration-200 ${
                  isActive ? 'text-[#517907]' : 'hover:text-[#517907]'
                }`
              }
            >
              About
            </NavLink>
          </li>
        </ul>

        <hr className="border-zinc-300 border-y-[1px] w-full mb-5" />

        <div className="flex sm:hidden items-center gap-6">
          <img
            src={HeartIcon}
            alt="Heart"
            className="w-6 h-6 hover:scale-110 transition-transform duration-200 cursor-pointer"
          />
          <Link
            to="/cart"
            className="relative flex-shrink-0 p-2 md:p-4 xl:p-0 xl:hover:bg-inherit hover:bg-slate-100 cursor-pointer rounded-md hover:scale-110 transition-transform duration-200"
          >
            <img
              src={ShoppingCartIcon}
              alt="Cart"
              className="w-6 h-6 hover:scale-110 transition-transform duration-200 cursor-pointer"
            />
            {totalQuantityInCart > 0 && (
              <span className="absolute -top-2 -right-2 bg-[#517907] text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                {totalQuantityInCart}
              </span>
            )}
          </Link>
        </div>

        <div className="flex items-center gap-3">
          {user ? (
            <>
              <p className="font-semibold">{user.firstName}</p>
              <button
                onClick={logoutUser}
                className="border border-black px-3 py-2 hover:bg-black hover:text-white transition-colors duration-200"
              >
                Logout
              </button>
            </>
          ) : (
            <Link
              to="/login"
              className="border border-black px-3 py-2 hover:bg-black hover:text-white transition-colors duration-200"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </>
  );
}
