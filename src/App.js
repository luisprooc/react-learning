import React from 'react';
import FruitTraget from "./components/TarjetaFruta";
import "./index.css"

const App = () => {

    return(
        <>
            {/*
            <TarjetaFruta
                name={"Tomate"}
                price={2.2}
            />
            <TarjetaFruta
                name={"Pollo"}
                price={8.4}
            />
            */}

            <FruitTraget 
                name={"Sandia"}
                price={10.30}
            />
    
            <FruitTraget 
                name={"Banana"}
                price={1.99}
            />
        </>
    );
};

export default App;