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
        <div className="Pago">
            <div className="Pay">
                <div className="Total">
                    <h2>Total: 13.970 </h2>
                </div>
                <div className="ProductPay">
                    <div>
                        <img className="imgPay" src="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTwDpHdfOx4qhzjkNWY1Y2Cbz-bvAnnmPkalkVzS2ob0E357dYMGLatN2ZJGjHVr_Gq4XQnI8ViQCodYK5r5Bd7J1H_zn7jD0UbrXq1SG44U0Xg2vBTl-T5VtTqrcmbCVTcvcMQYi8YAQ&usqp=CAc" alt="" />
                    </div>
                    <div>
                        <h5>Correa</h5>
                    </div>
                    <div className="MasMenos">
                        <div>
                            <Button variant="primary" >-</Button>
                        </div>
                        <div>
                            <h1 className="Cantidad">1</h1>
                        </div>
                        <div>
                            <Button variant="primary" >+</Button>
                        </div>

                    </div>
                    <div>
                        <h3>$ 5.990</h3>
                    </div>
                </div>

                <div className="ProductPay">
                    <div>
                        <img className="imgPay" src="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcT4aJLyKCqBnE5RS7RylSYnbPKlz-Dgjppjxx0XbK6N48dLtBhX4n-x8nvG0PgAC14F6tbph2Vy3wdfGy8vgG5FMjIAjnlBkdvS57Rvnc1WrL92heZj3E0aNVzc4s0AS8gelPeBbg93sg&usqp=CAc" alt="" />
                    </div>
                    <div>
                        <h5>Cama</h5>
                    </div>
                    <div className="MasMenos">
                        <div>
                            <Button variant="primary" >-</Button>
                        </div>
                        <div>
                            <h1 className="Cantidad">1</h1>
                        </div>
                        <div>
                            <Button variant="primary" >+</Button>
                        </div>

                    </div>
                    <div>
                        <h3>$ 1.990</h3>
                    </div>
                </div>

                <div className="ProductPay">
                    <div>
                        <img className="imgPay" src="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRYO9BZaXmq_kAVglPTEdZA-IJXCDwV3O_yIm1RmxhMh-gJiqHRVWECFUXqsXosfYre3-23VgXJCKnDfNliUQldP4gh4tIyhL3PEEb77glVBPv1X9Op6RpT_dgVtyZdc4bkpGndUGA&usqp=CAc" alt="" />
                    </div>
                    <div>
                        <h5>Kong</h5>
                    </div>
                    <div className="MasMenos">
                        <div>
                            <Button variant="primary" >-</Button>
                        </div>
                        <div>
                            <h1 className="Cantidad">1</h1>
                        </div>
                        <div>
                            <Button variant="primary" >+</Button>
                        </div>

                    </div>
                    <div>
                        <h3>$ 5.990</h3>
                    </div>
                </div>
                <div className="buttonPay">
                    <Button variant="primary" >PAGAR</Button>
                </div>
            </div>




        </div>
    );
}
