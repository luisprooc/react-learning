import actions from "../actions";

const initialState = {
    name: "Luis",
    country: "RD"
}

const user = ( state = initialState, action ) => {

    const { INFO_CHANGETEXT } = actions;

    switch(action.type){

        case INFO_CHANGETEXT:
            return {...state, name: action.payload.name};

        default:
            return state;
    }
};

export default user;