import React,{useState} from 'react';


const App = () => {
    
    let [color,setColor] = useState('blue');

    const handler = (e) =>{
        // Funciona sin esto
        //e.persist();
        setColor(e.target.value);
    }

    const styles = {
        color: color
    }

    return(
        <>
            <input type="text" onChange={(e) => handler(e)}/>
            <h1 style={styles}>{color}</h1>
        </>
    );
};

export default App;