import React, { useState } from 'react';


//Class
/*
class TarjetaFruta extends React.Component {
    constructor(){
        super()

        this.state ={
            cantidad: 0
        }
    }

    agregar(){
        this.setState({ cantidad : this.state.cantidad + 1 })
    }

    quitar(){
        if(this.state.cantidad !== 0) this.setState({ cantidad : this.state.cantidad -1})
    }

    limpiar(){
        this.setState({ cantidad : 0})
    }
    render(){
        return(
            <div>
                <h3>Title: {this.props.name}</h3>
                <div><p>cantidad: {this.state.cantidad}</p></div>
                <button onClick={this.agregar.bind(this)}>➕</button>
                <br/>
                <button onClick={this.quitar.bind(this)}>➖</button>
                <hr/>
                <button onClick={this.limpiar.bind(this)}>Limpiar</button>
                <p>$Price: {(this.props.price * this.state.cantidad).toFixed(2)}</p>
                <br/>
                <br/>
            </div>
        )
    }
}

*/

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

    const styles = {
        border: cantidad?"3px ridge white":"1px ridge red",
        padding: "30px",
        width: "50%",
        margin: "1em auto",
        background: cantidad?"linear-gradient(120deg ,lightGreen ,lightBlue)":"white",
        color: cantidad?"black":"red",
        transition: "all 400ms ease-out"
    }

    return(
        <div style={styles}>
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