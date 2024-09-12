// Profile.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const url = "http://127.0.0.1:8000/profile";

function Profile() {
  const { user_id } = useParams();  // URLからuser_idを取得
    console.log(user_id)
  const [userData, setUserData] = useState(null);  // ユーザーデータの状態を管理

  async function fetchUserData() {
    try {
      const response = await axios.get(`http://127.0.0.1:8000/profile/${user_id}`);
      setUserData(response.data);
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  }
  fetchUserData();


  return (
    <div>
      <h1>Profile Page</h1>
      {userData ? (
        <div>
          <p>User ID: {user_id}</p>
          <p>名前: {userData.name}</p>
          <p>属性: {userData.type}</p>
          <p>国籍: {userData.natinality}</p>
          <p>大学: {userData.university}</p>
          <p>学部: {userData.major}</p>
          <p>性別: {userData.gender}</p>
        </div>
      ) : (
        <p>No user found for ID: {user_id}</p>
      )}
    </div>
  );
}

export default Profile;