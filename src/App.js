import React,{useState} from 'react';

// Eventos personalizados

const Hijo = (props) => {
    return(

        <>
            <button onClick={()=> props.onSaludo("React 🔥")}>
                {props.children}
            </button>
        </>
    );
};



const App = () => {
    
    const saludo = (name) =>{
        alert(name);
    }

    // Props children
    return(
        <>
            <Hijo
                onSaludo={saludo}
            >
                <em>SALUDAR</em>
            </Hijo>
        </>
    );
};

export default App;