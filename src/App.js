import React,{useEffect, useState} from 'react';


const Photo = ({key,src,title}) => (
    <div key={key} style={{display:"inline-block"}}>
        <img src={src} alt={title}/>
        <p>{title}</p>
    </div>
);

const App = () => { 

    const [photos, setPhotos] = useState([]);

    useEffect(()=>{

        fetch("https://jsonplaceholder.typicode.com/photos")
            .then(res => res.json())
            .then(res => setPhotos(res.splice(0,10)))
    },[]);


    return(
        <>  
            <h1>PHOTOS</h1>
            {photos.length > 0? photos.map( item => <Photo key={item.id} src={item.url} title={item.title}/> ):null}
        </>
    );
};

export default App;