import React from "react";
import { FiX, FiMinus, FiPlus, FiTruck } from "react-icons/fi";

const ShoppingCart = ({
  cart,
  isCartOpen,
  setIsCartOpen,
  updateQuantity,
  removeFromCart,
  calculateTotal,
}) => {
  return (
    <div
      className={`fixed right-0 top-0 h-full w-96 bg-white shadow-lg transform transition-transform ${
        isCartOpen ? "translate-x-0" : "translate-x-full"
      } z-50`}
    >
      <div className="p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-[#00B4D8]">Shopping Cart</h2>
          <button
            onClick={() => setIsCartOpen(false)}
            className="text-gray-500 hover:text-gray-700"
          >
            <FiX size={24} />
          </button>
        </div>
        {cart.length === 0 ? (
          <p className="text-gray-600 text-center">Your cart is empty</p>
        ) : (
          <>
            <div className="space-y-4 mb-6">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center space-x-4 border-b pb-4"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-20 h-20 object-cover rounded-md"
                  />
                  <div className="flex-1">
                    <h3 className="font-medium">{item.title}</h3>
                    <p className="text-[#00B4D8]">
                      ${(item.price * item.quantity).toFixed(2)}
                    </p>
                    <div className="flex items-center space-x-2 mt-2">
                      <button
                        onClick={() => updateQuantity(item.id, -1)}
                        className="p-1 rounded-md hover:bg-gray-100"
                      >
                        <FiMinus size={16} />
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, 1)}
                        className="p-1 rounded-md hover:bg-gray-100"
                      >
                        <FiPlus size={16} />
                      </button>
                    </div>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <FiX size={20} />
                  </button>
                </div>
              ))}
            </div>
            <div className="border-t pt-4">
              <div className="flex justify-between items-center mb-4">
                <span className="font-medium">Total:</span>
                <span className="text-xl font-bold text-[#00B4D8]">
                  ${calculateTotal().toFixed(2)}
                </span>
              </div>
              <button className="w-full bg-[#4CAF50] text-white py-3 rounded-md hover:bg-[#388E3C]">
                Proceed to Checkout
              </button>
              <p className="text-center text-sm text-gray-500 mt-4">
                <FiTruck className="inline mr-1" /> Free shipping on all orders
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ShoppingCart;
