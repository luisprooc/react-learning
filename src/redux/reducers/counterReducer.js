import actions from "../actions";

const counter = ( state = 0, action ) => {
    const { COUNTER_INCREMENT, COUNTER_DECREMENT } = actions;

    switch( action.type ){
        
        case COUNTER_INCREMENT:
            return state + 1;

        case COUNTER_DECREMENT:
            return state - 1;

        default:
            return state;
    }
}

export default counter;