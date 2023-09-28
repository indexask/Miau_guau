import "../assets/css/style.css";
import { pizzaContext } from "../context/PizzaContextProvider";
import Card from 'react-bootstrap/Card';
import {useContext, useState } from "react";

export default function Home() {

  const { suite } = useContext(pizzaContext)


  return (
    suite.map((p) => {
      return (
        <div key={p.id} className="Cards-Price">
            <div className="background-cards-price">
            <h2 className="Cards-Price-Tittle Cards-Price-Element"  >{p.name}</h2>
            <h1  className="Cards-Price-Element">{p.price[1]}</h1>
            <p  className="Cards-Price-Element">{p.TresHrsDescWeekEnd}</p>
            <h1  className="Cards-Price-Element">{p.price[3]}</h1>
            <p  className="Cards-Price-Element">{p.DoceHrsDescWeekEnd}</p>
            </div>
        </div>  
      );
    })
  );
}