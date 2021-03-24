import React from 'react';
import Carrousel from "./components/carrousel";
import ISW from "./images/ISW.jpg";
import ITL from "./images/ITL.jpg";
import IAS from "./images/IAS.jpg";

const App = () => { 
    return(
        <>
            <Carrousel
                images={
                    [
                        ISW, ITL, IAS
                    ]
                }
            />
        </>
    );
};

export default App;