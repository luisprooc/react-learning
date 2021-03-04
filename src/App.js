import React, { useState,  memo, useCallback } from 'react';


const randomColor = () => "#" + Math.random().toString(16).slice( 2,6 );


const Button = memo(({ callback, children }) => {

    const styles = {
        padding: "0.5em",
        background: randomColor()
    };
    
    return(
        <button onClick={callback} style={styles}>
            {children}
        </button>
    );
});


const App = () => { 

    const [a, setA] = useState(0);
    const [b, setB] = useState(0);

    const incrementA = useCallback( () => setA(a => a + 1), []);

    const incrementB = useCallback( () => setB(b => b + a), [a]);

    return(
        <>  
            <h1>Hook useCallback con dependencias</h1>
            <Button callback={incrementA}>
                Increment A
            </Button>

            <Button callback={incrementB}>
                Increment B
            </Button>
            <p>{a} {b}</p>
        </>
    );
};

export default App;