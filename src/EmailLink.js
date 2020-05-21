import React from 'react';
import './EmailLink.css';


const EmailLink = (props) => {

    const mailIcon = "./email-black-48dp.svg";
    
    return (

    
         <div>

            <img className="mail-icon" src={mailIcon}/>
            
        <div>
            <div  className={(props.numberOfUnread > 0) ? 'mail-badge' : '' } >
                <p className="badge-count"> {(props.numberOfUnread)} </p>
         </div>
        
        </div>

         </div>
    );
};

export default EmailLink;
