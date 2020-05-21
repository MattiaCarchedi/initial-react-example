import React from 'react';

import './Speed.css';

const Speed = (props) => {


    const kmH = (180 / 20 / 10 ) * props.kmH ;
    const styleSpeed = { transform: `rotate(${kmH}deg)`};

    return (

    <div className="speedWrap">
        <div className="speed-back">
            <div className={(kmH <= 120) ? 'bow' : 'bow-fast'} >
                <div className="pointer" style={styleSpeed}></div>
                  <p className="ball"> {(props.kmH)}</p>
                
            </div>

        </div>
    </div>
    )
} 

export default Speed;