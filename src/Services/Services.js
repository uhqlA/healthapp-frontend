import React, { Component } from 'react';
import Card from './ServicesStyle';

import img1 from '../png/booking.png';
import img2 from '../png/admin.png';
import img3 from '../png/reminders.png';

class Services extends Component{
    // constructor(props){
    //     super(props);
    // //     this.state ={};
    // }
    render(){
        return(
          

            <div className="container-fluid d-flex justify-content-center">
                
                <div className="row">
                    

                    <div className="col-md-4">
                        <Card 
                        imgsrc={img1} 
                        title="Accept online bookings"
                        paragraph="Keep your booking channels open 24/7 and 
                        let your clients book their appointments via multiple 
                        channels like your booking website, business website, 
                        Facebook, Instagram or Google Business Profile."
                        button="Booking"
                        />
                    </div>


                    <div className="col-md-4">
                        <Card 
                        imgsrc={img2} 
                        title="Client & Admin App"
                        paragraph="Create customised intake forms to gather 
                        client information during the booking process.
                         You can request texts & digits, checkboxes, drop-down or date responses,
                          as well as ask clients to upload files or images."
                        button="Admin"
                        />
                    </div>


                    <div className="col-md-4">

                        <Card 
                        imgsrc={img3} 
                        title="SMS/Email Notifications"
                        paragraph="Reminders to staff and 
                        clients whenever appointments are booked, 
                        cancelled or rescheduled. 
                        With push notifications on your mobile for 
                        new booking information via the admin app."
                        button="Message"
                        />
                    </div>

                </div>

                

            </div>
           

        );
    }
}

export default Services;