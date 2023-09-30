import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./components/NavBarr"
import Home from "./views/Home.jsx"
import PizzaContextProvider from "./context/PizzaContextProvider"
import { MyContext } from "./context/MyContext"
import "bootstrap/dist/css/bootstrap.min.css"
import Cart from "./views/Cart.jsx"
import Cats from "./views/Cats"
import Dogs from "./views/Dogs"
import ProductDetail from "./views/ProductDetail.jsx"

export default function App() {
  return (
    <div className="App">
      <PizzaContextProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Cart" element={<Cart />} />
            <Route path="/Cats" element={<Cats />} />
            <Route path="/Dogs" element={<Dogs />} />
            <Route path="/ProductDetail" element={<ProductDetail />} />
          </Routes>
        </BrowserRouter>
      </PizzaContextProvider>
    </div>
  )
}
