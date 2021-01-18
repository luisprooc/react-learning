import React,{useState} from 'react';

const API = () => {
    const [movie,saveMovie] = useState({});


    const searchMovie = (e) => {
        e.preventDefault();
        const query = e.target[0].value;
        const url = `https://www.omdbapi.com/?t=${query}&apikey=a9a1b0b6`

        fetch(url)
            .then(res => res.json())
            .then(res => saveMovie(res))
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

            <div>
                <h1>Name: {movie.Title}</h1>
                <h4>Resume: {movie.Plot}</h4>
                <p>Actors: {movie.Actors}</p>
                <img src={movie.Poster}></img>
            </div>
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