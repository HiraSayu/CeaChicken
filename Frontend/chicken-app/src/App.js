import './App.css';
import Home from './components/Home';
import RegisterProfile from './components/InputProfile2';
import YourProfile  from './components/YourProfile';
import { BrowserRouter as Router, Route, Link, Routes, useNavigate  } from 'react-router-dom';

function App() {
       return(
        <div className="App">
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/register_profile" element={<RegisterProfile />} />
                    <Route path="/your_profile" element={<YourProfile />} />

                    {/* <Route path="/profile" element={<LunchCompanion />} />
                    <Route path="/Eventregist" element={<EventRegister />} /> */}
                    {/* <Route path="/Eventregist" element={<EventRegister />} /> */}
                    {/* <Home />
                    <Complete /> */}
                </Routes>
            </Router>

        </div>

       );
}

export default App;
