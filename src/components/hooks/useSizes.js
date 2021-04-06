import { useEffect, useState, useDebugValue } from "react";

const useSizes = () => {
    const [x, setX] = useState(window.innerWidth);
    const [y, setY] = useState(window.innerHeight);

    const handleResize = () => {
        setX(window.innerWidth);
        setY(window.innerHeight);
    }

    useDebugValue("Hook resize");

    useEffect(() => {

        window.addEventListener("resize", handleResize);
    
        return () => {
            window.removeEventListener("resize",handleResize)
        }
    }, []);

    return { x,y }

};

export default useSizes;