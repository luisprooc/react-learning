import actions from "../actions";

const user = ( state = { name: "Luis"}, action ) => {

    const { CHANGETEXT } = actions;

    switch(action.type){

        case CHANGETEXT:
            return {...state, name: action.value};

        default:
            return state;
    }
};

export default user;