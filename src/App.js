import React, { useState,Children } from 'react';

const Parent = ({children: originalCh}) => {

    const ch = Children.map(originalCh, (child,i) => {
        return(
            <li key={i}>{child}</li>
        );
    });

    const lenChild = Children.count(originalCh);

    // const onlyChild = Children.only(originalCh);

    return(
        <div style={{border:"2px dashed blue", padding:"4rem"}}>
            {ch}
            {lenChild}
        </div>
    );
};


const App = () => { 
    
    return(
        <>  
            <Parent>
                <span>Fresa</span>
                <span>Pera</span>
            </Parent>
        </>
    );
};

export default App;