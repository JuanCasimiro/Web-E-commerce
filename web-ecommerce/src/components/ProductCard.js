import React from "react";
import { FiCheck } from "react-icons/fi";
import { calculateDiscount, getStockStatus } from "../utils/helpers";

const ProductCard = ({ product, setSelectedProduct, addToCart }) => {
  const stockStatus = getStockStatus(product.stock);
  const discount = calculateDiscount(product.originalPrice, product.price);

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 transition-transform hover:scale-105 flex flex-col h-full relative">
      <div className="relative">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-48 object-cover rounded-md mb-4"
        />
        {discount > 0 && (
          <div className="absolute top-2 right-2 bg-[#00B4D8] text-white px-3 py-1 rounded-full text-sm font-bold">
            Ahorro {discount}%
          </div>
        )}
      </div>
      <h3 className="text-xl font-semibold mb-2">{product.title}</h3>
      <div className="flex items-center mb-2">
        <span className="text-2xl font-bold text-[#00B4D8]">
          ${product.price.toFixed(2)}
        </span>
        {discount > 0 && (
          <span className="ml-2 text-gray-400 line-through text-sm">
            ${product.originalPrice.toFixed(2)}
          </span>
        )}
      </div>
      <div className="flex items-center mb-3">
        <span className={`text-sm font-medium ${stockStatus.color} flex items-center`}>
          <FiCheck className="mr-1" /> {stockStatus.text}
        </span>
      </div>
      <div className="flex justify-between items-center mt-auto pt-4">
        <button
          onClick={() => setSelectedProduct(product)}
          className="text-[#00B4D8] hover:text-[#0096b5] font-medium"
        >
          Ver Detalles
        </button>
        <button
          onClick={() => addToCart(product)}
          className="bg-[#4CAF50] text-white px-4 py-2 rounded-md hover:bg-[#388E3C] transition-colors"
        >
          Agregar al carro
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
