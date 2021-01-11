import React,{createRef} from 'react';

// Refs en React
const App = () => {

    const entrada = createRef();

    const focus = () => {
        entrada.current.focus();
    };

    const blur = () => {
        entrada.current.blur();
    };
    
    
    return(
        <>  
            <input type="text" ref={entrada}/>
            <button onClick={()=>{focus()}}>Focus</button>
            <button onClick={()=>{blur()}}>Blur</button>
        </>
    );
};

export default App;