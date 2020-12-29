import React,{useState} from 'react';
import RpgCard from './components/RpgCard/RpgCard';



const App = () => {
    let [points,savePoints] = useState(20)
    return(
        <>
            <RpgCard
                points={points}
                savePoints={savePoints}
            />
        </>
    );
};

export default App;