import React,{useState} from 'react';
import {TransitionGroup, CSSTransition} from "react-transition-group";

const App = () => { 

    const [count, setCount] = useState(0);

    const add = () => setCount(count + 1);

    return(
        <>
            <button onClick={add}>
                +
            </button>
            <TransitionGroup>
                <CSSTransition
                    timeout={100}
                    classNames="fade"
                    key={count}
                >
                    <div>
                        {count}
                    </div>
                </CSSTransition>

            </TransitionGroup>
        </>
    );
};

export default App;