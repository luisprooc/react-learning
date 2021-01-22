import React,{useState,createContext} from 'react';


const {Provider, Consumer} = createContext();

const styles = {
    border: "3px solid gray",
    margin: "2em auto",
    width: "50%"
}


const Nieto = () => {
    return(
        <Consumer>
            {({clicks,addClicks})=>{
                return(
                    <div style={styles}>
            
                        <button onClick={addClicks}>Disparar ({clicks})</button>
                    </div>
                )
            }}
        </Consumer>
    );
};

const Hijo = () => {
    return(
        <div style={styles}>
            <Nieto />
        </div>
    );
};




const App = () => { 

    let [clicks, saveClicks] = useState(0);

    const addClicks = () => {
        saveClicks(++clicks)
    };
    

    return(
        <>  
            <Provider value={{
                clicks: clicks,
                addClicks: addClicks
            }}>
                <h1>API CONTEXT </h1>
                <Hijo />
            </Provider>
        </>
    );
};

export default App;