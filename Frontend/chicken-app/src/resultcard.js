import * as React from 'react';

// import "./ReasultCardStyle.css";
import "./LunchCompanion.css"
import axios from 'axios'; // axiosをインポート
import { useNavigate} from 'react-router-dom';



export default class ResultCard extends React.Component{
  render(){
    function redirectToURL() {
      window.location.href = '/Complete_Join'; // 遷移したいURLを指定
    }
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
            </div>
              <button  className="btn btn-primary" onClick={redirectToURL}  >Join</button>
      </li>
           
     

    </div>
  );

}
}