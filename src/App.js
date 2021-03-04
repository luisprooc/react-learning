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

    // useCallback se usa en conjunto con memo
    const incrementA = useCallback( () => setA(a => a + 1), []);

    return(
        <>  
            <h1>Hook useCallback</h1>
            <Button callback={incrementA}>
                Increment A
            </Button>
            <p>{a}</p>
        </>
    );
};

export default App;