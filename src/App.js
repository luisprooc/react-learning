import React from 'react';
import styled from "styled-components";
//import "./styles.css";

const getGradient = (rot, color1, color2) => {
    return `background: linear-gradient(${rot},${color1},${color2});`;
}

const App = () => { 
    return(
        <>  
            <Header>
                <h1>
                    Hola
                </h1>

            </Header>
        </>
    );
};

export default App;

const color = "red";

const Header = styled.header`
    ${getGradient("180deg",color,"blue")};

    h1{
        color: red;
    }
`;
