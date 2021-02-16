import React, { useRef } from 'react';


const App = () => { 

    const entrada = useRef();

    const focus = () => entrada.current.focus();

    const blur = () => entrada.current.blur();

    return(
        <>  
            <h1>Use Ref</h1>
            <input 
                type="text"
                placeholder="Ingresa tu texto"
                ref={entrada}
            />
            <button onClick={focus}>Focus</button>
            <button onClick={blur}>Blur</button>
        </>
    );
};

export default App;