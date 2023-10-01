import logo from "../assets/img/logo.png";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  } from "@fortawesome/free-brands-svg-icons";
import { faBed, faCartShopping, faCreditCard, faEnvelope, faHouse, faMartiniGlassEmpty, faUser } from "@fortawesome/free-solid-svg-icons";

export default function Navbarr() {

  return (
    <Navbar expand="xl" className="navegador p-0">
      <Container> 
        <Navbar.Brand href="#Home"><img className="logo" alt=""/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="justify-content-between basic-navbar-nav">
          <Nav className="texto-navbar  flex-grow-1 pe-3">
            <Nav.Link className="textnav text-dark p-0">
            <Link to="/"> PERRO</Link>
            </Nav.Link>

            <Nav.Link className="textnav text-dark p-0">
            <Link to="/"> GATO</Link>
            </Nav.Link>

            <Nav.Link href="#Price"className="textnav text-dark p-0"></Nav.Link>

            <Nav.Link className="textnav text-dark p-0">
            <Link to="/"> REGISTRATE</Link>
            </Nav.Link>

            <Nav.Link className="textnav text-dark p-0">
            <Link to="/perfil"><FontAwesomeIcon icon={faUser}/></Link>
            </Nav.Link>
            
            <Nav.Link className="textnav text-dark p-0">
            <Link to="/PortalDePago"><FontAwesomeIcon icon={faCartShopping} /></Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    


);
}

