import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWifi,faHotTub, faTv, faBellConcierge, faUserGroup, faCar, faTemperature1, faCreditCard} from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import { ReactDOM } from 'react';

function Services() {
  const [cambioColor, setCambioColor] = useState(false)
  const bgg = true;
  

  function cambios(){
    var elementos = document.getElementsByClassName('icon-service');
}

  function cambiosRevertidos(){
    var elementos = document.getElementsByClassName('icon-service');

  }


  
  return (
    <div >
        <div className="servicios">

          <h1>SERVICIOS</h1>
          <p>NUESTROS SERVICIOS ESTAN PENSADOS PARA HACER DE TU ESTADIA UNA EXPERIENCIA INOLVIDABLE</p>
        </div>
        <div className="flex-box icons container">

          <div className="icon-service">
            <FontAwesomeIcon icon={faHotTub} />
            <h5 className="icon-text">JACUZZI</h5>
          </div>

          <div className="icon-service">
            <FontAwesomeIcon icon={faTv} />
            <h5 className="icon-text">TELEVISIÓN</h5>
          </div>

          <div className="icon-service">
            <FontAwesomeIcon icon={faBellConcierge} />
            <h5 className="icon-text">ROOM SERVICE</h5>
          </div>

          <div className="icon-service">
            <FontAwesomeIcon icon={faUserGroup} />
            <h5 className="icon-text">LGBTIQ+ FRIENDLY</h5>
          </div>

          <div className="icon-service">
            <FontAwesomeIcon icon={faCar} />
            <h5 className="icon-text">ESTACIONAMIENTO</h5>
          </div>

          <div className="icon-service">
            <FontAwesomeIcon icon={faWifi} />
            <h5 className="icon-text">WI-FI</h5>
          </div>

          <div className="icon-service">
            <FontAwesomeIcon icon={faTemperature1} />
            <h5 className="icon-text">CLIMATIZADOR</h5>
          </div>

          <div className="icon-service">
            <FontAwesomeIcon icon={faCreditCard} />
            <h5 className="icon-text">TODO MEDIO DE PAGO</h5>
          </div>
        </div>
      </div>
   
  );
}

export default Services;