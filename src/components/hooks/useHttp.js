import { useEffect, useState } from "react";


const UseHTTP = ( url ) => {
    const [res, setRes] = useState({});
    const [isFecthing,setFecthing] = useState(true);

    useEffect(() => {
        setFecthing(true);
        fetch(url)
            .then(data => data.json())
            .then(data => {
                setRes(data)
                setFecthing(false)
            })
            .catch(error => setRes(error))

        return () => {
            
        }
    }, [url]);


    return [res ,isFecthing];
};


export default UseHTTP;