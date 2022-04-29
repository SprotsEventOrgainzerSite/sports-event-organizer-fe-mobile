import { useState } from 'react';
import './App.css';
import EventElement from './EventElement';

function Events()
{
    

    return(
        <div>
             <div className="newsFeed">  
             <h2 className="events-title">Available events</h2>            
                <EventElement title = "Sample Title" text = "Sample Text"></EventElement>
                <EventElement title = "Sample Title2" text = "Sample Text"></EventElement>
           </div>
        </div>
       
    )
}

export default Events;