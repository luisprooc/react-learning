import React,{useEffect, useState} from 'react';



const App = () => { 

    const [posX, setPosX] = useState(0);
    const [posY, setPosY] = useState(0);

    
    //DidMound
    //DiuUpdate
    useEffect(()=>{

        window.addEventListener("mousemove",handleMove);
        
        // DidwillUnmount
        return () => {
            window.removeEventListener("mousemove",handleMove);
        }
    },[]);

    const handleMove = (e) => {
        setPosX(e.clientX);
        setPosY(e.clientY);
    }

    return(
        <>  
            <h1>useEffect</h1>
            <h4>X: {posX}</h4>
            <h4>Y: {posY}</h4>
        </>
    );
};

export default App;