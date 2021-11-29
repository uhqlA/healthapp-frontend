import React from 'react'

import './Service.css';

const Services = props => {
    return (
       
        <div className="card text-center shadow">
            
            <div className="overflow">
                <img src={props.imgsrc} alt="booking" className="card-img-top"/>
            </div>
            <div className=" card-body text-dark">
                <h4 className="card-title">{props.title}</h4>
                <p className="card-text">{props.paragraph}</p>
                <a href="/login" className="btn btn-outline-success">{props.button}</a>
            </div>
        </div>
      
       
    );
}

export default Services;
