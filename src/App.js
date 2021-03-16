import React from 'react';
import { Button, Counter,Title } from "./components/Counter";

const App = () => { 
    
    return(
        <>  
            <Counter>
                <Title/>
                <Button 
                    type="decrement"
                />
                <Button />
                <Title>
                    {(click) => (
                        <div>
                            <h1>{click}</h1>
                        </div>
                    )}
                </Title>
            </Counter>
        </>
    );
};

export default App;