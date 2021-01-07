import React from 'react';
import PropTypes from 'prop-types';

const Profile = ({name,saldo}) => {
    return(
        <>
            <h2>{name}</h2>
            <h4>{saldo + 100}</h4>
        </>
    )
};

Profile.propTypes = {
    name: PropTypes.string,
    saldo: PropTypes.number
}

const App = () => {

    return(
        <>  
            <Profile name={"Pedro"} saldo={"true"}/>
        </>
    );
};

export default App;