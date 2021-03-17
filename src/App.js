import React,{ useState,lazy,Suspense } from 'react';
//import Image from './components/lazy/image';

// Code splitting
const Image = lazy(() => import("./components/lazy/image"));

const App = () => { 
    
    const [show, setShow] = useState(false);

    const handler = () => setShow(!show);

    return(
        <>  
            <button onClick={handler}>SHOW</button>
            {show && (
            <Suspense fallback={<h1>LOADING...</h1>}>
                <Image/>
            </Suspense>    
            )}
        </>
    );
};

export default App;