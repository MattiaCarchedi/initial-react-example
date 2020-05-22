import React from 'react';

import TrafficLights from './TrafficLights';
import './TrafficLightAuto.css';

class TrafficLightAuto extends React.Component {
    constructor(props) {
        super(props);

            this.state = {
                yellowIsOn: false,
                greenIsOn: true,
                redIsOn: false,
                previousLight: 'green',
            };
        
    }

    render() {
        return (
            <div className="traffic-light-auto">

            <TrafficLights
                greenIsOn={this.state.greenIsOn}
                yellowIsOn={this.state.yellowIsOn}
                redIsOn={this.state.redIsOn}
            />

            </div>

        )}

        componentDidMount() {
            setInterval(() => {
                 if (this.state.greenIsOn) { 
                    this.setState({
                        greenIsOn: false,
                        yellowIsOn: true,
                        redIsOn: false,
                        previousLight: 'green',
                    })
                } else if (this.state.yellowIsOn && this.state.previousLight === 'green') {
                    this.setState({
                        greenIsOn: false,
                        yellowIsOn: false,
                        redIsOn: true,

                    }) 
              
                } else if (this.state.redIsOn){
                    this.setState({
                        greenIsOn: false,
                        yellowIsOn: true,
                        redIsOn: false,
                        previousLight: 'red',
                    })

                } else if (this.state.yellowIsOn && this.state.previousLight === 'red'){
                    this.setState({
                        greenIsOn: true,
                        yellowIsOn: false,
                        redIsOn: false,
                    })
                } 
                
            }, 1500)
        }
    }


export default TrafficLightAuto;