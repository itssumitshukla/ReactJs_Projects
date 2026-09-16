import { Routes, Route } from 'react-router';
import { Homepage } from'./Pages/HomePage';
import { CheckoutPage } from'./Pages/CheckoutPage';
import './App.css'

function App() {
   return (
    <Routes>
      <Route path='/' element={<Homepage />} />
      <Route path='checkout' element={<CheckoutPage />} />
    </Routes>
  )
}

export default App
