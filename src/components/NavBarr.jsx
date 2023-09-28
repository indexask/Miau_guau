import logo from "../assets/img/logo.png";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  } from "@fortawesome/free-brands-svg-icons";
import { faBed, faCreditCard, faEnvelope, faHouse, faMartiniGlassEmpty } from "@fortawesome/free-solid-svg-icons";

export default function Navbarr() {

  return (
    <Navbar expand="xl" className="navegador p-0">
      <Container>
        <Navbar.Brand href="#Home"><img className="logo" src={logo} alt="" /> </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="justify-content-between basic-navbar-nav">
          <Nav className="texto-navbar  flex-grow-1 pe-3">
            <Nav.Link href="#Home" className="p-0 textnav text-dark"><FontAwesomeIcon icon={faHouse} /> INICIO</Nav.Link>
            <Nav.Link href="#habitaciones"className="textnav text-dark p-0"><FontAwesomeIcon icon={faBed} /> HABITACIONES</Nav.Link>
            <Nav.Link href="#Price"className="textnav text-dark p-0"><FontAwesomeIcon icon={faCreditCard} /> PRECIOS | RESERVA</Nav.Link>
            <Nav.Link href="https://motellapasion.cl/carta/"className="textnav text-dark p-0"><FontAwesomeIcon icon={faMartiniGlassEmpty} /> CARTA</Nav.Link>
            <Nav.Link href="#contacto"className="textnav text-dark p-0"><FontAwesomeIcon icon={faEnvelope} /> CONTACTO | UBICACION</Nav.Link>
            <Nav.Link></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    


);
}

