import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

export function CartPage() {
  const { cartItems, updateQty, removeFromCart } = useContext(CartContext);

  return (
    <div className="container mx-auto px-5 pt-32 pb-10 font-opensans">
      <h1 className="text-3xl font-bold mb-8">Cart</h1>

      {cartItems.length ? (
        <div className="flex flex-col gap-4">
          {cartItems.map((cartItem) => {
            return (
              <div
                key={cartItem.id}
                className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-black border-[1px] p-4"
              >
                <img
                  className="w-20 h-20 object-contain flex-shrink-0"
                  src={cartItem.thumbnail}
                  alt={cartItem.title}
                />
                <div className="flex-1 text-lg font-semibold">
                  {cartItem.title}
                </div>
                <div className="w-24 text-lg text-[#517907] font-bold">
                  ${cartItem.price}
                </div>

                <div className="flex items-center gap-4">
                  <div className="flex items-center border-black border-[1px]">
                    <button
                      className="w-10 h-10 text-xl hover:bg-black hover:text-white transition-colors duration-200"
                      onClick={() => {
                        updateQty(cartItem.id, cartItem.qty - 1);
                      }}
                    >
                      -
                    </button>
                    <div className="w-12 text-center text-lg">
                      {cartItem.qty}
                    </div>
                    <button
                      className="w-10 h-10 text-xl hover:bg-black hover:text-white transition-colors duration-200"
                      onClick={() => {
                        updateQty(cartItem.id, cartItem.qty + 1);
                      }}
                    >
                      +
                    </button>
                  </div>

                  <button
                    className="border-red-500 border-[1px] text-red-500 px-3 h-10 hover:bg-red-500 hover:text-white transition-colors duration-200"
                    onClick={() => {
                      removeFromCart(cartItem.id);
                    }}
                  >
                    Delete
                  </button>
                </div>
              </div>
            );
          })}

          <div className="flex justify-end items-center gap-3 border-t-[1px] border-black pt-6 mt-4 text-2xl font-bold">
            Total cost:{' '}
            <span className="text-[#517907]">
              $
              {cartItems
                .reduce((acc, cartItem) => {
                  return acc + cartItem.price * cartItem.qty;
                }, 0)
                .toFixed(2)}
            </span>
          </div>
        </div>
      ) : (
        <div className="text-xl text-gray-500 py-20 text-center">
          The cart is empty
        </div>
      )}
    </div>
  );
}
