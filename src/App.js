import React from 'react';
import Acordeon from "./components/acordeon";

const App = () => { 

    return(
        <>
            <Acordeon
                title="PS5"
                content="The standard PS5 console plays both physical and digital games. The PS5 Digital Edition plays only digital games. Each version of the PS5 console features backward compatibility, meaning you can play PlayStation 4 games on your new console. "
            />

            <Acordeon
                title="XBOX"
                bg="green"
                content="The standard PS5 console plays both physical and digital games. The PS5 Digital Edition plays only digital games. Each version of the PS5 console features backward compatibility, meaning you can play PlayStation 4 games on your new console. "
            />

            <Acordeon
                title="PC"
                bg="red"
                content="The standard PS5 console plays both physical and digital games. The PS5 Digital Edition plays only digital games. Each version of the PS5 console features backward compatibility, meaning you can play PlayStation 4 games on your new console. "
            />
        </>
    );
};

export default App;