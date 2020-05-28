import React from 'react';

import Navigation from './components/navigation/Navigation';
import Toolbar from './components/navigation/Toolbar';
import cats from './cats';
import FrameForImage from './FrameForImage';
import TrafficLights from './TrafficLights';
import DesktopFan from './DesktopFan';
import Clock from './Clock';
import NotificationLink from './NotificationLink';
import EmailLink from './EmailLink';
import Speed from './Speed';
import TrafficLightsControlledWithBtns from './TrafficLightsControlledWithBtns';
import TrafficLightAuto from './TrafficLightAuto';
import AddressBook from './AddressBook';
import ImageSwitcher from './ImageSwitcher';
import insects from './insects';

import './App.css';


const App = () => (
    <div className="app">
        <div className="left-sidebar left-sidebar--visible">
            <div className="left-sidebar__toolbar">
                Navigation

            </div>

     
                <Navigation/>

            </div>

        <div div className="main-section main-section--with-left-sidebar">

        <div>

            <div className="main-section__toolbar">
                
                 <Toolbar/>
                
            </div>
        
       </div>

       <div className="main-section__content">

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
       
       {window.location.search === '?page=traffic-lights-ctrl' && (
                 <div className="main-section__content">
                    <h1>
                        Controlled traffic light
                    </h1>

                   

                        <TrafficLightsControlledWithBtns/>
                 </div>
       )}

        {window.location.search === '?page=traffic-lights-auto' && (
                 <div className="main-section__content">
                    <h1>
                        Automatic switching traffic light
                    </h1>
                       
                        <TrafficLightAuto/>

                 </div>
       )}
        
            {window.location.search === '?page=fans' && (
                        <div className="main-section__content">
                            <h1>
                                Fan 
                            </h1>
                            
                        <div className="fanPage">
                            <DesktopFan isOn={true} />

                            <DesktopFan isOn={false} />
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

            {window.location.search === '?page=address-book' &&  (
                                <div className="main-section__content">

                                    <h1>
                                        My Address Book
                                    </h1>

                                        <div className="">

                                         <AddressBook/>


                                        </div>
                                

                                    </div>
                                )}  

            {window.location.search === '?page=image-switcher' &&  (
                                <div className="main-section__content">

                                    <h1>
                                        Image Switcher
                                    </h1>

                                        <div className="">

                                        <ImageSwitcher>
                                            <img src="./butterfly.jpg" alt="butterfly"/>
                                            <img src="./ants.jpg" alt="ants"/>
                                            <img src="./grasshopper.jpg" alt="grasshopper"/>
                                            <img src="./dragonfly.jpg" alt="dragonfly"/>
                                        </ImageSwitcher>




                            </div>
                    

                        </div>
                    )}  
       </div>

          
        </div>

   </div> 
   
);


export default App;
