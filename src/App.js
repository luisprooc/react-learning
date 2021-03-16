import React, { useState,Children } from 'react';

const Parent = ({children: originalCh}) => {
    const ch = Children.map(originalCh, child => child);

    return(
        <div style={{border:"2px dashed blue", padding:"4rem"}}>
            {originalCh}
        </div>
    );
};


const App = () => { 
    
    return(
        <>  
            <Parent>
                <p>Pruebas</p>
                {1 + 1}
            </Parent>
        </>
    );
};

export default App;