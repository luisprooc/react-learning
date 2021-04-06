import React, { useState } from 'react';
import {TransitionGroup, CSSTransition} from "react-transition-group";
import "./carrousel.css";
import propTypes from "prop-types"

const Carrousel = ({ images }) => {
    const [activeIndex, setActiveIndex] = useState(0);

    const handlerBack = () => {

        if( activeIndex > 0) setActiveIndex(activeIndex - 1);

        else setActiveIndex(images.length - 1);
    }

    const handlerNext = () => {
        if( activeIndex < images.length -1) setActiveIndex(activeIndex + 1);

        else setActiveIndex(0);
        
    }

    return(
        <>
            <div className="carrousel">
                <div>
                    <button onClick={handlerBack}>
                        BACK
                    </button>
                    <button onClick={handlerNext}>
                        NEXT
                    </button>

                </div>

            <TransitionGroup>
                <CSSTransition
                    timeout={2000}
                    classNames="slide"
                    key={activeIndex}
                >
                    <img
                        src={images[activeIndex]}
                        alt="IMG"
                        className="carrousel-img"
                        />
                </CSSTransition>
            </TransitionGroup>
            </div>
        </>
    );
}

Carrousel.defaultProps = {
    images : []
}

Carrousel.propTypes = {
    images : propTypes.arrayOf(
        propTypes.string
    )
}

export default Carrousel;