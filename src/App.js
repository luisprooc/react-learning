import React,{useState} from 'react';




const List = ({list,render}) => {
    return(
        <>
            {list.map(fruit =>{

                if(render){
                    return(
                        render(fruit)
                    );
                }
                const {name,price} = fruit;
                return(
                    <li key={name}> {name} --- {price}$ </li>
                )
            })}
        </>
    );
};





const App = () => { 

    const [fruits,saveFruits] = useState(
        [
        {
            name: "Fresas",
            price: 5
        },
        {
            name: "Sandias",
            price: 10
        },
        {
            name: "Uvas",
            price: 3
        },
    ]);

    return(
        <>  
            <h1 style={{textAlign:"center"}}>Render Props</h1>
            <List
                list={fruits}
                render={(data)=> (
                    <div>
                        <p>{data.name} - {data.price}$ </p>
                        <hr/>
                    </div>
                    )
                }
            />
        </>
    );
};

export default App;