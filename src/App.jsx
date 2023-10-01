import './App.css'
import './assets/css/perfil.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBarr";
import Home from "./views/Home.jsx";
import Perfil from "./views/Perfil.jsx";
import DatosPerfil from "./views/DatosPerfil.jsx";
import Favoritos from "./views/Favoritos.jsx";
import CrearPublicacion from "./views/CrearPublicacion.jsx";
import MisPosts from "./views/MisPosts.jsx";
import PortalDePago from "./views/PortalDePago.jsx";

import PizzaContextProvider from './context/PizzaContextProvider';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
  
  return (
    <div className="App">
      <PizzaContextProvider>
      <BrowserRouter>
        <Navbar />

        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/perfil" element={<Perfil />} />
        <Route path="/datosperfil" element={<DatosPerfil />} />
        <Route path="/favoritos" element={<Favoritos />} />
        <Route path="/crearpublicacion" element={<CrearPublicacion />} />
        <Route path="/MisPosts" element={<MisPosts />} />
        <Route path="/PortalDePago" element={<PortalDePago />} />
        </Routes>
      </BrowserRouter>
      </PizzaContextProvider>
    </div>
  );
}