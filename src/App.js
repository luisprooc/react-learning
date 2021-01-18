import React,{useState} from 'react';



const App = () => { 

    const [bug,setBug] = useState(false);

    const error = () => {
        setBug(true);
        
    };

    if(bug){
        throw new Error("He fallado 😥😥");
    }
    

    return(
        <>  
            <button 
            onClick={
                ()=> error()
            }>Bugg</button>
        </>
    );
};

export default App;