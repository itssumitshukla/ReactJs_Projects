import { createContext } from "react";
import { Value } from "sass";
import PRODUCTS from "../shop-data.json";

export const ProductContext = createContext({});

export const ProductProvider = ({children}) => {
    return{
        <ProductContext.Provider value={}>{children}</ProductContext.Provider>
    }
}