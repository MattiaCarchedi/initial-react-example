import React from 'react';

import './DesktopFan.css';

const DesktopFan = (props) => {
    return (
        <div className="wrapper">
         <div className="screen">
            
                <img className={'blade ' + (props.isOn ? 'blade__active' : '')} src="https://cdn.onlinewebfonts.com/svg/img_489522.png" alt=""></img>
            
            
         </div>
    </div>
    );
};

export default DesktopFan;
