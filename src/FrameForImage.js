import React from 'react';

import './FrameForImage.css'

const FrameForImage = (props) => {
    return (
        <div className="frame">
            <h1 className="frame__header">
                { props.header }
            </h1>

            <div className="frame__content">
                <img src={ props.image }/>
            </div>
        </div>
    );
};

export default FrameForImage;