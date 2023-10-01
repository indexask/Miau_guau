import "../assets/css/style.css";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMobileScreenButton, faEnvelope, faCopyright, faPhone, faSortDown, faLocationDot, faMapLocationDot, faCamera, } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";



export default function Home() {


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
                <div className="zoneCamera">
                <FontAwesomeIcon icon={faCamera} className="camera" />
                <Button variant="primary" className="buttonPublicar">PUBLICAR</Button>
                </div>
                <div>
                </div>
                <div className="inputPostGeneral">
                    <h4 className="textPost">Titulo</h4>
                    <input type="text" className="inputPost" />
                    <h4 className="textPost">Descripcion</h4>
                    <input type="text" className="inputPost" />
                </div>
            </div>

        </div>
    );
}
