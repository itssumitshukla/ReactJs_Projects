import { Routes, Route } from 'react-router';
import { Homepage } from'./Pages/HomePage';
import './App.css'

function App() {
   return (
    <Routes>
      <Route path='/' element={<Homepage />} />
      <Route path='checkout' element={<div>Test Checkout page</div>} />
    </Routes>
  )
}

export default App
