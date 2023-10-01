import "../assets/css/style.css";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';



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
                <div className="dataProfile">
                    <div className="datos">
                        <h2 className="datoChange">CORREO: </h2>
                        <input type="email" value="" className="inputDate" />
                    </div>
                    <div className="datos">
                        <h2 className="datoChange">NOMBRE: </h2>
                        <input type="text" className="inputDate" />
                    </div>
                    <div className="datos">
                        <h2 className="datoChange">APELLIDO: </h2>
                        <input type="text" className="inputDate" />
                    </div>
                    <div className="datos">
                        <h2 className="datoChange">CONTRASEÑA: </h2>
                        <input type="text" className="inputDate" />
                    </div>
                    <div className="buttonModificar">
                       <Button variant="primary" >MODIFICAR</Button>
                    </div>
                </div>
            </div>

        </div>
    );
}
