import React,{useState} from 'react';

const Bird = () => {
    return(
        <>
            <span role="img" aria-label="bird">
                🦅
            </span>
        </>
    );
};



const App = () => {

    const [active, setActive] = useState(false);    

    return(
        <>  
            <h1>Input Checkbox {active && <span style={{color:"blue"}}>Active</span>} <Bird /></h1>
            <form>
                <input type="checkbox" checked={active} onChange={() => setActive(active?false:true)}/>
            </form>
            
        </>
    );
};

export default App;