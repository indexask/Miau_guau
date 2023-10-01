import "../assets/css/style.css";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
import CarouselFadeExample from "../components/Carrousel"
import CardsPrice from "../components/CardsPrice"
import CardsPriceWeek from "../components/CardsPriceWeek"
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWifi, faLocationCrosshairs, faHotTub, faTv, faBellConcierge, faUserGroup, faCar, faTemperature1, faCreditCard, faMobileScreenButton, faPhoneFlip, faEnvelope, faCopyright, faPhone, faArrowDown, faSortDown, faLocationPin, faLocationDot, faMapLocationDot, } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faFacebookF, faFacebookMessenger, faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import Services from "../components/Service";



export default function Home() {

    const funcionsila = () => {
        const mostrar = document.querySelector('.divtab')
        if (mostrar.className == 'divtab') {
            document.querySelector('.divtab').classList.add('mostrar');
        } else {
            document.querySelector('.divtab.mostrar').classList.remove('mostrar');
        }
    }
    const funcionsilaWeek = () => {
        const mostrar = document.querySelector('.tab')
        if (mostrar.className == 'tab') {
            document.querySelector('.tab').classList.add('mostrar');
        } else {
            document.querySelector('.tab.mostrar').classList.remove('mostrar');
        }
    }



    return (
        <div className="perfil">
            <div className="">
                <div className="viewprofile">
                    <Nav.Link >
                        <Link to="/perfil" className="profile"> MI PERFIL</Link>
                    </Nav.Link>
                </div>

                <div className="viewprofile">
                    <Nav.Link  >
                        <Link to="/datosperfil" className="profile"> EDITAR PERFIL</Link>
                    </Nav.Link>
                </div>

                <div className="viewprofile">
                    <Nav.Link  >
                        <Link to="/favoritos" className="profile">  FAVORITOS</Link>
                    </Nav.Link>
                </div>

                <div className="viewprofile">
                    <Nav.Link >
                        <Link to="/crearpublicacion" className="profile"> CREAR PUBLICACION</Link>
                    </Nav.Link>
                </div>

                <div className="viewprofile">
                    <Nav.Link >
                        <Link to="/MisPosts" className="profile"> MIS PUBLICACIONES</Link>
                    </Nav.Link>
                </div>
            </div>


            <div className="infoProfile">
                <div>
                    <img className="imgProfile" src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1931&q=80" alt="" />
                </div>
                <div className="datosProfile">
                    <h1>Informacion Perfil</h1>
                </div>
            </div>
        </div>
    );
}
