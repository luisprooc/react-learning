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

    const [techs, setTechs] = useState([]);

    const handler = (e) => {
        const techs = Array.from(e.target.selectedOptions).map(option => option.value);
        setTechs(techs);
    };
    

    return(
        <>  
            <h1>Etiqueta Select <Bird /></h1>
            <form>
                <select  value={techs} onChange={handler} multiple>
                    <option value="Angular">Angular</option>
                    <option value="React">React</option>
                    <option value="Vue">Vue</option>
                </select>
            </form>
            <ul>
                {techs.map(value => <li>{value}</li>)}
            </ul>
        </>
    );
};

export default App;