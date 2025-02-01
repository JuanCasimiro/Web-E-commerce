export const calculateDiscount = (original, current) => {
    return Math.round(((original - current) / original) * 100);
  };
  
export const getStockStatus = (stock) => {
if (stock <= 5) return { text: "Ultimas unidades!", color: "text-red-600" };
if (stock <= 10) return { text: "Stock Limitado", color: "text-orange-500" };
return { text: "En Stock", color: "text-green-600" };
};
  