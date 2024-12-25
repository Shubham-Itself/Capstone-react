import { createContext, useState } from "react";
import PRODUCT_DATA from "../shop-data.json";

export const ProductContext = createContext({
  product: [],
});

export const ProductProvider = ({ children }) => {
  const [product, setProduct] = useState(PRODUCT_DATA);
  const value = { product };
  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};
