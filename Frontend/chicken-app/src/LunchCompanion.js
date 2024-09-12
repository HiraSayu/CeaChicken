// LunchCompanion.js
import './Lunch.css';
import React from "react";
import { useEffect, useState, useContext } from 'react';
import axios from 'axios'; // axiosをインポート
import {TypeContext} from './contexts';

import ResultCard from './resultcard';


const LunchCompanion = () => {

  const [events, setEvents] = useState([]); // イベントのデータを管理するstate
  const typeContext = useContext(TypeContext);
  
  const url = "http://localhost:8000/event/university/local";

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

      <ul className="results-list">
     
      {/*       
      <li className="result-item" 
      onClick={this.handleCardClick} 
      key={index}
      > */}
        {events.map((event,index)=>(
          <ResultCard  index={index} name={event.event_name} meetLocation={event.where_to_meet}
           time={event.time} food={event.food_preference} url=" "/>
        )
      )}
     

      {/*       
      <ResultCard  name="nina" meetLocation="north1"/> */}

      </ul>
    </div>
  );
};

export default LunchCompanion;
