import React,{useState} from 'react';
import FruitTraget from "./components/TarjetaFruta/TarjetaFruta";
import "./index.css"
import "./components/clicks";
import Clicks from './components/clicks';


const Pollo = (props) => {
    const styles ={
        color: "blue"
    }
    return(
        <>
            <h1>Pollo 🐔</h1>
            <pre style={styles}>
                {JSON.stringify(props,null, 4)}
            </pre>
        </>
    );
};

const App = () => {
    let [counts, saveCounts] = useState(0);

    const otros = {
        raza: "Blanca"
    }

    return(
        <>
            <FruitTraget 
                name={"Sandia 🍉"}
                price={10.30}
            />
    
            <FruitTraget 
                name={"Banana 🍌"}
                price={1.99}
            />
            <Clicks 
                saveCounts={saveCounts}
                counts={counts}
            />

            <Pollo 
                name={"Chicken"}
                huevos={counts}
                {...otros}
            />
        </>
    );
};

export default App;