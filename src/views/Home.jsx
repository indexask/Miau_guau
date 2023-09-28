import "../assets/css/style.css";
import Cards from "../components/Cards"
import logo from "../assets/img/logoblue.png"
import CarouselFadeExample from "../components/Carrousel"
import CardsPrice from "../components/CardsPrice"
import CardsPriceWeek from "../components/CardsPriceWeek"
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWifi, faLocationCrosshairs, faHotTub, faTv, faBellConcierge, faUserGroup, faCar, faTemperature1, faCreditCard, faMobileScreenButton, faPhoneFlip, faEnvelope, faCopyright, faPhone, faArrowDown, faSortDown, faLocationPin, faLocationDot, faMapLocationDot, } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faFacebookF, faFacebookMessenger, faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import Services from "../components/Service";



import Carousel from 'react-bootstrap/Carousel';


export default function Home() {
  
  const funcionsila = ()=>{
    const mostrar = document.querySelector('.divtab')
    if (mostrar.className == 'divtab'){
      document.querySelector('.divtab').classList.add('mostrar');
    }else{
      document.querySelector('.divtab.mostrar').classList.remove('mostrar');
    }
  }
  const funcionsilaWeek = ()=>{
    const mostrar = document.querySelector('.tab')
    if(mostrar.className=='tab'){
      document.querySelector('.tab').classList.add('mostrar');
    }else {
      document.querySelector('.tab.mostrar').classList.remove('mostrar');
    }
  }



  return (
    <div id="Home"  >

      <div className="carrito-padding">
        <CarouselFadeExample className="Carousel" />
        <Button id="Price" className="Button-Reserva text-dark "><a href="https://api.whatsapp.com/send?phone=56993210973&text=Hola%20Motel%20La%20Pasi%C3%B3n%2C%20vengo%20de%20tu%20pagina%20web%20y%20quiero%20mas%20informaci%C3%B3n%20%F0%9F%98%8D">Reserva Aqui </a></Button>

      </div>

      <div className="contenedor">
        <div className="iconFijo-p">
          <a className="iconFijo" href="tel:+56993210973"><FontAwesomeIcon icon={faPhone} /></a>
        </div>
        <div className="iconFijo-p">
          <a className="iconFijo" href="https://www.instagram.com/motellapasion/?hl=es-la"><FontAwesomeIcon icon={faInstagram} /></a>
        </div>
        <div className="iconFijo-p">
          <a className="iconFijo" href="https://www.facebook.com/motellapasion"><FontAwesomeIcon icon={faFacebookF} /></a>
        </div>
        <div className="iconFijo-p">
          <a className="iconFijo" href="https://api.whatsapp.com/send?phone=56993210973&text=Hola%20Motel%20La%20Pasi%C3%B3n%2C%20vengo%20de%20tu%20pagina%20web%20y%20quiero%20mas%20informaci%C3%B3n%20%F0%9F%98%8D"><FontAwesomeIcon icon={faWhatsapp} /></a>
        </div >
      </div >


      <div>
        <h3  className="price">PRECIOS</h3>
            <ul className="ul">
              <li className="price-suites" onClick ={funcionsila}>
                <div className="flexi">
                  <h3></h3>
                  <h3 className="m-0">DE DOMINGO A JUEVES</h3>
                  <h3 className="arrow"><FontAwesomeIcon icon={faSortDown}/></h3>
                </div>
              </li>
            </ul>
          <div id="div1" className="divtab" ><div className="CardsPrice flex-box">

            <CardsPrice className="CardsPrice" />

          <Carousel className="carousel-precios">
        <Carousel.Item>
        <div className="Cards-Pricee">
            <div className="background-cards-price">
            <h2 className="Cards-Price-Tittlee Cards-Price-Element" >Suite Ejecutiva</h2>
            <h1 className="Cards-Price-Element">$42.000</h1>
            <p  className="Cards-Price-Element desc-hrs">3 HORAS DE DOMINGO A JUEVES</p>
            <h1  className="Cards-Price-Element">$53.000</h1>
            <p  className="Cards-Price-Element desc-hrs">12 HORAS DE DOMINGO A JUEVES</p>
            </div>
        </div> 
      </Carousel.Item>

      <Carousel.Item>
      <div className="Cards-Pricee">
            <div className="background-cards-price">
            <h2 className="Cards-Price-Tittlee Cards-Price-Element text-dark" >Suite Tantra</h2>
            <h1 className="Cards-Price-Element">$53.000</h1>
            <p  className="Cards-Price-Element desc-hrs">3 HORAS DE DOMINGO A JUEVES</p>
            <h1  className="Cards-Price-Element">$58.000</h1>
            <p  className="Cards-Price-Element desc-hrs">12 HORAS DE DOMINGO A JUEVES</p>
            </div>
        </div>
      </Carousel.Item>

      
      <Carousel.Item>
      <div className="Cards-Pricee">
            <div className="background-cards-price">
            <h2 className="Cards-Price-Tittlee Cards-Price-Element" >Suite Jacuzzi</h2>
            <h1 className="Cards-Price-Element">$70.000</h1>
            <p  className="Cards-Price-Element desc-hrs">3 HORAS DE DOMINGO A JUEVES</p>
            <h1  className="Cards-Price-Element">$90.000</h1>
            <p  className="Cards-Price-Element desc-hrs">12 HORAS DE DOMINGO A JUEVES</p>
            </div>
        </div>
      </Carousel.Item>

      <Carousel.Item>
      <div className="Cards-Pricee">
            <div className="background-cards-price">
            <h2 className="Cards-Price-Tittlee Cards-Price-Element" >Suite Jacuzzi Vip</h2>
            <h1 className="Cards-Price-Element">$83.000</h1>
            <p  className="Cards-Price-Element desc-hrs">3 HORAS DE DOMINGO A JUEVES</p>
            <h1  className="Cards-Price-Element">$95.000</h1>
            <p  className="Cards-Price-Element desc-hrs">12 HORAS DE DOMINGO A JUEVES</p>
            </div>
        </div>
      </Carousel.Item>
    </Carousel>
            
          </div>
        </div>
          <ul className="ul">

            <li className="price-suites" onClick ={funcionsilaWeek}>
              <div className="flexi">
                <h3></h3>
                <h3 className="m-0">VIERNES, SABADO Y VISPERAS DE FESTIVO </h3>
                <h3 className="arrow"><FontAwesomeIcon  icon={faSortDown}/></h3>
              </div>
            </li>
          </ul>
            <div id="div2" className="tab" ><div className="CardsPriceWeek flex-box">
            <CardsPriceWeek />

            <Carousel className="carousel-precios">
        <Carousel.Item>
        <div className="Cards-Pricee">
            <div className="background-cards-price">
            <h2 className="Cards-Price-Tittlee Cards-Price-Element" >Suite Ejecutiva</h2>
            <h1 className="Cards-Price-Element">$47.000</h1>
            <p  className="Cards-Price-Element desc-hrs">3 HORAS DE DOMINGO A JUEVES</p>
            <h1  className="Cards-Price-Element">$59.000</h1>
            <p  className="Cards-Price-Element desc-hrs">12 HORAS DE DOMINGO A JUEVES</p>
            </div>
        </div> 
      </Carousel.Item>

      <Carousel.Item>
      <div className="Cards-Pricee">
            <div className="background-cards-price">
            <h2 className="Cards-Price-Tittlee Cards-Price-Element" >Suite Tantra</h2>
            <h1 className="Cards-Price-Element">$60.000</h1>
            <p  className="Cards-Price-Element desc-hrs">3 HORAS DE DOMINGO A JUEVES</p>
            <h1  className="Cards-Price-Element">$63.000</h1>
            <p  className="Cards-Price-Element desc-hrs">12 HORAS DE DOMINGO A JUEVES</p>
            </div>
        </div>
      </Carousel.Item>

      
      <Carousel.Item>
      <div className="Cards-Pricee">
            <div className="background-cards-price">
            <h2 className="Cards-Price-Tittlee Cards-Price-Element" >Suite Jacuzzi</h2>
            <h1 className="Cards-Price-Element">$85.000</h1>
            <p  className="Cards-Price-Element desc-hrs">3 HORAS DE DOMINGO A JUEVES</p>
            <h1  className="Cards-Price-Element">$99.000</h1>
            <p  className="Cards-Price-Element desc-hrs">12 HORAS DE DOMINGO A JUEVES</p>
            </div>
        </div>
      </Carousel.Item>

      <Carousel.Item>
      <div className="Cards-Pricee">
            <div className="background-cards-price">
            <h2 className="Cards-Price-Tittlee Cards-Price-Element" >Suite Jacuzzi Vip</h2>
            <h1 className="Cards-Price-Element">$99.000</h1>
            <p  className="Cards-Price-Element desc-hrs">3 HORAS DE DOMINGO A JUEVES</p>
            <h1  className="Cards-Price-Element">$110.000</h1>
            <p  className="Cards-Price-Element desc-hrs">12 HORAS DE DOMINGO A JUEVES</p>
            </div>
        </div>
      </Carousel.Item>
    </Carousel>
          </div>
        </div>
      </div>





          <div className="Habitaciones text-light" id="habitaciones">
            <h1>HABITACIONES</h1>
            <div className="p-4 grid-columns-4 galeria flex-box container" id="xd">
              <Cards />
            </div>
          </div>
          
          <Services />

          <div className="padding-logo">
            <img className="logoBlue" src={logo} alt="" />
            <div>
              
              <h1 className="text-direction"><a className="text-direction" href="https://www.waze.com/es/live-map/directions/cl/region-metropolitana/providencia/sta-victoria-0139?to=place.ChIJiw9qEKjFYpYRkDG7TLsVkq8"><FontAwesomeIcon className="logoUbi" icon={faMapLocationDot} /></a>SANTA VICTORIA 0139, PROVIDENCIA</h1>
            </div>
          </div>

          

          <div className="flex-box1 group-contact padding-logo-contact">

            <div>
              <div className="box-contact"  >
                <div className="icons-contact text-dark" id="contacto">
                  <a href="tel:+56942770988"><FontAwesomeIcon className="iconContact" icon={faMobileScreenButton} /></a>
                </div>

              </div>
              <div className="number-contact">
                <h6 className="d-block">+56 9 9321 0973</h6>
              </div>
            </div>

            <div>
              <div className="box-contact"  >
                <div className="icons-contact" id="contacto">
                  <a href="https://www.waze.com/es/live-map/directions/cl/region-metropolitana/providencia/sta-victoria-0139?to=place.ChIJiw9qEKjFYpYRkDG7TLsVkq8"><FontAwesomeIcon className="iconContact" icon={faLocationDot} /></a>
                </div>

              </div>
              <div className="number-contact">
                <h6  className="d-block">UBICACION</h6>
              </div>
            </div>

            <div>
              <div className="box-contact"  >
                <div className="icons-contact" id="contacto">
                  <a href="mailto:contacto@motellapasion.cl"><FontAwesomeIcon className="iconContact" icon={faEnvelope} /></a>
                </div>

              </div>
              <div className="number-contact">
                <h6 className="d-block">ENVIAR MAIL</h6>
              </div>
            </div>




          </div>

          

          <footer>
            
            <h6 className="d-inline-block"><FontAwesomeIcon className="iconContact text-dark" icon={faCopyright} /> TODO LOS DERECHOS RESERVADOS MOTEL LA PASION</h6>
          </footer>



      </div>
      );
}
