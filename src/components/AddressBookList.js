import React from 'react';
import './AddressBook.css';

export default class AddressBookList extends React.Component {
    render() {
       const { 
                users  = [
                        {
                         firstName: 'Julian',
                        lastName: 'Brooks',
                        company: 'Google',
                        phone: '+7-345-8201982',
                        },
                        { 
                        firstName: 'Pamela',
                        lastName: 'Smith',
                        company: 'Apple',
                        phone: '+1-345-8201982',
                        },
                        { 
                        firstName: 'Marcos',
                        lastName: 'Buñuelos',
                        company: 'ElTaco',
                        phone: '+1-345-8201982',
                        },

                    ]
          } = this.props;

          return (
            <div className="list">
                { users.map(({ firstName, lastName, phone, company}) => {
                    return (
                        <div className="list-item">
                            <span className="span-item">
                                { firstName }
                            </span>
                            <span className="span-item">
                                { lastName }
                            </span>
                            <span className="span-item">
                                { phone }
                            </span>
                            <span className="span-item">
                                { company }
                            </span>
                        </div>
                    );
                }) }
            </div>
        );
    }
}