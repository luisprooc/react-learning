export const FETCH_POST_REQUEST = "FETCH_POST_REQUEST";
export const FETCH_POST_SUCCESS = "FETCH_POST_SUCCESS";
export const FETCH_POST_FAIL = "FETCH_POST_FAIL";

export const fetchPost = () => (dispatch) => {

    dispatch({ type: FETCH_POST_REQUEST });

    fetch("https://jsonplaceholder.typicode.com/posts")
        .then(res => res.json())
        .then(posts => {
            dispatch({
                type: FETCH_POST_SUCCESS,
                payload:{
                    posts
                }
            })
        })
        .catch( error => {
            dispatch({
                type: FETCH_POST_FAIL,
                payload:{
                    error
                }
            });
        })
};