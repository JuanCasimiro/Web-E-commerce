import React, { useState } from "react";
import { FiShoppingCart, FiPlus, FiMinus, FiStar, FiX, FiClock, FiCheck, FiTruck, FiExternalLink, FiSearch, FiMenu } from "react-icons/fi";

const mockProducts = [
  {
    id: 1,
    title: "Portable Blender - Perfect Mixes Anywhere",
    price: 59.99,
    originalPrice: 100.99,
    description: "Take your nutrition to the next level with this rechargeable portable blender, ideal for smoothies, protein shakes, and fresh juices. Compact, lightweight, and easy to carry, it's perfect for use at the gym, office, or travel. It features a powerful motor, stainless steel blades, and a long-lasting battery that charges easily via USB. Prepare your favorite drinks in seconds with just the press of a button! Available in modern colors and elegant design, it will be your perfect ally for a healthy and dynamic lifestyle.",
    image: "https://m.media-amazon.com/images/I/61ltwzr3oLL._AC_SL1500_.jpg",
    rating: 4.5,
    stock: 8,
    category: "Kitchen",
    landingPage: "/product/1",
    reviews: [
      { id: 1, user: "John D.", rating: 5, comment: "Excellent quality!" },
      { id: 2, user: "Sarah M.", rating: 4, comment: "I can take my shakes to work." }
    ]
  },
  {
    id: 2,
    title: "Portable Espresso Maker - Enjoy Coffee Anywhere",
    price: 79.99,
    originalPrice: 119.99,
    description: "Take the taste of espresso coffee with you wherever you go with this portable and compact coffee maker. Designed for coffee lovers on the go, this coffee maker is lightweight, easy to use, and requires no electricity. With just the press of a button, you can brew a perfectly creamy coffee in minutes. Ideal for travel, office, or outdoor activities. Compatible with ground coffee or capsules, this coffee maker guarantees a fresh and delicious coffee experience wherever you are.",
    image: "https://m.media-amazon.com/images/I/611lAZSw9-L._AC_SL1001_.jpg",
    rating: 4.2,
    stock: 15,
    category: "Kitchen",
    landingPage: "https://example.com/smartwatch",
    reviews: [
      { id: 1, user: "Mike R.", rating: 4, comment: "I love my coffee maker, I use it on my treks." },
      { id: 2, user: "Emily L.", rating: 5, comment: "Good quality!" }
    ]
  },
  {
    id: 3,
    title: "Smart Pet Feeder - Easy and Scheduled Feeding",
    price: 178.99,
    originalPrice: 200.00,
    description: "Take care of your pet even when you're not at home! This automatic feeder combines modern design and smart technology to ensure your best friend gets their meals on time. With adjustable capacity, programmable timer, and food-safe materials, it's ideal for dogs and cats. Keep their feeding under control and avoid worries, your pet will be happy and well-fed!",
    image: "https://m.media-amazon.com/images/I/81z+W6-vHxL._AC_SL1500_.jpg",
    rating: 4.8,
    stock: 5,
    category: "Pets",
    landingPage: "https://example.com/camera",
    reviews: [
      { id: 1, user: "David P.", rating: 5, comment: "Perfect for my busy days." },
      { id: 2, user: "Lisa K.", rating: 4, comment: "I have two cats and this feeder is super practical. The capacity is ideal, and the timer gives me peace of mind." }
    ]
  },
  {
    id: 4,
    title: "Interactive Cat Toy - Guaranteed Fun and Exercise",
    price: 9.99,
    originalPrice: 15.00,
    description: "Keep your cat entertained and active with this interactive toy! Designed to stimulate their hunting instinct, this toy is perfect for hours of fun. Ideal for cats of all ages, it helps reduce stress, prevent boredom, and promote exercise. Its durable and safe design ensures your pet can play without worries. Make your kitty happy today!",
    image: "https://m.media-amazon.com/images/I/51aSd-dKtJL._AC_SL1500_.jpg",
    rating: 4.8,
    stock: 5,
    category: "Pets",
    landingPage: "https://example.com/camera",
    reviews: [
      { id: 1, user: "David P.", rating: 5, comment: "Ideal for active cats, my cat can't stop playing." },
      { id: 2, user: "Lisa K.", rating: 4, comment: "I bought this toy for my two cats and they love it. They are very entertained." }
    ]
  },
  {
    id: 5,
    title: "Electric Pet Nail Grinder - Gentle, Safe, and Stress-Free",
    price: 52.99,
    originalPrice: 65.00,
    description: "Make nail care a simple and calm experience for your pet! This electric nail grinder for dogs and cats features a quiet and gentle motor, ideal for avoiding stress. Its ergonomic and portable design makes it easy to use at home. Includes multiple heads to fit the size of the nails and ensure safe and effective grinding.",
    image: "https://i.ebayimg.com/images/g/p5AAAOSwUv9mMv30/s-l500.webp",
    rating: 4.8,
    stock: 5,
    category: "Pets",
    landingPage: "https://example.com/camera",
    reviews: [
      { id: 1, user: "David P.", rating: 5, comment: "Very comfortable to use." },
      { id: 2, user: "Lisa K.", rating: 4, comment: "My cat always got nervous when cutting his nails, but with this grinder everything changed. It's gentle, safe, and doesn't make annoying noise. A great relief!" }
    ]
  },
  {
    id: 6,
    title: "Universal Automatic Door Closer - Security and Convenience",
    price: 9.99,
    originalPrice: 13.00,
    description: "Forget about accidentally open doors! This automatic door closer is ideal for maintaining the security and privacy of your home or office. With easy installation and adjustable design, it fits any type of door. Made with durable materials, it ensures a smooth and silent closing. Perfect for saving energy and avoiding unnecessary slams. Add a practical and functional touch to your spaces.",
    image: "https://m.media-amazon.com/images/I/41v2Ui-QZlL._AC_.jpg",
    rating: 4.8,
    stock: 5,
    category: "Home Improvement",
    landingPage: "https://example.com/camera",
    reviews: [
      { id: 1, user: "David P.", rating: 5, comment: "I installed it on my kitchen door and it works great. Now I don't have to worry about it being left open by mistake. Super practical." },
      { id: 2, user: "Lisa K.", rating: 4, comment: "My kids used to leave the door open, but with this device it doesn't happen anymore." }
    ]
  }
];

