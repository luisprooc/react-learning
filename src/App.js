import React,{createRef,useEffect,forwardRef} from 'react';


const FancyInput = forwardRef((props,ref) => {
    return(
        <>
            <input type="text" ref={ref}/>
        </>
    );
});


const App = () => {

    const entrada = createRef();
    
    useEffect(()=>{
        console.log(entrada)
    });

    return(
        <>  
            <FancyInput
                ref={entrada}
            />
        </>
    );
};

export default App;