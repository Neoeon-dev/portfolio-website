import Sun from "./Sun";
import Planet from "./Planet";
import Orbit from "./Orbit";
import "./PlanetarySystem.css";
import type React from "react";

interface Props{
    setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

function PlanetarySystem({setLoading} : Props){

    return(
        <div className="PlanetarySystem">
            <Sun></Sun>
            <Orbit radius={100} angle={0} speed={15} setLoading={setLoading}> 
                <Planet size={40} color="#283593" texture="/C.svg"/>
            </Orbit>
            <Orbit radius={140} angle={45} speed={30} setLoading={setLoading}> 
                <Planet size={40} color="#283593" texture="/C++.svg"/>
            </Orbit>
            <Orbit radius={180} angle={90} speed={20} setLoading={setLoading}> 
                <Planet size={40} color="#37474F" texture="/python.svg"/>
            </Orbit>
            <Orbit radius={220} angle={135} speed={5} setLoading={setLoading}> 
                <Planet size={40} color="#3E2723" texture="/java.svg"/>
            </Orbit>
            <Orbit radius={260} angle={180} speed={5} setLoading={setLoading}>
                <Planet size={40} color= "#ffffff" texture="/mysql.svg"></Planet>
            </Orbit>
            <Orbit radius={300} angle={225} speed={5} setLoading={setLoading}>
                <Planet size={40} color="#FDFBD4" texture="/web-development.svg"></Planet>
            </Orbit>
        </div>
    )
}

export default PlanetarySystem;