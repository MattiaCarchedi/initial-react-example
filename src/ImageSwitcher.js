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
      const selectedIndex = this.state.selectedIndex;

        return (
            <div className="image-switcher-wrapper">
                <div className="image-switcher__content-wrapper">
                    <div>
                        <button 
                        onClick={() => {selectedIndex === 0 ? this.setState({selectedIndex: insects.length -1}) : this.setState({selectedIndex: selectedIndex - 1,})}}
                            
     className="image-switcher__button-back image-switcher__button-back--active">{back}</button>
                    </div>
                    <div>
                        <img className="image-switcher__image" src={insects[this.state.selectedIndex].image}/>
                    </div>
                    <div>
                        <button 
                        onClick={(e) => {
                            e.preventDefault();
                            const newIndex = this.state.selectedIndex + 1; 

                            if (this.state.selectedIndex < insects.length - 1) {
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
            
            <button 
            onClick={() => this.setState({selectedIndex: 0})}
            className={(selectedIndex === 0 ? 'image-switcher__button-current--active' :'image-switcher__button-current')}
            ></button>

            <button 
            onClick={() => this.setState({selectedIndex: 1})}
            className={(selectedIndex === 1 ? 'image-switcher__button-current--active' :'image-switcher__button-current')} ></button>

            <button 
            onClick={() => this.setState({selectedIndex: 2})} className={(selectedIndex === 2 ? 'image-switcher__button-current--active' :'image-switcher__button-current')} ></button>
            
            <button 
            onClick={() => this.setState({selectedIndex: 3})} className={(selectedIndex === 3 ? 'image-switcher__button-current--active' :'image-switcher__button-current')}></button> 

        </div>

    </div>
        )
    }
}