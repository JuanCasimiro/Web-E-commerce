import React from "react";
import { FiX, FiClock, FiTruck, FiExternalLink, FiStar } from "react-icons/fi";
import { calculateDiscount, getStockStatus } from "../utils/helpers";

const ProductDetail = ({ product, setSelectedProduct, addToCart }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg max-w-4xl w-full p-6 relative max-h-[90vh] overflow-y-auto">
        <button
          onClick={() => setSelectedProduct(null)}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          <FiX size={24} />
        </button>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="relative">
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-96 object-cover rounded-lg"
            />
            {calculateDiscount(product.originalPrice, product.price) > 0 && (
              <div className="absolute top-4 right-4 bg-[#00B4D8] text-white px-4 py-2 rounded-full">
                Save {calculateDiscount(product.originalPrice, product.price)}%
              </div>
            )}
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-4">{product.title}</h2>
            <div className="flex items-center mb-4">
              <span className="text-3xl font-bold text-[#00B4D8]">
                ${product.price.toFixed(2)}
              </span>
              {product.originalPrice > product.price && (
                <span className="ml-3 text-gray-400 line-through">
                  ${product.originalPrice.toFixed(2)}
                </span>
              )}
            </div>
            <p className="text-gray-600 mb-6">{product.description}</p>
            <div className="flex items-center space-x-6 mb-6">
              <div className="flex items-center">
                <FiClock className="text-gray-400 mr-2" />
                <span className="text-sm">Fast Delivery</span>
              </div>
              <div className="flex items-center">
                <FiTruck className="text-gray-400 mr-2" />
                <span className="text-sm">Free Shipping</span>
              </div>
            </div>
            <div className="flex items-center mb-6">
              <div className="flex text-yellow-400 mr-2">
                {[...Array(5)].map((_, i) => (
                  <FiStar
                    key={i}
                    className={i < Math.floor(product.rating) ? "fill-current" : ""}
                  />
                ))}
              </div>
              <span className="text-gray-600">{product.rating} / 5</span>
            </div>
            <div className="mb-6">
              <div className={`text-sm font-medium ${getStockStatus(product.stock).color}`}>
                {getStockStatus(product.stock).text}
              </div>
            </div>
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => {
                  addToCart(product);
                  setSelectedProduct(null);
                }}
                className="w-full bg-[#4CAF50] text-white py-3 rounded-md hover:bg-[#388E3C] transition-colors duration-200"
              >
                Add to Cart
              </button>
              <a
                href={product.landingPage}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#00B4D8] text-white py-3 rounded-md hover:bg-[#0096b5] transition-colors duration-200 text-center flex items-center justify-center"
              >
                <FiExternalLink className="mr-2" />
                Ver web del Producto
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
