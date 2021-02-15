import React,{useEffect, useState} from 'react';



const App = () => { 

    const [clicks, setClicks] = useState(0);
    const [emoji, setEmoji] = useState("🧨");

    useEffect(()=>{

        alert("useEffect");
    },[emoji]);

    const addClicks = () => {
        setClicks(clicks+1);
    }

    const toogleEmoji = () => {
        const nextEmoji = emoji === "🧨" ? "🎇" : "🧨";
        setEmoji(nextEmoji)
    }

    return(
        <>  
            <h1>useEffect</h1>
            <button onClick={addClicks}>CLICKS {clicks}</button>
            <button onClick={toogleEmoji}>TOGGLE EMOJI</button>
            <h2>{emoji}</h2>
        </>
    );
};

export default App;