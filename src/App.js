import React from 'react';
import PropTypes from 'prop-types';

const noop = () =>{}

const Profile = ({name,saldo,Saludo =noop}) => {
    return(
        <>
            <h2>{name}</h2>
            <h4>{saldo + 100}</h4>
            <button onClick={()=> Saludo()}>Saludo</button>
        </>
    )
};

Profile.propTypes = {
    name: PropTypes.string.isRequired,
    saldo: PropTypes.number
}


const App = () => {

    return(
        <>  
            <Profile name={true} saldo={2000} />
        </>
    );
};

export default App;