import React, { useState } from 'react';
import axios from "axios";
import { Link } from "react-router-dom"
import { Form, Button } from 'react-bootstrap';
const url = "http://127.0.0.1:8000/profile";

function RegisterProfile() { 
	
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
    
    //APIの部分
    async function sendData() {
      try {
        // 非同期処理を待つ
        const response = await axios.post(url, userProfile, {
          headers: {
            'Content-Type': 'application/json'
          }
        });

        // レスポンスデータを変数に格納
        const responseData = response.data;
        console.log(responseData);  // 格納されたデータを表示

        return responseData;  // データを関数の戻り値として返す
      } catch (error) {
        console.error('Error:', error);
        // エラーが発生した場合、必要に応じてエラーを返すこともできます
        throw error;  // または return null; としても良い
      }
    }

    // 非同期関数を呼び出し、結果を表示する
    async function main() {
      try {
        const result = await sendData();  // 非同期処理の結果を待つ
        console.log("hei", result);  // 変数に格納されたデータを利用
        console.log(result.message)
      } catch (error) {
        console.error('Error in main:', error);
      }
    }

    main();  // main 関数を呼び出して処理を開始
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
        <button type="button" className="btn btn-primary"><Link to="/your_profile">自分のプロフィールを見る</Link></button>
        
      </form>
    </div>
  );
}

export default RegisterProfile;
