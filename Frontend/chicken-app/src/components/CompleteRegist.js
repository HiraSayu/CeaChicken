import React from 'react'
import '../App.css';

const CompleteRegist = () => {
  function redirectToURL() {
    window.location.href = '/LunchCompanion/university/local'; // 遷移したいURLを指定
  }
  return (
    <div className='smartphone-frame' style={{width:"300px"}}>
      <h3 style={{marginTop:"180px"}}>Completed!</h3>
      <button  className="btn btn-primary" onClick={redirectToURL}  >イベント一覧へ</button>
    </div>
  )
}

export default CompleteRegist
