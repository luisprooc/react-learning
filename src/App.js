import React,{useState} from 'react';


const App = () => { 

    const [value, setValue] = useState(false);
    const active = value ? "red" : "black";

    return(
        <div className="circle" style={{background:active}} onClick={() => setValue(!value)}>  
        </div>
    );
};

export default App;