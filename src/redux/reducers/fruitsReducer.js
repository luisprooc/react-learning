import actions from "../actions";

const initialState = [];

const fruits = (state = initialState, action) => {

    const { FRUITS_ADD } = actions;
    
    switch(action.type){

        case FRUITS_ADD:
            return state.concat(action.payload.fruit);

        default:
            return state;
    }
}

export default fruits;