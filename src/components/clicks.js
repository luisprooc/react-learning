import React,{useState} from 'react';

const Clicks = ({saveCounts,counts}) => {
    let [disponibles,guardarDisponibles] = useState(10);

    return(
        <button type="button" onClick={
            e =>{
                
                if(disponibles){
                    saveCounts(++counts);
                    guardarDisponibles(--disponibles);
                }
                else alert("No hay mas huevos")
            }
        }>Huevos disponibles: {disponibles}</button>
    )
};

export default Clicks;