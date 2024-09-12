import React, { useState } from 'react';
import axios from "axios";
import { Form, Button } from 'react-bootstrap';
const url = "http://127.0.0.1:8000/profile";

function InputProfile() { 
	
  function getRandomString(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      result += characters[randomIndex];
    }
    
    return result;
  }


  const [selectedOption, setSelectedOption] = useState('');
  const [userProfile, setUserProfile] = useState({
    'user_id' : getRandomString(5),
    'name': "",
    'type': "",
    'nationality': "",    
    'university': "",
    'major': "",
    'gender': ""
  });

  // 入力が変更されたときに状態を更新する関数
  const handleProfileInput = (event) => {
    const { name, value } = event.target;
    setUserProfile(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  // ラジオボタンの変更を処理する関数
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
    setUserProfile(prevState => ({
      ...prevState,
      type: event.target.value
    }));
  };

  // フォームの送信処理
  const submitProfile = (event) => {
    event.preventDefault(); // デフォルトの送信動作を防ぐ
    // 現在のuserProfileの状態をコンソールに表示
    console.log(userProfile);
    //API呼び出し、post, put profile
    try {
      // axios.postでデータを送信
      const response =  axios.post(url, userProfile, {
        headers: {
          'Content-Type': 'application/json'  // JSON形式でデータを送信するためのヘッダー
        }
      });

      console.log('Response:', response.data);  // サーバーからのレスポンスをログに表示
    } catch (error) {
      console.error('Error posting data:', error);
    }

  };


  return (
    <div>
      <form className='Profile' onSubmit={submitProfile}>
        <h1 style={{padding:"20px 20px 0px 20px"}}>プロフィール登録</h1>
        <hr/>
        <ul style={{ textAlign: "center", marginBottom: "30px" }}>
          <li style={{ display: "flex" }}>
            <label className='form-label FormLabel'>名前: </label>
            <input
              type="text"
              name="name"
              value={userProfile.userName}
              onChange={handleProfileInput}
              className='form-control'
              style={{ height: "30px", width: "200px" }}
              placeholder='ドコモ太郎'
            />
          </li>
          <li style={{ display: "flex" }}>
            <label className='FormLabel'>属性: </label>
            <div style={{ marginRight: "20px" }}>
              <label>
                <input
                  className='form-check-input'
                  type="radio"
                  value="international"
                  checked={selectedOption === 'international'}
                  onChange={handleOptionChange}
                />
                留学生
              </label>
            </div>
            <div>
              <label>
                <input
                  type="radio"
                  className='form-check-input'
                  value="local"
                  checked={selectedOption === 'local'}
                  onChange={handleOptionChange}
                />
                留学生でない
              </label>
            </div>
          </li>
          <li style={{ display: "flex" }}>
            <label className='FormLabel'>性別: </label>
            <input
              type="text"
              name="gender"
              value={userProfile.gender}
              onChange={handleProfileInput}
              className='form-control'
              style={{ height: "30px", width: "200px" }}
              placeholder='男'
            />
          </li>
          <li style={{ display: "flex" }}>
            <label className='FormLabel'>国籍: </label>
            <input
              type="text"
              name="nationality"
              value={userProfile.nationality}
              onChange={handleProfileInput}
              className='form-control'
              style={{ height: "30px", width: "200px" }}
              placeholder='日本'
            />
          </li>
          <li style={{ display: "flex" }}>
            <label className='FormLabel'>大学: </label>
            <input
              type="text"
              name="university"
              value={userProfile.university}
              onChange={handleProfileInput}
              className='form-control'
              style={{ height: "30px", width: "200px" }}
              placeholder='ドコモ大学'
            />
          </li>
          <li style={{ display: "flex" }}>
            <label className='FormLabel'>学部: </label>
            <input
              type="text"
              name="major"
              value={userProfile.major}
              onChange={handleProfileInput}
              className='form-control'
              style={{ height: "30px", width: "200px" }}
              placeholder='通信学部'
            />
          </li>
        </ul>
        <button type="submit" className="btn btn-primary">プロフィールを登録</button>
      </form>
    </div>
  );
}

export default InputProfile;
