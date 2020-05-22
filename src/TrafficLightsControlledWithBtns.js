import React from 'react';

import TrafficLights from './TrafficLights';
import './TrafficLightsControlledWithBtns.css';


class TrafficLightsControlledWithBtns extends React.Component {
    constructor(props) {
        super(props); 

            this.state = {
                greenIsOn: false,
                yellowIsOn: false,
                redIsOn: false,
            };
        }

        render() {
            return (
                <div className="ctrl-traffic-light">
                    <TrafficLights
                        greenIsOn={this.state.greenIsOn}
                        yellowIsOn={this.state.yellowIsOn}
                        redIsOn={this.state.redIsOn}
                    />

                <div className="traffic-light-btns">
                    <button className="traffic-light-btns__green"
                        onClick={() => {
                            this.setState({
                                greenIsOn: true,
                                yellowIsOn: false,
                                redIsOn: false,
                            });
                        }}

                >
                    Turn green on
                </button>

                <button className="traffic-light-btns__yellow"
                        onClick={() => {
                            this.setState({
                                greenIsOn: false,
                                yellowIsOn: true,
                                redIsOn: false,
                            });
                        }}

                >
                    Turn yellow on
                </button>

                <button className="traffic-light-btns__red"
                        onClick={() => {
                            this.setState({
                                greenIsOn: false,
                                yellowIsOn: false,
                                redIsOn: true,
                            });
                        }}

                >
                    Turn red on
                </button>

                <button className="traffic-light-btns__off"
                        onClick={() => {
                            this.setState({
                                greenIsOn: false,
                                yellowIsOn: false,
                                redIsOn: false,
                            });
                        }}

                >
                    Turn lights off
                </button>


                </div>

                </div>
            )
        }

}

export default TrafficLightsControlledWithBtns;