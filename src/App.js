import React,{useState} from 'react';
import axios from "axios";

const API = () => {
    const [movie,saveMovie] = useState({});
    const [show,setShow] = useState(false);
    
    const searchMovie = async(e) => {
        e.preventDefault();
        const query = e.target[0].value;
        const url = `https://www.omdbapi.com/?t=${query}&apikey=a9a1b0b6`

        const res = await axios.get(url);

        // Con fetch

        //const res = await fetch(url);
        //const data = res.json();
        
        saveMovie(res.data);
        setShow(true);
    };
    


    return(
        <>
            <h1>
                Seek Movies: 
            </h1>
            <form onSubmit={(e)=>searchMovie(e)}>
                <input type="text" placeholder="Movie, example: Iron Man"/>
                <button>Send</button>
            </form>

            {show &&(
            <div>
                <h1>Name: {movie.Title}</h1>
                <h4>Resume: {movie.Plot}</h4>
                <p>Actors: {movie.Actors}</p>
                <img src={movie.Poster}></img>
            </div>
            )}
        </>
    );
};


const App = () => { 

    return(
        <>  
            <API />
        </>
    );
};

export default App;