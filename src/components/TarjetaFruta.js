import React, { useState } from 'react';

import "./TarjetaFruta.css";

// Functional

const FruitTraget = (props) => {
    let [cantidad, guardarCantidad] = useState(0);

    const agregar = () =>{
        guardarCantidad(cantidad+=1)
    }

    const quitar = () =>{
        if(cantidad !== 0) guardarCantidad(cantidad-=1)
    }

    const limpiar = () =>{
        guardarCantidad(0)
    }

    const clases = cantidad? `card-active  card`: "card";

    return(
        <div className= {clases}>
            <h3>Title: {props.name}</h3>
                <div><p>cantidad: {cantidad}</p></div>
                <button onClick={agregar}>➕</button>
                <button onClick={quitar}>➖</button>
                <hr/>
                <button onClick={limpiar}>Limpiar</button>
                <p>$Price: {props.price}</p>
                <p>$Total: {(props.price * cantidad).toFixed(2)}</p>
                <br/>
                <br/>
        </div>
    );
};

export default FruitTraget;