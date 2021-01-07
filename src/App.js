import React,{useState} from 'react';
import ReactDOM from 'react-dom';

const Portal = ({children,visible}) => {
    const styles ={
        width:'100%',
        background:'red',
        height: '100vh',
        color: 'white'
    }

    
    return visible?(ReactDOM.createPortal((
        <div style={styles}>
            <h1>{children}</h1>
        </div>
    ), 
    document.getElementById("modal")))
    :null;
};


const App = () => {
    let [visible,setVisible] = useState(false);

    const handler = () =>{
        if(visible) return setVisible(false);

        return setVisible(true);
    }

    return(
        <>  
            <button onClick={()=> handler()}>{!visible?"Mostrar":"Ocultar"}</button>
            <Portal visible={visible}>
                <em>Hola</em>
            </Portal>
        </>
    );
};

export default App;