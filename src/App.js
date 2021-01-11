import React,{createRef,useEffect} from 'react';

const Bird = () => {
    return(
        <>
            <span role="img" aria-label="bird">
                🦅
            </span>
        </>
    );
};

const Inputs = (props) => {

    const handler = (e) => {
        e.preventDefault();
        const nombre = e.target[0].value;
        const password = e.target[1].value;
        props.onSend({nombre,password});
    };
    

    return(
        <form onSubmit={(e)=>handler(e)}>
            <input type="text"  placeholder="Name"/>
            <input type="password"  placeholder="password"/>
            <button>SEND</button>
        </form>
    );
};

const App = () => {

    const onSent = (data) =>{
        console.log(data);
    }

    return(
        <>  
            <h1>Inputs no controlados <Bird /></h1>
            <Inputs 
                onSend={onSent}
            />
        </>
    );
};

export default App;