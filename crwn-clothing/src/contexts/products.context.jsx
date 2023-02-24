import { createContext, useState } from "react";
import { Value } from "sass";
import PRODUCTS from "../shop-data.json";

export const ProductContext = createContext({
    products: [],
});

export const ProductProvider = ({children}) => {
    const [products, setProducts] = useState();
    return{
        <ProductContext.Provider value={}> {children} </ProductContext.Provider>
    }
}