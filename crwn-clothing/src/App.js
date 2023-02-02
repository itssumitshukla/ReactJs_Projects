import { Routes, Route } from "react-router-dom";
import { ReactDOM } from "react-dom/client'";

import Home from "./routes/home/home.component.jsx";

const App = () => {
  return (
    <Routes>
      <Route path="/" index element={<Home />} />
    </Routes>
  );
};

export default App;
