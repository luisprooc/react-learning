import React, { useState,memo } from 'react';


const Counter = memo(({count}) =>{

    console.log(`%cRender desde <Counter/>`,"color:green")

    return(
            <>
                <h1>{count}</h1>
            </>
    );
});

const Title = memo(({title}) =>{

    console.log(`%cRender desde <Title/>`,"color:orange")

    return(
            <>
                <h1>{title}</h1>
            </>
    );
});

const TitleNested = memo(( {title} ) =>{

    console.log(`%cRender desde <Title/>`,"color:purple")

    return(
            <>
                <h1>{title}</h1>
            </>
    );
},
    (prevProps, nextProps) => {
        return prevProps.info.text === nextProps.info.text;
    }
);


const App = () => { 
    
    const [title, setTitle] = useState("INITIAL TEXT");
    const [count, setCount] = useState(0);

    const handlerClick = () => setCount(count + 1);

    const handlerText = (e) => setTitle(e.target.value);


    return(
        <>  
            <h1>Hook useMemo</h1>
            <input
                type="text"
                placeholder="Write another text"
                onChange={handlerText}
            />
            <button onClick={handlerClick}>Clicks</button>
            <Counter 
                count={count}
            />

            <Title 
                title={title}
            />

            <TitleNested
                info={{
                    text:title
                }}
            />
        </>
    );
};

export default App;