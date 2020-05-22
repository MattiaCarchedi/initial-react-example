import React from 'react';
import './EmailLink.css';


const EmailLink = (props) => {

    const mailIcon = "./email-black-48dp.svg";
    const unread = props.numberOfUnread;

    return (

    
         <div>

            <img className="mail-icon" src={mailIcon}/>
            
        <div>
            <div  className={(unread > 0) ? 'mail-badge' : '' } >
                <p className="badge-count"> {(unread > 0 ? unread : '' )} </p>
         </div>
        
        </div>

         </div>
    );
};

export default EmailLink;
