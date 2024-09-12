// import React, { useState } from 'react';
// import { Form, Button, Container, Row, Col } from 'react-bootstrap';
// // name: str
// //     type: str
// //     nationality: str
// //     university: str
// //     major : str
// //     gender : str 

// function InputProfile() {
//   const [selectedOption, setSelectedOption] = useState('');
//   const [userProfile, setUserProfile] = useState({
//         userName: "",
//         isInternationalStudent: "",
//         gender: "",
//         nationality: "",
//         university: "",
//         major: ""
//   })

// //   const handleOptionChange = (event) => {
// //     setSelectedOption(event.target.value);
// //   };

//   const handleProfileInput = (event) =>{
//     setUserProfile(event.target.value);
//   }

//   function submitProfile(){
//     //送信ボタンを押したときに入力データを抽出
//     userProfile = {
//         userName: "",
//         isInternationalStudent: "",
//         gender: "",
//         nationality: "",
//         university: "",
//         major: ""
//     }
//     let userProfile.userName = 



    
//   }
  
//   return(
//     <div>
//         <form className='Profile'>
//             <h1>プロフィール登録</h1>
//             <hr/>
//             <ul style={{textAlign:"center", marginBottom:"30px"}}>
//                 <li style={{display:"flex"}}>
//                     <label className='form-label FormLabel'>名前: </label>
//                     <input type="text" className='form-control' style={{height:"30px", width:"200px"}}></input>
//                 </li>
//                 <li style={{display:"flex"}}>
//                 <label className='FormLabel'>属性: </label>
//                     <div style={{marginRight:"20px"}}>
//                         <label><input className='form-check-input' type="radio" value="international" checked={selectedOption === 'international'} onChange={handleOptionChange}
//                         />留学生 </label>
//                     </div>
//                     <div>
//                         <label>
//                             <input
//                             type="radio" className='form-check-input'
//                             value="local"
//                             checked={selectedOption === 'local'}
//                             onChange={handleOptionChange}
//                             />
//                             留学生でない
//                         </label>
//                     </div>  
//                 </li>

//                 <li style={{display:"flex"}}>
//                     <label className='FormLabel'>性別: </label>
//                     <input type="text" className='form-control' style={{height:"30px", width:"200px"}}></input>
//                 </li>
//                 <li style={{display:"flex"}}>
//                     <label className='FormLabel'>国籍: </label>
//                     <input type="text" className='form-control' style={{height:"30px", width:"200px"}}></input>
//                 </li>
//                 <li style={{display:"flex"}}>
//                     <label className='FormLabel'>大学: </label>
//                     <input type="text" className='form-control' style={{height:"30px", width:"200px"}}></input>
//                 </li>
//                 <li style={{display:"flex"}}>
//                     <label className='FormLabel'>学部: </label>	
//                     <input type="text" className='form-control' style={{height:"30px", width:"200px"}}></input>
//                 </li>
//             </ul>
//             <button onClick={submitProfile} type="button" className="btn btn-primary">プロフィールを登録</button>
//         </form>
//     </div>
//   );
// }  



// export default InputProfile;
