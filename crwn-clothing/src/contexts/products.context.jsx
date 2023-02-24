import { createContext, useState } from "react";
import { Value } from "sass";
import PRODUCTS from "../shop-data.json";

export const ProductsContext = createContext({
  products: [],
});

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState();
  const value = { products };
  return (
    <ProductsContext.Provider value={value}>
      {" "}
      {children}{" "}
    </ProductsContext.Provider>
  );
};
