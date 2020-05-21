import React from 'react';

 import './TrafficLights.css'

 const TrafficLights = (props) => {
     return (
      
        <div className="traffic-lights">
          <div className={'traffic-lights__light traffic-lights__light--red  ' + (props.redIsOn ? 'traffic-lights__light--active' : '' )}></div>

          <div
            className={'traffic-lights__light traffic-lights__light--yellow  ' + (props.yellowIsOn ? 'traffic-lights__light--active' : '' )}
          ></div>
  
          <div className={'traffic-lights__light traffic-lights__light--green  ' + (props.greenIsOn ? 'traffic-lights__light--active' : '' )}></div>

          </div>
         

     );
 };

 export default TrafficLights;