import React, { useRef, useEffect, useState } from 'react';
import { useDebounce } from 'use-debounce';

const App = () => { 

    const [name,setName] = useState("");
    const [search] = useDebounce(name,600);
    const [post,setPost] = useState({});

    const handlerInput = (e) => setName(e.target.value);

    useEffect(()=>{
        //debounce
 
        fetch(`https://jsonplaceholder.typicode.com/todos/${name}`)
                .then(response => response.json())
                .then(post => setPost(post));
    },[search])

    return(
        <>  
            <h1>EXAMPLE WITH HOOKS</h1>
            <input 
                type="text"
                placeholder="Ingresa un numero"
                onChange={handlerInput}
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