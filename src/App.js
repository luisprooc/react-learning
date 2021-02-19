import React, { useImperativeHandle, useRef,forwardRef,useState } from 'react';


const FancyInput = forwardRef((props,ref) => {

    const entry = useRef();
    const [text, setText] = useState("HOLAA");

    useImperativeHandle(ref,() => ({
        dispatchAlert : () => alert("ALERT!!!") ,
        setParragrapf: (message) => setText(message),
        handlerFocus: () => entry.current.focus()
    })
    )

    return(
        <>
            <input
                type="text"
                placeholder="Add text"
                ref={entry}
            />
            <p>{text}</p>
        </>
    );
    
});



const App = () => { 

    const fancyInput = useRef();

    const handlerClick = () => fancyInput.current.handlerFocus();
    
    return(
        <>  
            <h1>Hook useImperativeHandle</h1>
            <FancyInput 
                ref={fancyInput}
            />
            <button onClick={handlerClick}>dispatchAlert</button>
        </>
    );
};

export default App;