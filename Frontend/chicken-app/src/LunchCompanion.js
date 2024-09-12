// LunchCompanion.js
import './Lunch.css';
import React from "react";
import { useEffect, useState } from 'react';
import axios from 'axios'; // axiosをインポート
import { useNavigate, Link } from 'react-router-dom';

import ResultCard from './resultcard';


const LunchCompanion = () => {

  const [events, setEvents] = useState([]); // イベントのデータを管理するstate
  // const url = "/event/{university_id}/{type}";
  // url = "/event/{type}";
 const url = "http://127.0.0.1:8000/event/university/international";
  

  const GetData = () => {
		axios.get(url).then((res) => {
			setEvents(res.data);
		});
	};

  useEffect(() => { //初回レンダリング時GetDataを動かす
    GetData();
  }, []); 

//   handleCardClick = () => { //提案者がクリックされた時の処置
//     // URLをpropsから取得し、GETリクエストを送信
    
//   };

  return (
    <div className="container">
      <header className="header">
        <button className="back-button">←</button>
        <h1 className="title">Find a lunch companion</h1>
      </header>
      <Link style={{textDecoration: "none"}} to="/Eventregist">
        <div className='add-event-btn' style={{width:"140px", height:"50px", marginLeft:"200px",marginBottom:"30px",padding:"15px" , display:"flex"}}>
          <label style={{fontSize: "18px", marginRight:"10px"}}>add event</label>
          <i style={{paddingTop:"6px"}} class="fa-solid fa-circle-plus"></i>
        </div>
      </Link>


      <ul className="results-list">
     
      {/*       
      <li className="result-item" 
      onClick={this.handleCardClick} 
      key={index}
      > */}
        {events.map((event,index)=>(
          <ResultCard  index={index} name={event.name} meetLocation="north1" time={event.time} url=" "/>
        )
      )}
     

      {/*       
      <ResultCard  name="nina" meetLocation="north1"/> */}

      </ul>
      
    </div>
  );
};

export default LunchCompanion;
