import React from "react";
import { FiSearch, FiShoppingCart, FiMenu } from "react-icons/fi";

const Header = ({
  searchQuery,
  setSearchQuery,
  categories,
  selectedCategory,
  setSelectedCategory,
  cartCount,
  toggleMobileMenu,
  isMobileMenuOpen,
  openCart,
}) => {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0 md:space-x-4">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold text-[#00B4D8]">Backlabs</h1>
            <button
              onClick={toggleMobileMenu}
              className="md:hidden p-2 text-gray-600 hover:text-gray-900"
            >
              <FiMenu size={24} />
            </button>
          </div>

          <div
            className={`${
              isMobileMenuOpen ? "flex" : "hidden"
            } md:flex flex-col md:flex-row w-full md:items-center space-y-4 md:space-y-0 md:space-x-4`}
          >
            <div className="flex-1 max-w-xl relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FiSearch className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Buscar productos..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-[#00B4D8] focus:border-[#00B4D8] text-sm"
              />
            </div>

            <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-md transition-colors ${
                      selectedCategory === category
                        ? "bg-[#00B4D8] text-white"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
              <button
                onClick={openCart}
                className="relative p-2 text-[#00B4D8] hover:text-[#0096b5]"
              >
                <FiShoppingCart size={24} />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-[#4CAF50] text-white w-5 h-5 rounded-full flex items-center justify-center text-xs">
                    {cartCount}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
