import { createContext, useEffect, useState } from "react";
import suites from "../suites.json"
import { useParams } from "react-router-dom";

export const pizzaContext = createContext()

export default function PizzaContextProvider({ children }) {

    const [suite, setSuite] = useState([]);
 

    const getData = async () => {
        setSuite(suites);
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <pizzaContext.Provider value={{ suite }}>
            {children}
        </pizzaContext.Provider>
    )
}