import './App.css';
import EventDetail from './components/EventDetail';
import Home from './components/Home';
import RegisterProfile from './components/InputProfile2';
import Profile from './components/Profile';
import YourProfile  from './components/YourProfile';
import { BrowserRouter as Router, Route, Link, Routes, useNavigate  } from 'react-router-dom';




import LunchCompanion from './LunchCompanion';
import EventRegister from './EventRegister';
// import CompleteRegist from './components/CompleteRegist';
// import CompleteJoin from './components/CompleteJoin';

function App() {
       return(
        <div className="App">
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/register_profile" element={<RegisterProfile />} />
                    {/* :user_id は動的なパラメータ */}
                     <Route path="/profile/:user_id" element={<Profile />} />
                    <Route path="/your_profile" element={<YourProfile />} />
                    <Route path="/event_detail" element={<EventDetail />} />

                    <Route path="/profile" element={<LunchCompanion />} />
                    <Route path="/Eventregist" element={<EventRegister />} /> 
                    <Route path="/LunchCompanion/university/:type" element={<LunchCompanion />} /> 
                    {/* <Route path="/Complete_Regist" element={<CompleteRegist />} /> 
                    <Route path="/Complete_Join" element={<CompleteJoin />} />  */}

                     {/* <Home /> */}
                     {/* <Complete />  */}
                </Routes>
            </Router>

        </div>

       );

}

export default App;
