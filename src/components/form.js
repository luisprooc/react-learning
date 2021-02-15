import React from 'react';


const Form = ({onCatch,onSend}) => (
    <form method="GET" onSubmit={(e)=> onSend(e)}>
        <label>CITY: </label>
        <select onChange={(e)=> onCatch(e)}>
            <option value="Londres">Londres</option>
            <option value="Florencia">Florencia</option>
            <option value="New York">New York</option>
        </select>
        <br /><br />
        <input type="submit" value="SEND"/>
    </form>
);

export default Form