import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Auth from "./pages/Auth";
import Checkout from "./pages/Checkout";
// import Navbar from "./components/Navbar";

import "./App.css";
// import AuthProvider from "./context/AuthContext";
// import ProductDetails from "./pages/ProductDetails";
// import CartProvider from "./context/CartContext";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </div>
  );
}

export default App;
