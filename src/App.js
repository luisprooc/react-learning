import React from 'react';
import FruitTraget from "./components/TarjetaFruta/TarjetaFruta";
import "./index.css"

const App = () => {

    return(
        <>
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