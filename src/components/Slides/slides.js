import React, { useState, useEffect } from 'react';
import ISW from "../../images/ISW.jpg";
import IAS from "../../images/IAS.jpg";
import IR from "../../images/IR.jpg";
import ITL from "../../images/ITL.jpg";
import "./slides.css";

const Slides = ({images, interval }) => {

    const [active, setActive] = useState(0);

    useEffect(() => {

        const tick = setInterval(()=> {

            if(active < images.length - 1) {
                setActive(active + 1);
            }

            else{
                setActive(0);
            }

        },interval);

        return () => clearInterval(tick);
        
    }, [active, images.length, interval]);


    return(
        <div className="slide">
            <div className="slide-container">
                {images.map( (item,index) => {

                    return(
                        <img 
                            key={item.src}
                            src={ item.src }
                            alt={ item.title }
                            className={
                                active === index 
                                    ? "slide-container-img anima-show" 
                                    : "slide-container-img anima-hide"
                            }
                        />
                    )
                })}

                <div className="slide-container-title">
                    { images[active].title } 
                </div>
            </div>
        </div>
    );
};


Slides.defaultProps = {
    interval: 3000,

    images: [
        {
            src: ISW,
            title: 'Ingenieria de software'
        },
        {
            src: IAS,
            title: 'Ingenieria aeroespacial'
        },
        {
            src: IR,
            title: 'Ingenieria robotica'
        },
        {
            src: ITL,
            title: 'Ingenieria de telecomunicaciones'
        },
    ]
}

export default Slides;