
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/navbar';
import HomePage from './views/Homepage';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar/>}></Route>
        <Route path="/page" element={<HomePage/>}x></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
