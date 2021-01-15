import React,{useState} from 'react';

const Bird = () => {
    return(
        <>
            <span role="img" aria-label="bird">
                🦅
            </span>
        </>
    );
};

const Inputs = ({placeholder,name,onChange}) => {


    const handler = (e) => {
        const text = e.target.value; 

        onChange(name,text);
    };
    

    return(
        <>
            <label htmlFor={name}>{name}: </label>
            <input type="text"  placeholder={placeholder}  name={name} id={name}  onChange={handler}/>
        </>
    );
};

const App = () => {

    const [name,saveName] = useState("");
    const [email,saveEmail] = useState("");

    const update = (name,data) => {
        name === "name"? saveName(data):saveEmail(data);
    };
    


    return(
        <>  
            <h1>Inputs controlados <Bird /></h1>
            <Inputs 
                placeholder={"Name"}
                name={"name"}
                onChange={update}
            />
            <Inputs 
                placeholder={"Email"}
                name={"email"}
                onChange={update}
            />

            <h3>Name: {name}</h3>
            <h3>Email: {email}</h3>
        </>
    );
};

export default App;