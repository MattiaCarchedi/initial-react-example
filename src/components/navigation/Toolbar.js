import React from 'react';

export default class Tollbar extends React.Component {
    render() {
        return (
            <React.Fragment>
                {window.location.search === '' && 'Cats gallery'}

                {window.location.search === '?page=traffic-lights' && 'Traffic lights'}

                {window.location.search === '?page=traffic-lights-ctrl' && 'Controlled traffic light'}

                {window.location.search === '?page=traffic-lights-auto' && 'Automatic switching traffic light'}

                {window.location.search === '?page=fans' && 'Fan'}

                {window.location.search === '?page=clock' && 'My clock'}

                {window.location.search === '?page=notifications' && 'E-mail'}

                {window.location.search === '?page=speedometer' && 'My Speedometer'}

                {window.location.search === '?page=address-book' && 'My Address Book'}
            </React.Fragment>
        )
    }
}