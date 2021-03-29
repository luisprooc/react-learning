import React from 'react';
import { BrowserRouter, Route,Link,NavLink } from "react-router-dom";


const Hola = () => {
    return(
        <h1>Hola</h1>
    );
};

const Home = () => {
    return(
        <h1>Home</h1>
    );
};

const Productos = () => {
    return(
        <h1>Productos</h1>
    );
};


const Nav = () => {
    return(
        <nav>
            <NavLink to="/">Home  //</NavLink>
            <NavLink to="/hola" > Hola //</NavLink>
            <NavLink to="/productos"> Productos</NavLink>
            <NavLink to="/ropa"> Ropa</NavLink>
        </nav>
    );
};

const Category = ({match}) => {
    return(
        <>
            <h2>{match.params.category} </h2>
        </>
    );
};

const Ropa = ({location}) => {

    const query = new URLSearchParams(location.search);
    const color = query.get("color");

    return(
        <>
            <h1>Ropa : {color}</h1>
        </>
    );
};

const App = () => { 
    return(
        <BrowserRouter>
            <Nav />
            <Route exact path="/" render={Home} />
            <Route exact path="/hola" render={Hola} />
            <Route exact path="/productos" render={Productos} />
            <Route exact path="/productos/:category" render={Category} />
            <Route exact path="/ropa" render={Ropa} />
        </BrowserRouter>
    );
};

export default App;

