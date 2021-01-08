import React,{useState} from 'react';

const Fruits =[
    "Fresa",
    "Mango",
    "Pera",
    "Pina"
];

const Links = [
    {
        name:"Youtube",
        url: "https://www.youtube.com/"
    },
    {
        name: "Facebook",
        url: "https://play.google.com/store/apps/details?id=com.facebook.katana&hl=en&gl=US"
    }
];

const Link = ({link}) => {
    return(
        <div>
            <a href={link.url}>
                {link.name}
            </a>
        </div>
    );
};


const App = () => {

    const [products,setProducts] = useState([
        {
            name: "Short",
            price: 200,
            colors: ["red","blue"]
        },
        {
            name: "T-shirt",
            price: 100,
            colors: ["yellow","black"]
        },
        {
            name: "Hat",
            price: 50,
            colors: ["royalblue","gray"]
        }
        
    ]);

    const [cars,setCards] = useState({
        Bmw:{
            id:1,
            name: "Bmw",
            price: 2000000,
            model: 2013
        },
        Honda:{
            id: 2,
            name: "Honda",
            price: 1000000,
            model: 2010
        }
        
    });

    const keys = Object.values(cars);

    const selectFruit = (fruit) => {
        console.log(fruit)
    };
    

    return(
        <>  
        {/*Mapear arreglos*/}
            {Fruits.map(i => {
                return <li>{i}</li>
            })}

            <hr />

            {/*Mapear arreglo de objetos*/}
            <h1>Products 🔥🔥🔥</h1>
            {products.map(item=>{
                return(
                    <figcaption>
                        <h3>{item.name}--- ${item.price}</h3>
                        <div>
                            {item.colors.map(color =>{
                                return(
                                    <span style={{
                                        width: "30px",
                                        background: color,
                                        height: "80px",
                                        margin: "0.5rem",
                                        borderRadius: "10px"
                                    }}>
                                        {color}
                                    </span>
                                )
                            } )}
                        </div>
                    </figcaption>
                )
            })}

            <hr />
            {/*Mapear objetos aninados*/}
            <figcaption>
                {keys.map(car=>{
                    return(
                        <caption key={car.id}>
                            <p>{car.name} {car.model}</p>
                            <p>{car.price}</p>
                        </caption>
                    )
                })}
            </figcaption>

            <hr />
                
            {/*Mapear componentes*/}
            {Links.map(link=>{
                return(
                    <Link
                        link={link}
                    />

                
                )
            })}

            <hr />

            {/*Pasar datos al iterar listas*/}
            {Fruits.map(i => {
                return <li onClick={()=>selectFruit(i)}>{i}</li>
            })}

        </>
    );
};

export default App;