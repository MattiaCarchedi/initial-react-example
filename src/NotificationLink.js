import React from 'react';



const NotificationLink = (props) => {

    const notificationNone = "./notifications_none-24px.svg";
    const notificationYes = "./notifications-24px.svg";
    
    return (
        <div className="notifications">
        
                <img src={(props.haveUnread ? notificationNone : notificationYes)}/>
        </div>
    );
};


export default NotificationLink;