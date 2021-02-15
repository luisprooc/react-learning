import React,{useState} from 'react';



const App = () => { 

    const [data] = useState({
        id:10,
        question:"COMO ME LLAMO?",
        answers:[
            {   
                optId: 100,
                opt: "Carlos"
            },
            {   
                optId: 10,
                opt: "Luis"
            },
            {   
                optId: 20,
                opt: "Juan"
            }
        ],
        correct: "Luis"
    });

    const [res,saveRes] = useState("");

    const handler = (e) => {
        saveRes(e.target.firstChild);
    }

    const send = () =>{
        console.log(data.correct,res)
        data.correct === res?alert("SII"):alert("NELL PRRo");
    }

    return(
        <>  
            <h1>TEST</h1>
            {data && (
                <div>
                    <h2>{data.question}</h2>
                    {data.answers.sort((a,b) => a.optId - b.optId).map(item => <div onClick={(e)=> handler(e)} key={item.optId} vocab={"HEY"}>{item.opt}</div>)}
                </div>
            )}
            <button onClick={()=> send()}>Evaluar</button>
        </>
    );
};

export default App;