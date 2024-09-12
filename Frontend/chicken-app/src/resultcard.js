import * as React from 'react';

import "./ReasultCardStyle.css";
import axios from 'axios'; // axiosをインポート



export default class ResultCard extends React.Component{

  render(){
  return(
    <div class="ResultCard">
      
      <li className="result-item" key={this.props.index}>
            <img
              className="profileimg"
              src={`https://via.placeholder.com/48?text=N`}
              alt={`${this.props.name}`}
            />
            <div className="info">
              <p className="eventName">{this.props.name}</p>
              <p className="meetLocation">{this.props.meetLocation}</p>
              <p className="time">{this.props.time}</p>
              <p className="food_preference">{this.props.food}</p>
        
            </div>
      </li>
           
     

    </div>
  );

}
}