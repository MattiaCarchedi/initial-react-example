import React from 'react';

import cats from './cats';
import FrameForImage from './FrameForImage';
import TrafficLights from './TrafficLights';
import Fan from './Fan';
import Clock from './Clock';
import NotificationLink from './NotificationLink';
import EmailLink from './EmailLink';
import Speed from './Speed';

import './App.css';

const App = () => (
    <div className="app">
        <div className="left-sidebar left-sidebar--visible">
            <div className="left-sidebar__toolbar">
                Navigation
            </div>

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


        </div>

        <div div className="main-section main-section--with-left-sidebar">
        <div>
            <div className="main-section__toolbar">

                {window.location.search === '' && 'Cats gallery'}

                {window.location.search === '?page=traffic-lights' && 'Traffic lights'}

                {window.location.search === '?page=fans' && 'Fan'}

                {window.location.search === '?page=clock' && 'My clock'}

                {window.location.search === '?page=notifications' && 'E-mail'}
                
                {window.location.search === '?page=speedometer' && 'My Speedometer'}
            </div>
        
       </div>

       

           {window.location.search === '' && (
                <div className="main-section__content">
                <h1>
                    Some cat pictures here :-)
                </h1>

                <FrameForImage
                    header={cats[0].headerText}
                    image={cats[0].imageUrl}
                >
                    {cats[0].description}
                </FrameForImage>

                <FrameForImage
                    header={cats[1].headerText}
                    image={cats[1].imageUrl}
                >
                    {cats[1].description}
                </FrameForImage>

                <FrameForImage
                    header={cats[2].headerText}
                    image={cats[2].imageUrl}
                >
                    {cats[2].description}
                </FrameForImage>
            </div>
           )}



           {window.location.search === '?page=traffic-lights' && (
               <div className="main-section__content">
                   <h1>
                       Traffic light
                   </h1>

                <div className="trafficWrapper">

                   <TrafficLights
                        greenIsOn={true}
                        yellowIsOn={false}
                        redIsOn={false}
                    />
                 <TrafficLights
                        greenIsOn={false}
                        yellowIsOn={true}
                        redIsOn={false}
                    />

                    <TrafficLights
                        greenIsOn={false}
                        yellowIsOn={false}
                        redIsOn={true}
                    />
                     </div>   

                </div>
                   
           )}
       
        
            {window.location.search === '?page=fans' && (
                        <div className="main-section__content">
                            <h1>
                                Fan 
                            </h1>
                            
                        <div className="fanPage">
                            <Fan isOn={true} />

                            <Fan isOn={false} />
                        </div>

                            
                        </div>
                    )}

        

            {window.location.search === '?page=clock' && (
                    <div className="main-section__content">
                        <h1>
                            My clock
                        </h1>

                        <div className="clockPage">

                           <Clock hh={1} mm={45} sec={20} />

                        </div>
                    

                        </div>
                    )} 

        {window.location.search === '?page=notifications' &&  (
            <div className="main-section__content">
                <h1>
                    Notifications
                </h1>

                <div className="">

                <NotificationLink
                        href="/?page=notifications"
                        haveUnread 
                />

                <NotificationLink
                    href="/?page=notifications"
                   
                />

                </div>
            

                </div>
            )}  



        {window.location.search === '?page=email' &&  (
                    <div className="main-section__content">

                        <h1>
                            E-mail
                        </h1>

                            <div className="">

                            <EmailLink
                                href="/?page=emails"
                                numberOfUnread={10}
                            />


                            </div>
                    

                        </div>
                    )}  

            {window.location.search === '?page=speedometer' &&  (
                                <div className="main-section__content">

                                    <h1>
                                        My Speedometer
                                    </h1>

                                        <div className="">

                                        0 km/h
                                        <Speed kmH={0}/>

                                        120 km/h
                                        <Speed kmH={120}/>

                                        180 km/h
                                        <Speed kmH={180}/>


                                        </div>
                                

                                    </div>
                                )}  

        </div>

   </div> 
   
);


export default App;
