// LunchCompanion.js
import './Lunch.css';
import React from "react";
import { useEffect, useState, useRef } from 'react';
import axios from 'axios'; // axiosをインポート
import { useNavigate, Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

import ResultCard from './resultcard';


const LunchCompanion = () => {
  const { type } = useParams();  // URLからtypeを取得
  const [events, setEvents] = useState([]); // イベントのデータを管理するstate

  // const url = "/event/{university_id}/{type}";
  // url = "/event/{type}";
 const url = `http://127.0.0.1:8000/event/university/${ type }`;
  

  const GetData = () => {
		axios.get(url).then((res) => {
			setEvents(res.data);
      console.log(res.data)
		});
	};

  useEffect(() => { //初回レンダリング時GetDataを動かす
    GetData();
  }, []); 

//   handleCardClick = () => { //提案者がクリックされた時の処置
//     // URLをpropsから取得し、GETリクエストを送信
    
//   };

function backPage(){
    window.location.href = '/register_profile'; // 遷移したいURLを指定
}
  

  return (
    <div className="container">
      <div style={{marginBottom:"20px", height:"120px", borderBottom:"4px solid rgba(0, 0, 0, 0.1)"}}>
        <header className="header">
          <button className="back-button" onClick={backPage}>←</button>
          <h1 className="title">Find a lunch companion</h1>
        </header>

        {/* イベント新規登録のボタン */}
        <Link style={{textDecoration: "none"}} to="/Eventregist">
          <div className='add-event-btn' style={{width:"140px", height:"50px", marginLeft:"200px",marginBottom:"30px",padding:"15px" , display:"flex"}}>
            <label style={{fontSize: "18px", marginRight:"10px"}}>add event</label>
            <i style={{paddingTop:"6px"}} class="fa-solid fa-circle-plus"></i>
          </div>
        </Link>
      </div>


      <ul className="results-list">
     
      {/*       
      <li className="result-item" 
      onClick={this.handleCardClick} 
      key={index}
      > */}
        {/* {events.map((event,index)=>(
          <ResultCard  index={index} name={event.name} meetLocation="north1" time={event.time} url="" />
        )
      )} */}

        {events.map((event, index) => (
          <ResultCard  index={index} name={event.event_name} meetLocation={event.where_to_meet} time={event.time} userId={events.user_id} foodReference={event.food_preference} url=""/>
        ))}
     
      </ul>
      
    </div>
  );
};

export default LunchCompanion;
