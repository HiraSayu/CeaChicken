import React, { useState } from 'react';
import axios from "axios";
import { useNavigate, Link } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import YourProfile from './YourProfile';

const url = "http://127.0.0.1:8000/profile";

function RegisterProfile() {
  const navigate = useNavigate();  // useNavigateフックを使用
  const [selectedOption, setSelectedOption] = useState('');
  const [userProfile, setUserProfile] = useState({
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
  const submitProfile = async (event) => {
    event.preventDefault(); // デフォルトの送信動作を防ぐ
    console.log(userProfile); // 現在のuserProfileの状態をコンソールに表示

    //APIの部分
    try {
      const response = await axios.post(url, userProfile, {
        headers: {
          'Content-Type': 'application/json'
        }
      });

      // レスポンスデータを変数に格納
      const responseData = response.data;
      console.log(responseData);  // データを表示
      
      // 非同期処理が完了したら、次の画面に遷移
      // navigate(`/LunchCompanion/${responseData.user_id}`);  // 'next-page' 画面に遷移
      navigate(`/LunchCompanion/university/${userProfile.type}`);  // 'next-page' 画面に遷移
    } catch (error) {
      console.error('Error:', error);
      // エラーハンドリング、例えばエラーページへの遷移など
      navigate('/error-page');
    }
  };

    
    
    
    return (
      <div className='smartphone-frame'>
        <form className='Profile screen' onSubmit={submitProfile}>
          <h1 style={{padding:"20px 20px 0px 20px"}}>Register Profile</h1>
          <hr/>
          <ul style={{ textAlign: "center", marginBottom: "30px", }}>
            <li style={{ display: "flex"}}>
              <label className='form-label FormLabel fw-bolder' style={{marginRight:"57px"}}>name: </label>
              <input
                type="text"
                name="name"
                value={userProfile.userName}
                onChange={handleProfileInput}
                className='form-control'
                style={{ height: "30px", width: "200px" }}
                placeholder='docomo taro'
              />
            </li>
            <li style={{ display: "flex" }}>
              <label className='FormLabel fw-bolder'>type: </label>
              <div style={{ marginRight: "20px" }}>
                <label className='fw-bolder'>
                  <input
                    className='form-check-input'
                    type="radio"
                    value="international"
                    checked={selectedOption === 'international'}
                    onChange={handleOptionChange}
                    
                  />
                  international
                </label>
              </div>
              <div>
                <label className='fw-bolder'>
                  <input
                    type="radio"
                    className='form-check-input'
                    value="local"
                    checked={selectedOption === 'local'}
                    onChange={handleOptionChange}
                  />
                  local
                </label>
              </div>
            </li>
            <li style={{ display: "flex" }}>
              <label className='FormLabel fw-bolder' style={{marginRight:"45px"}}>gender: </label>
              <input
                type="text"
                name="gender"
                value={userProfile.gender}
                onChange={handleProfileInput}
                className='form-control'
                style={{ height: "30px", width: "200px" }}
                placeholder='men'
              />
            </li>
            <li style={{ display: "flex" }}>
              <label className='FormLabel fw-bolder'>nationality: </label>
              <input
                type="text"
                name="nationality"
                value={userProfile.nationality}
                onChange={handleProfileInput}
                className='form-control'
                style={{ height: "30px", width: "200px" }}
                placeholder='Japan'
              />
            </li>
            <li style={{ display: "flex" }}>
              <label className='FormLabel fw-bolder' style={{marginRight:"28px"}}>university: </label>
              <input
                type="text"
                name="university"
                value={userProfile.university}
                onChange={handleProfileInput}
                className='form-control'
                style={{ height: "30px", width: "200px" }}
                placeholder='docomo university'
              />
            </li>
            <li style={{ display: "flex" }}>
              <label className='FormLabel fw-bolder' style={{marginRight:"55px"}}>major: </label>
              <input
                type="text"
                name="major"
                value={userProfile.major}
                onChange={handleProfileInput}
                className='form-control'
                style={{ height: "30px", width: "200px" }}
                placeholder='computer science'
              />
            </li>
          </ul>
          <button type="submit" className="btn btn-primary">Submit</button>
          {/* <button type="button" className="btn btn-primary"><Link to="/Eventregist">イベントの登録</Link></button>
          <button type="button" className="btn btn-primary"><Link to="/LunchCompanion">一覧表示</Link></button> */}
          
        </form>
    </div>
  );
}

export default RegisterProfile;
