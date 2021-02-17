import React, { useRef, useEffect, useState } from 'react';

const App = () => { 

    const ref = useRef();
    const [name,setName] = useState("");
    const [post,setPost] = useState({});

    const handlerInput = () => setName(ref.current.value);

    useEffect(()=>{
        //debounce
        setTimeout(()=>{
            if(name === ref.current.value){
                fetch(`https://jsonplaceholder.typicode.com/todos/${name}`)
                        .then(response => response.json())
                        .then(post => setPost(post));

            }
        },600)
    },[name])

    return(
        <>  
            <h1>EXAMPLE WITH HOOKS</h1>
            <input 
                type="text"
                placeholder="Ingresa un numero"
                onChange={handlerInput}
                ref={ref}
            />
            {post.id && (
                <div>
                    <h1>{post.title}</h1>
                    <p>completed: {post.completed?"TRUE":"FALSE"}</p>
                </div>
            )}
        </>
    );
};

export default App;