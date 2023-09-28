import "../assets/css/style.css";
import { pizzaContext } from "../context/PizzaContextProvider";
import Card from 'react-bootstrap/Card';
import { useNavigate } from "react-router-dom";
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import { useEffect, useContext, useState } from "react";
import Carousel from 'react-bootstrap/Carousel';

export default function Home() {

  const { suite } = useContext(pizzaContext)
  const [target, setTarget] = useState()

  const navigate = useNavigate();
  const handleClick = (target) => {
    navigate(`/pizza/${target}`);
  };


  return (
    suite.map((p) => {
      return (   
        <Card key={p.id} style={{ width: '20rem'   }} className="p-0 border-0 tarjeta tarjeta-radius">
          <Card.Img style={{width: '20rem', height:'16rem' }} className="tarjeta-radius Card-Img" src={`../../assets/${p.img}`} />
          <Card.Body  >
            <Card.Title><h5 className="h1-tittle-card">{p.name ? p.name[0].toUpperCase() + p.name.substring(1):null}</h5></Card.Title>
            <Card.Text><h5 className="h1-desc-card">{p.desc}</h5></Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">

          </ListGroup>
          <Card.Body>
          <div className="boton-modal">
        <label className="label-button" htmlFor={p.id}>
          Mas fotos
        </label>
      </div>
           
          </Card.Body>
    
      <input type="checkbox" id={p.id} />

      <div className={p.contenedor}>
        <div className="content-modal">


    <Carousel className="img-modal">
      <Carousel.Item interval={1000}>
        <img
          className="img-modal1 d-block w-100"
          src={`../../assets/${p.img1}`}
          alt="primero"
        />
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="img-modal1 d-block w-100"
          src={`../../assets/${p.img2}`}
          alt="segundo"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="img-modal1 d-block w-100"
          src={`../../assets/${p.img3}`}
          alt="tercero"
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="img-modal1 d-block w-100"
          src={`../../assets/${p.img4}`}
          alt="cuarto"
        />
      </Carousel.Item>
    </Carousel>

          <div className="btn-cerrar">
            <label htmlFor={p.id}>cerrar</label>
          </div>
        </div>
        <label htmlFor={p.id} className={p.idBtn}></label>

      </div>
        </Card>

        
      );
    })
  );
}
