import './eventRegisterStyle.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate} from 'react-router-dom';

const EventRegister = () => {
  const [eventName, setEventName] = useState('');
  const [time, setTime] = useState('');
  const [whereToMeet, setWhereToMeet] = useState('');
  const [foodPreference, setFoodPreference] = useState('');
  const [userId, setUserId] = useState('');
  const [type, setType] = useState('');
  const navigate = useNavigate();  

  const url = "http://localhost:8000/event/entry"; 

  const PostData = (event) => {
    event.preventDefault(); // フォームのデフォルトの送信動作を防止

    axios.post(url, {
      event_name: eventName,
      time: time,
      where_to_meet: whereToMeet,
      food_preference: foodPreference,
      user_id: userId,
      type: type
    },{
        headers: {
            'Content-Type': 'application/json'  // JSON形式でデータを送信するためのヘッダー
          }
    }
    )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  function moveToComplete(){
    navigate(`/Complete_Regist`);
  }

  return (
    <div>
      <p className='title'>Event</p>
      <form className="EventRegistForm" onSubmit={PostData}>
        <label>eventname</label>
        <input value={eventName} onChange={(cevent) => setEventName(cevent.target.value)} />

        <label>time</label>
        <input value={time} onChange={(cevent) => setTime(cevent.target.value)} />

        <label>whereToMeet</label>
        <input value={whereToMeet} onChange={(cevent) => setWhereToMeet(cevent.target.value)} />

        <label>foodPreference</label>
        <input value={foodPreference} onChange={(cevent) => setFoodPreference(cevent.target.value)} />

        <label>type</label>
        <input value={type} onChange={(cevent) => setType(cevent.target.value)} />

        <label>user</label>
        <input value={userId} onChange={(cevent) => setUserId(cevent.target.value)} />

        <input type="submit" value="Submit" onClick={moveToComplete}/>
      </form>
    </div>
  );
};

export default EventRegister;
