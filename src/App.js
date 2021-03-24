import React from 'react';
import styled from "styled-components";
//import "./styles.css";

const App = () => { 
    return(
        <>  
            <H1>
                Hola
            </H1>
        </>
    );
};

export default App;

const color = "red";

const H1 = styled.h1`
    /*color: var(--colorPrincipal);*/
    font-size: 5rem;
    color: ${color};
`;