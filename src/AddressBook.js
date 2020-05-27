import React from 'react';
import AddressBookForm from './components/AddressBookForm';
import AddressBookList from './components/AddressBookList';


export default class AddressBook extends React.Component {
    render() {
        return(
            <div>
                <AddressBookForm/>
                <AddressBookList/>

            </div>
           
        );
    }
}