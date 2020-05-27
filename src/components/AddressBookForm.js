import React from 'react';
import './AddressBook.css';

export default class AddressBookForm extends React.Component {
    render() {
        return(
            <form className="form">
                <div><input className="input-field" type="text" placeholder="First Name"></input></div>
                <div><input className="input-field" type="text" placeholder="Last Name"></input></div>
                <div><input className="input-field" type="text" placeholder="Company"></input></div>
                <div><input className="input-field" type="text" placeholder="Phone Number"></input></div>
                <div><button className="add">ADD</button></div>
            </form>
        )
    } 
}