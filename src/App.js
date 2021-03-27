import React from 'react';
import { BrowserRouter, Route,Link } from "react-router-dom";


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
            <Link to={{
                pathname:"/",
                search: "?ho",
                hash: "#otro"
            }}>Home  //</Link>
            
            <Link to="/hola"> Hola //</Link>
            <Link to="/productos"> Productos</Link>
        </nav>
    );
};

const App = () => { 
    return(
        <BrowserRouter>
            <Nav />
            <Route exact path="/" component={Home} />
            <Route exact path="/hola" component={Hola} />
            <Route exact path="/productos" component={Productos} />
        </BrowserRouter>
    );
};

export default App;

