import React from 'react';
import styled,{createGlobalStyle} from "styled-components";
//import "./styles.css";

const App = () => { 
    return(
        <>  
            <GlobalStyles/>
            <h1>
                Hola
            </h1>
            <Button >CLICK</Button>
        </>
    );
};

export default App;

const Button = styled.button`
    padding: 0.5rem 4rem;
    background-color: ${props => props.danger?"red":"white"};
`;

const GlobalStyles = createGlobalStyle`
    body{
        font-family: Arial, Helvetica, sans-serif;
    }
`;