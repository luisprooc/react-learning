import React, { useState, useRef } from 'react';
import propTypes from "prop-types";

const Acordeon = ({title, bg, content, color}) => {

    const [active, setActive] = useState(false);

    const handler = () => setActive(!active);

    const ref = useRef();

    const styles = {
        background: bg,
        color,
        padding: "0.5em 1em",
        width: "29rem",
        userSelect: "none"
    };

    const contentStyles = {
        height: active ? ref.current.scrollHeight : "0",
        overflow: active ? "visible" : "hidden",
        transition: "all 400ms ease-out"
    };

    return(
        <>
        <div style={styles} onClick={handler}>
            <div>
                <span>{title}  {active ? "🔽" :"▶"} </span>
            </div>
            <div style={contentStyles} ref={ref}>
                <hr/>
                {content}
            </div>
        </div>
        </>
    );
};

Acordeon.defaultProps = {
    title : '',
    content : '',
    bg : 'black',
    color : 'white'
}

Acordeon.propTypes = {
    title : propTypes.string,
    content : propTypes.string,
    bg : propTypes.string,
    color : propTypes.string
}

export default Acordeon;