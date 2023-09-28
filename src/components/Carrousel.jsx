import Carousel from 'react-bootstrap/Carousel';
import logo from "../assets/img/1.jpg";
import logo2 from "../assets/img/2.jpg";
import logo3 from "../assets/img/3.jpg";
import { Button } from 'react-bootstrap';


function CarouselFadeExample() {
  return (
    <Carousel fade>
      

      <Carousel.Item>
        <img
          className="d-block imagen-header img-r1 vh-20"
          src={logo}
          alt="First slide"
        />

            <Carousel.Caption className='carru'>
        <div className="baixo">
        <h3 className="p-2 slogan text-carrousel"> ROOM SERVICE TODOS LOS DÍAS 24/7</h3>
        </div>
        
          </Carousel.Caption>

      </Carousel.Item>
      <Carousel.Item>
        <img
          className="imagen-header img-r2 d-block vh-20"
          src={logo2}
          alt="Second slide"
        />
        <Carousel.Caption className='carru'>
        <div className="baixo">
        <h3 className="p-2 slogan text-carrousel">CARTA A LA HABITACIÓNCONTAMOS CON LA MEJOR CARTA DE BEBESTIBLES Y COMIDA QUE PUEDAS DISFRUTAR.</h3>
        </div>
          </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="imagen-header img-r3 d-block  vh-20"
          src={logo3}
          alt="Third slide"
        />
        <Carousel.Caption className='carru'>
        <div className="baixo">
        <h3 className="p-2 slogan text-carrousel">CARTA A LA HABITACIÓNCONTAMOS CON LA MEJOR CARTA DE BEBESTIBLES Y COMIDA QUE PUEDAS DISFRUTAR.</h3>
        </div>
          </Carousel.Caption>
      </Carousel.Item>
      
    </Carousel>
  );
}

export default CarouselFadeExample;