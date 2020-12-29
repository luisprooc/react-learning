import React,{useState} from 'react';





const App = () => {
    let [text,setText] = useState('');
    let [event,setEvent] = useState('');

    const manejador = (e) => {
        if(e.type === "paste"){
            alert("no");
            return;
        }
        setText(e.target.value);
    };
    
    return(
        <>
            <input type="text" onChange={(e)=>{manejador(e)}} onPaste={(e)=>{manejador(e)}} />
            <h3>{text}</h3>
            <h2>{event}</h2>
        </>
    );
};

export default App;