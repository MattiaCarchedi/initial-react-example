import React from 'react';

import './Clock.css';

class Clock extends React.Component {
    

    render() {

        const hoursHandAngle = -270 + (360 / 12) * this.props.hh;
        const minutesHandAngle = -270 + (360 / 60) * this.props.mm;
        const secondsHandAngle = -270 + (360 / 60) * this.props.sec;
      
        const styleHrs = { transform: `rotate(${hoursHandAngle}deg)` };
        const styleMinutes = { transform: `rotate(${minutesHandAngle}deg)` };
        const styleSeconds = { transform: `rotate(${secondsHandAngle}deg)` };
      
          return (
              
              <div class="clock">
                  <div class="outer-clock-face">
                  <div class="inner-clock-face">
                      <div class="hand hour-hand" style={styleHrs} ></div>
                      <div class="hand min-hand" style={styleMinutes}></div>
                      <div class="hand second-hand" style={styleSeconds}></div>
                  </div>
                  </div>
              </div>
              )}

  
          }
    

export default Clock;