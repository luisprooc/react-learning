import { createStore } from "redux";
import actions from "./actions";

const counter = ( state = 0, action ) => {
    const { INCREMENT, DECREMENT } = actions;

    switch( action.type ){
        
        case INCREMENT:
            return state + 1;

        case DECREMENT:
            return state - 1;

        default:
            return state;
    }
}



/*
store.subscribe(()=> {
    console.log(store.getState());
});
*/

/*
setInterval(()=>{
    store.dispatch({
        type: "INCREMENT"
    });
},1000);
*/
const store = createStore(counter);


export default store;