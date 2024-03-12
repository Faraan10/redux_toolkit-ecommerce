import Navbar from "./screens/Navbar"
import Products from "./screens/Products"
import SingleProduct from "./screens/SingleProduct"
import Cart from "./screens/Cart"
import NotFound from "./screens/NotFound"
import {BrowserRouter, Routes, Route} from "react-router-dom"

import './App.css'

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Products/>}/>
          <Route path="/products/:id" element={<SingleProduct/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
