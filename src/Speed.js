import React from 'react';

import './Speed.css';

const Speed = (props) => {


    const kmH =  (180 / 20 / 10) * props.kmH ;
    const styleSpeed = { transform: `rotate(${kmH}deg)`};

    return (

    <div className="speedWrap">
        <div className="speed-back">
            <div className="bow" >
                <div className="pointer" style={styleSpeed}></div>
                  <p className={kmH <= 120 ? 'ball' : 'ball-fast'}> {(props.kmH)}</p>
                
            </div>

        </div>
    </div>
    )
} 

export default Speed;