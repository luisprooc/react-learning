import { createStore, applyMiddleware } from "redux";
import reducers from "./reducers";


// Midleware

const logger = (store) => (next) => (action) => {
    console.log("Ha ocurrido una accion", action);

    setTimeout(() => {
        next(action);
    },1000);

    if(action.type !== "ADD_TODO"){
        
        setTimeout(() => {
    
            store.dispatch({
                type: "ADD_TODO",
                payload: {
                    text: "Todo creado en Midleware",
                    checked: false,
                    id: "DDRLLLLD12"
                }
            });
    
        },2500);
    }

};

const store = createStore(reducers, applyMiddleware(logger));


export default store;