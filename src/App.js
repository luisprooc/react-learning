import React,{useState,useEffect} from 'react';

const API = ({catchPosts}) => {
    const [charge,saveCharge] = useState(true);

    useEffect(()=>{
        fetch("http://jsonplaceholder.typicode.com/posts")
            .then(res => res.json())
            .then(res => sendPosts(res))
            .catch(error => console.log(error))
    },[]);

    const sendPosts = (posts) => {
        posts = posts.splice(0,10);
        saveCharge(false);
        catchPosts(posts);
    };
    
    if(charge){
        return <h1>Chargin.......</h1>
    }

    return(
        <>
            <h1 style={{color:"blue"}}>
                POSTS: 
            </h1>
        </>
    );
};


const App = () => { 
    const [posts,savePosts] = useState([]);

    const catchPosts = (res) =>{
        savePosts(res);
    }

    return(
        <>  
            <API
                catchPosts={catchPosts}
            />
            {posts.map(post=>{

                return(
                    <div key={post.id}>
                        <h2>Title: {post.title}</h2> 
                        <h4>UserID: {post.id}</h4>
                        <p>Body: {post.body}</p>
                        <hr/>
                    </div>
                )
            })}
        </>
    );
};

export default App;