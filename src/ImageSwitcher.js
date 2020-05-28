import React from 'react';
import './ImageSwitcher.css';
import insects from './insects';

export default class ImageSwitcher extends React.Component {
    constructor() {
        super(); 

        this.state = {
            selectedIndex: 0,
        }
    }
    
    render() {
      const back = '<' ;
      const forward = '>';
      const {selectedIndex} = this.state;
    

        return (
            <div className="image-switcher-wrapper">
                <div className="image-switcher__content-wrapper">
                    <div>
                        <button 
                        onClick={() => {selectedIndex === 0 ? this.setState({selectedIndex: this.props.children.length - 1}) : this.setState({selectedIndex: selectedIndex - 1,})}}
                            
                         className="image-switcher__button-back image-switcher__button-back--active">{back}</button>
                    </div>
                    <div>
                       
                       <div className="image-switcher__image"> 
                           {this.props.children[selectedIndex]}
                       </div>
                    </div>
                    <div>
                        <button 
                        onClick={(e) => {
                            e.preventDefault();
                            const newIndex = selectedIndex + 1; 

                            if (selectedIndex < this.props.children.length - 1) {
                        this.setState({
                            selectedIndex: newIndex,
                        })
                        } else {
                        this.setState({
                            selectedIndex: 0,
                        })
                    }
                    

                }}className="image-switcher__button-forward image-switcher__button-forward--active">{forward}</button>
            </div>
        </div>


        
        <div className="image-switcher__navbar">
            
            {this.props.children.map(( _, index) => {
                return (
                    <button 
                    onClick={() => this.setState({selectedIndex: index})}
                    className={(selectedIndex === index ? 'image-switcher__button-current--active' :'image-switcher__button-current')}
                    ></button>
                )
            })}
           

        </div>

    </div>
        )
    }
}