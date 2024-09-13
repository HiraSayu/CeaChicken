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

  const url = "http://localhost:8000/event/entry"; // URLを修正

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
        moveToComplete(); //POSTが完了した後に画面遷移を行う
      })
      .catch((err) => {
        console.log(err);
      });
  };

  function moveToComplete(){
    navigate(`/Complete_Regist`);
  }

  function backPage(){
    window.location.href = '/LunchCompanion/university/international'; // 遷移したいURLを指定
  
}

  return (

    <div>
      {/* <p className='title'>Event Regist</p> */}

    <div className='smartphone-frame'>
      <div style={{display:"flex"}}>
        <button className="back-button" onClick={backPage}>←</button>
        <p className='title' style={{marginLeft:"0px"}}>New Event</p>

      </div>

      <form className="EventRegistForm" onSubmit={PostData}>
        <label>eventname</label>
        <input value={eventName} onChange={(cevent) => setEventName(cevent.target.value)} placeholder='holiday celebration'/>

        <label>time</label>
        <input value={time} onChange={(cevent) => setTime(cevent.target.value)} placeholder='2024-10-09 00:00'/>

        <label>whereToMeet</label>
        <input value={whereToMeet} onChange={(cevent) => setWhereToMeet(cevent.target.value)} placeholder='cafeteria'/>

        <label>foodPreference</label>
        <input value={foodPreference} onChange={(cevent) => setFoodPreference(cevent.target.value)} placeholder='gulten-free'/>


        <label>Type</label>
        <div className="radio">
          <label className="radio-opt">
            <input
              type="radio"  value="local" checked={type === 'local'}
              onChange={() => setType('local')}
            />
            Local
          </label>
          <label className="radio-opt">
            <input
              type="radio" value="international" checked={type === 'international'}
              onChange={() => setType('international')}
            />
            International
          </label>
        </div>

        {/* <label>type</label>
        <input value={type} onChange={(cevent) => setType(cevent.target.value)} placeholder='local or international' /> */}

        <label>user id</label>
        <input value={userId} onChange={(cevent) => setUserId(cevent.target.value)} />

        <input type="submit" value="Submit" onClick={moveToComplete}/>
        
      </form>
    </div>
  </div>
  );
};

export default EventRegister;
