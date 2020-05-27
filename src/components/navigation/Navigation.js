import React from 'react';

export default class Navigation extends React.Component {
    render() {
        return(
            <React.Fragment>
                       <a
                href="/"
                className={
                   'sidebar-navigation-item ' +
                   (window.location.search === '' && 'sidebar-navigation-item--active') 
                }
            >
                Cats gallery
            </a>

            <a
                href="/?page=traffic-lights"
                className={
                    'sidebar-navigation-item ' +
                    (window.location.search === '?page=traffic-lights' && 'sidebar-navigation-item--active')
                }
            >
                Traffic lights
            </a>

            <a
                href="/?page=traffic-lights-ctrl"
                className={
                    'sidebar-navigation-item ' +
                    (window.location.search === '?page=traffic-lights-ctrl' && 'sidebar-navigation-item--active')
                }
            >
                Controlled traffic light 
            </a>

            <a
                href="/?page=traffic-lights-auto"
                className={
                    'sidebar-navigation-item ' +
                    (window.location.search === '?page=traffic-lights-auto' && 'sidebar-navigation-item--active')
                }
            >
                Automatic switching traffic light 
            </a>

            <a 
                href="/?page=fans"
                className={
                    'sidebar-navigation-item ' +
                    (window.location.search === '?page=fans' && 'sidebar-navigation-item--active')
                }
            >
                Fan
            </a>

            <a 
                href="/?page=clock"
                className={
                    'sidebar-navigation-item ' +
                    (window.location.search === '?page=clock' && 'sidebar-navigation-item--active')
                }
            >
                
                Clock
            </a>

            <a 
                href="/?page=notifications"
                className={
                    'sidebar-navigation-item ' +
                    (window.location.search === '?page=notifications' && 'sidebar-navigation-item--active')
                 }
                 
            >
                Notification

            </a>
            
            <a 
                href="/?page=email"
                className={
                    'sidebar-navigation-item ' +
                    (window.location.search === '?page=email' && 'sidebar-navigation-item--active')
                }
            >
                E-mail

            </a>

            <a 
                href="/?page=speedometer"
                className={
                    'sidebar-navigation-item ' +
                    (window.location.search === '?page=speedometer' && 'sidebar-navigation-item--active')
                }
            >
                Speedometer

            </a>

            <a 
                href="/?page=address-book"
                className={
                    'sidebar-navigation-item ' +
                    (window.location.search === '?page=address-book' && 'sidebar-navigation-item--active')
                }
            >
                Adress Book

            </a>

            <a 
                href="/?page=image-switcher"
                className={
                    'sidebar-navigation-item ' +
                    (window.location.search === '?page=image-switcher' && 'sidebar-navigation-item--active')
                }
            >
                Image Switcher

            </a>


            
            </React.Fragment>
        )
    }
}