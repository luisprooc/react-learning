import React from 'react';
import { connect } from "react-redux";
import { fetchPost } from "../redux/actions/postsActions";
import ClipLoader from "react-spinners/ClipLoader";

const Blog = ({ posts,dispatch }) => {

    const handler = () => {
        dispatch(fetchPost());
    };
    

    return(
        <>
            <h1>Nuevas Entradas</h1>
            { posts.isFetching && <ClipLoader />}
            <button onClick={handler}>Handler posts</button>
            <ul>
                {posts.posts.map(item => {

                    return(
                        <li key={item.id}>
                            <h5>{item.title}</h5>
                            <p>{item.body}</p>
                        </li>
    
                    );
                })}

            </ul>
        </>
    )
};

const mapStateToProps = (state) => {
    return state;
}


export default connect(mapStateToProps)(Blog);