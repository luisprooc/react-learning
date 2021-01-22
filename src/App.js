import React,{useEffect, useState} from 'react';
import PubSub from "pubsub-js";

const styles = {
    border: "3px solid gray",
    margin: "2em auto",
    width: "50%"
}

const Bisnieto = () => {

    const handler = () => {
        PubSub.publish("saludo","Hola desde el Bisnieto");
    };
    
    return(
        <div style={styles}>
            <button onClick={()=>handler()}>Biniesto</button>
        </div>
    );
};

const Nieto = () => {
    return(
        <div style={styles}>
            <Bisnieto />
        </div>
    );
};

const Hijo = () => {
    return(
        <div style={styles}>
            <Nieto />
        </div>
    );
};




const App = () => { 

    useEffect(()=>{
        PubSub.subscribe("saludo",(e,data)=>{
            console.log(data);
        });
    })

    return(
        <>  
            <h1>Patron observer </h1>
            <Hijo />
        </>
    );
};

export default App;