export const EcommerceStore = () => {
  const [products] = useState(mockProducts);
  const [cart, setCart] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [searchQuery, setSearchQuery] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);


  
  const categories = ["Todos", ...new Set(products.map(product => product.category))];

  const colors = {
    primary: "#00B4D8",
    secondary: "#4CAF50",
    accent: "#E0F7FA"
  };

  const calculateDiscount = (original, current) => {
    return Math.round(((original - current) / original) * 100);
  };

  const getStockStatus = (stock) => {
    if (stock <= 5) return { text: "Ultimas unidades!", color: "text-red-600" };
    if (stock <= 10) return { text: "Stock Limitado", color: "text-orange-500" };
    return { text: "En Stock", color: "text-green-600" };
  };

  // Filter products based on selected category
  const filteredProducts = products.filter(product => {
    const matchesSearch = product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "Todos" || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });


  const ProductLandingPage = ({ product }) => {
    return (
      <div className="landing-page">
        <h1>{product.title}</h1>
        <p>{product.description}</p>
        <img src={product.image} alt={product.title} />
        <p>Precio: ${product.price}</p>
        {/* Aquí puedes agregar más detalles sobre el producto */}
      </div>
    );
  };

  const addToCart = (product) => {
    const existingItem = cart.find((item) => item.id === product.id);
    if (existingItem) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter((item) => item.id !== productId));
  };

  const updateQuantity = (productId, change) => {
    setCart(
      cart.map((item) => {
        if (item.id === productId) {
          const newQuantity = item.quantity + change;
          return newQuantity > 0 ? { ...item, quantity: newQuantity } : item;
        }
        return item;
      })
    );
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const ProductCard = ({ product }) => {
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
          <span className="text-2xl font-bold text-[#00B4D8]">${product.price.toFixed(2)}</span>
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

  const ProductDetail = ({ product }) => (
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

  const ShoppingCartComponent = () => (
    <div
      className={`fixed right-0 top-0 h-full w-96 bg-white shadow-lg transform transition-transform ${isCartOpen ? "translate-x-0" : "translate-x-full"} z-50`}
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

  return (
    <div className="min-h-screen bg-[#E0F7FA]">
            <header className="bg-white shadow-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0 md:space-x-4">
            <div className="flex items-center justify-between">
              <h1 className="text-3xl font-bold text-[#00B4D8]">Backlabs</h1>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2 text-gray-600 hover:text-gray-900"
              >
                <FiMenu size={24} />
              </button>
            </div>
            
            <div className={`${isMobileMenuOpen ? "flex" : "hidden"} md:flex flex-col md:flex-row w-full md:items-center space-y-4 md:space-y-0 md:space-x-4`}>
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
                      className={`px-4 py-2 rounded-md transition-colors ${selectedCategory === category ? "bg-[#00B4D8] text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
                <button
                  onClick={() => setIsCartOpen(true)}
                  className="relative p-2 text-[#00B4D8] hover:text-[#0096b5]"
                >
                  <FiShoppingCart size={24} />
                  {cart.length > 0 && (
                    <span className="absolute -top-1 -right-1 bg-[#4CAF50] text-white w-5 h-5 rounded-full flex items-center justify-center text-xs">
                      {cart.reduce((total, item) => total + item.quantity, 0)}
                    </span>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </main>

      {selectedProduct && <ProductDetail product={selectedProduct} />}
      <ShoppingCartComponent />
    </div>
  );
};
