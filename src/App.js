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

    const [tech, setTech] = useState("React");

    return(
        <>  
            <h1>Etiqueta Select <Bird /></h1>
            <form>
                <select value={tech} onChange={e => setTech(e.target.value)}>
                    <option value="Angular">Angular</option>
                    <option value="React">React</option>
                    <option value="Vue">Vue</option>
                </select>
            </form>
        </>
    );
};

export default App;