import './eventRegistStyle.css';
import React from "react";
import { useEffect, useState } from 'react';
import axios from 'axios'; // axiosをインポート

import ResultCard from './resultcard';

const EventRegister = () => {

    const [eventName, setEventName] = useState('');
    const [time, setTime] = useState('');
    const [whereToMeet, setWhereToMeet] = useState('');
    const [foodPreference, setFoodPreference] = useState('');
    const [userId, setUserId] = useState('');
    const [type, setType] = useState('');

    const url = " ";

  const PostData = () => {
		axios.post(url,{
            event_name: eventName,
            time: time,
            where_to_meet: whereToMeet,
            food_preference: foodPreference,
            user_id: userId,
            type: type

        }).then((res) => {
			console.log(res);
		}).catch((err)=>{
            console.log(err);
        });
	};

  return (
    <div>
    <p className='title'>Event</p>

    <form className="EventRegistForm" onSubmit={PostData}>
        <label>eventname</label>
        <input value={eventName} onChange={(cevent)=>setEventName(cevent.target.value)}/>
        
        <label>time</label>
        <input value={time} onChange={(cevent)=>setTime(cevent.target.value)}/>
        
        <label>whereToMeet</label>
        <input value={whereToMeet} onChange={(cevent)=>setWhereToMeet(cevent.target.value)}/>
        
        <label>foodPreference</label>
        <input value={foodPreference} onChange={(cevent)=>setFoodPreference(cevent.target.value)}/>

        <label>type</label>
        <input value={type} onChange={(cevent)=>setType(cevent.target.value)}/>
        
        <input type="submit" value="Submit" />
    </form>
    </div>
  );
};

export default EventRegister;
