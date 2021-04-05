const actions = {
    COUNTER_INCREMENT:"COUNTER_INCREMENT",
    COUNTER_DECREMENT: "COUNTER_DECREMENT",
    INFO_CHANGETEXT: "INFO_CHANGETEXT",
    TODO_ADD: "FRUITS_ADD"
};

export const asyncIncrement = (delay) => (dispatch) => {

    setTimeout(() => {
        dispatch({
            type: actions.COUNTER_INCREMENT
        });
        
    }, delay);
}


export default actions;