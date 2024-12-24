import React, { useState } from "react";
import { FiShoppingCart, FiPlus, FiMinus, FiStar, FiX, FiClock, FiCheck, FiTruck, FiExternalLink } from "react-icons/fi";

const mockProducts = [
  {
    id: 1,
    title: "Batidora Portátil Recargable - Mezclas Perfectas en Cualquier Lugar",
    price: 59999.99,
    originalPrice: 100000.99,
    description: "Lleva tu nutrición a otro nivel con esta batidora portátil recargable, ideal para smoothies, batidos de proteínas y jugos frescos. Compacta, ligera y fácil de transportar, es perfecta para usar en el gimnasio, la oficina o de viaje. Cuenta con un motor potente, cuchillas de acero inoxidable y una batería de larga duración que se carga fácilmente vía USB. ¡Prepara tus bebidas favoritas en segundos con solo presionar un botón! Disponible en colores modernos y diseño elegante, será tu aliada perfecta para un estilo de vida saludable y dinámico.",
    image: "https://cdn.discordapp.com/attachments/683166439322026190/1321042197436436565/H4145f31b83994c388a2572b2d4fe4d1fK.png?ex=676bcbeb&is=676a7a6b&hm=5cc0cd355a4bfbc754a1c27137f2a242bba36a6bf5d6680c2b73ebf5bd59ab86&",
    rating: 4.5,
    stock: 8,
    landingPage: "https://example.com/headphones",
    reviews: [
      { id: 1, user: "John D.", rating: 5, comment: "Exelente calidad!" },
      { id: 2, user: "Sarah M.", rating: 4, comment: "Puedo tomar mis batidos en el trabajo." }
    ]
  },
  {
    id: 2,
    title: "Cafetera Portátil para Espresso - Disfruta tu Café en Cualquier Lugar",
    price: 79999.99,
    originalPrice: 119999.99,
    description: "Lleva el sabor del café espresso contigo donde sea que vayas con esta cafetera portátil y compacta. Diseñada para los amantes del café en movimiento, esta cafetera es ligera, fácil de usar y no requiere electricidad. Con solo presionar un botón, puedes preparar un café perfectamente cremoso en cuestión de minutos. Ideal para viajes, oficina o actividades al aire libre. Compatible con café molido o cápsulas, esta cafetera garantiza una experiencia de café fresca y deliciosa donde quiera que estés.",
    image: "https://cdn.discordapp.com/attachments/683166439322026190/1321042342886641694/Hf9c02c8af3cf4e2fa529bcbcb10eed67K.png?ex=676bcc0e&is=676a7a8e&hm=6e0cc95a5719bd2ec08c85a64f879d5d60725e8db3f5466ff7ca9c8416c29552&",
    rating: 4.2,
    stock: 15,
    landingPage: "https://example.com/smartwatch",
    reviews: [
      { id: 1, user: "Mike R.", rating: 4, comment: "amo mi cafetera, la uso en mis trekings" },
      { id: 2, user: "Emily L.", rating: 5, comment: "Buena calidad!" }
    ]
  },
  {
    id: 3,
    title: "Comedero Automático Inteligente para Mascotas - Alimentación Fácil y Programada",
    price: 178999,
    originalPrice: 200000,
    description: "¡Cuida de tu mascota incluso cuando no estés en casa! Este comedero automático combina diseño moderno y tecnología inteligente para garantizar que tu mejor amigo reciba sus comidas a tiempo. Con capacidad ajustable, temporizador programable y materiales seguros para alimentos, es ideal para perros y gatos. Mantén su alimentación bajo control y evita preocupaciones, ¡tu mascota estará feliz y bien alimentada!",
    image: "https://cdn.discordapp.com/attachments/683166439322026190/1321042453414940714/H1fdad88ae5cc44c2814ed0a3444856aeB.png?ex=676bcc28&is=676a7aa8&hm=c1f71f735cac588fb1ba38e664b24d68722b2133ada9143c25ae12c272ad34d7&",
    rating: 4.8,
    stock: 5,
    landingPage: "https://example.com/camera",
    reviews: [
      { id: 1, user: "David P.", rating: 5, comment: "Perfecto para mis días ocupados" },
      { id: 2, user: "Lisa K.", rating: 4, comment: "Tengo dos gatos y este comedero es súper práctico. La capacidad es ideal, y el temporizador me da tranquilidad." }
    ]
  },
  {
    id: 4,
    title: "Juguete Interactivo para Gatos - Diversión y Ejercicio Asegurados",
    price: 9999,
    originalPrice: 15000,
    description: "¡Mantén a tu gato entretenido y activo con este juguete interactivo! Diseñado para estimular su instinto cazador, este juguete es perfecto para horas de diversión. Ideal para gatos de todas las edades, ayuda a reducir el estrés, prevenir el aburrimiento y promover el ejercicio. Su diseño resistente y seguro garantiza que tu mascota pueda jugar sin preocupaciones. ¡Haz feliz a tu minino hoy mismo!",
    image: "https://cdn.discordapp.com/attachments/683166439322026190/1321042453414940714/H1fdad88ae5cc44c2814ed0a3444856aeB.png?ex=676bcc28&is=676a7aa8&hm=c1f71f735cac588fb1ba38e664b24d68722b2133ada9143c25ae12c272ad34d7&",
    rating: 4.8,
    stock: 5,
    landingPage: "https://example.com/camera",
    reviews: [
      { id: 1, user: "David P.", rating: 5, comment: "Ideal para gatos activos, Mi gato no puede dejar de jugar." },
      { id: 2, user: "Lisa K.", rating: 4, comment: "Compré este juguete para mis dos gatos y les encanta. Se entretienen muchísimo." }
    ]
  },
  {
    id: 5,
    title: "Lima de Uñas Eléctrica para Mascotas - Suave, Segura y Sin Estrés",
    price: 52999,
    originalPrice: 65000,
    description: "¡Haz del cuidado de uñas una experiencia sencilla y tranquila para tu mascota! Esta lima eléctrica para perros y gatos cuenta con un motor silencioso y suave, ideal para evitar el estrés. Su diseño ergonómico y portátil hace que sea fácil de usar en casa. Incluye múltiples cabezales para adaptarse al tamaño de las uñas y garantizar un limado seguro y efectivo.",
    image: "https://cdn.discordapp.com/attachments/683166439322026190/1321042632637550623/H1f17eebed8ba45daa421095485543e6a0.png?ex=676bcc53&is=676a7ad3&hm=3eca7b79e6238fa40617c1b34c1bb3c2a2856fb64c978c782e8c50241e8bf1a2&",
    rating: 4.8,
    stock: 5,
    landingPage: "https://example.com/camera",
    reviews: [
      { id: 1, user: "David P.", rating: 5, comment: "Muy cómoda de usar." },
      { id: 2, user: "Lisa K.", rating: 4, comment: "Mi gato siempre se ponía nervioso al cortar sus uñas, pero con esta lima todo cambió. Es suave, segura y no hace ruido molesto. ¡Un gran alivio!" }
    ]
  },
  {
    id: 6,
    title: "Cierra Puertas Automático Universal - Seguridad y Comodidad en Cada Apertura",
    price: 9999.99,
    originalPrice: 13000,
    description: "¡Olvídate de puertas abiertas accidentalmente! Este cierra puertas automático es ideal para mantener la seguridad y privacidad de tu hogar u oficina. Con instalación sencilla y diseño ajustable, se adapta a cualquier tipo de puerta. Fabricado con materiales duraderos, garantiza un cierre suave y silencioso. Perfecto para ahorrar energía y evitar golpes innecesarios. Dale un toque práctico y funcional a tus espacios.",
    image: "https://cdn.discordapp.com/attachments/683166439322026190/1321043121739534426/H749903a8db464adf8f1a2b0681ed16faR.png?ex=676bccc8&is=676a7b48&hm=6f5b1c6597cb955869064ab4858595c1bb4a72214303997975ea8a510596c098&",
    rating: 4.8,
    stock: 5,
    landingPage: "https://example.com/camera",
    reviews: [
      { id: 1, user: "David P.", rating: 5, comment: "Lo instalé en la puerta de mi cocina y funciona de maravilla. Ahora no tengo que preocuparme de que quede abierta por error. Súper práctico." },
      { id: 2, user: "Lisa K.", rating: 4, comment: "Mis hijos solían dejar la puerta de mi habitacion abierta, pero con este dispositivo ya no pasa." }
    ]
  }
];

const EcommerceStore = () => {
  const [products] = useState(mockProducts);
  const [cart, setCart] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isCartOpen, setIsCartOpen] = useState(false);

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
        <div className="max-w-7xl mx-auto px-4 py-6 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-[#00B4D8]">Backlabs</h1>
          <button
            onClick={() => setIsCartOpen(true)}
            className="relative p-2 text-[#00B4D8] hover:text-[#0096b5]"
          >
            <FiShoppingCart size={24} />
            {cart.length > 0 && (
              <span className="absolute -top-1 -right-1 bg-[#4CAF50] text-white w-5 h-5 rounded-full flex items-center justify-center text-xs">
                {cart.length}
              </span>
            )}
          </button>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </main>

      {selectedProduct && <ProductDetail product={selectedProduct} />}
      <ShoppingCartComponent />
    </div>
  );
};

export default EcommerceStore;