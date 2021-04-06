import {Consumer} from '../app';
import React,{useContext} from 'react';

// Usando useContext
const Bisnieto = () => {
    const {num} = useContext(Consumer);

    return(
        <>
            <p>Bisnieto {num}</p>
        </>
    )
};

// Consumir de forma tradicional
const Nieto = () => (
    
    <Consumer>
        {({num})=>(
            <>
                <p>Nieto {num}</p>
                
            </>
        )}
    </Consumer>
    
);

const Hijo = () => {
    return(
        <>
            <p>Hijo</p>
            <Nieto />
            <Bisnieto />
        </>
    );
};

export default Hijo;