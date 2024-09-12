import React, { useState } from 'react';
import axios from "axios";
import { useParams } from 'react-router-dom';
const url = "http://127.0.0.1:8000/profile";

const YourProfile = () => {
    const { id } = useParams();
    console.log(id)
    const [Profile, setProfile] = useState();
    const GetData = (user_id) => {
        url += user_id
		axios.get(url).then((res) => {
			setProfile(res.data);
		});
	};
    const Profile_ = {
        'user_id' : "abd",
        'name': "docomo",
        'type': "International",
        'nationality': "japan",    
        'university': "domoco",
        'major': "docomo",
        'gender': "men"
      }

  return (
    <div>
      <h1>あなたのプロフィール</h1>
      <label>名前</label>
      <p>{Profile_.name}</p>
    </div>
  )
}

export default YourProfile
