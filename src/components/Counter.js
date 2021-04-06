import React,{ useState, Children, cloneElement } from "react";


export const Title = ({clicks,children}) => (

    typeof children === "function"? children(clicks) : <span>{clicks}</span>
);

export const Button = ({type="increment",handlerClick}) => (
        <button
            onClick={handlerClick}
        >
            {type === "increment"?"ADD":"QUIT"}
        </button>
    
);


export const Counter = ({children}) => {
    const [clicks, setClicks] = useState(0);

    const increment = () => setClicks(clicks + 1);

    const decrement = () => setClicks(clicks - 1);

    if(!children){
        const styles = {
            background: "#CC6040",
            borderRadius: "0.2em",
            padding: "0.3em 1em",
            color: "#FFF"
        }

        return (
            <div style={styles}>
                <h1>Debes agregar componentes tipo {`<Button/>`} ⚠</h1>
            </div>
        )
    }

    const ch = Children.map(children,(child) => {

        let props = {};

        if(child.type === Title){
            props.clicks = clicks;
            return cloneElement(child, props);
        }

        if(child.type === Button){

            props.handlerClick = child.props.type === "decrement"? decrement: increment;
            return cloneElement(child, props);
        }
    
    });

    return ch;
};

