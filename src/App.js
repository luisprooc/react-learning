import React,{useState} from 'react';


const MouseEvents = () => {
    let [x, setX] = useState(0);
    let [y, setY] = useState(0);

    const styles = {
        background: "silver",
        height: "40em",
    
    }

    const coord = {
        background: "lightGreen",
        height: "40em",
    }

    const calcCoord = (e) => {
        setX(e.clientX);
        setY(e.clientY);
    };
    

    return(
        <>  
            <h1>Down</h1>
            <div style={styles} onMouseDown={ () => alert("H")}> </div>
            <h1>UP</h1>
            <div style={styles} onMouseUp={ () => alert("Up")}> </div>

            <h1>Saber mis cordenadas: </h1>
            
            <div style={coord} onMouseMove={ e => calcCoord(e)}> 
                <h2>X: {x?x :null} </h2>
                <h2>Y: {y?y :null} </h2>
            </div>
        </>
    );
};


const App = () => {

    return(
        <>
            <MouseEvents />
        </>
    );
};

export default App;