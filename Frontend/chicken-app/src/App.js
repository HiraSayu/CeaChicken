import './App.css';
import Home from './components/home';
import RegisterProfile from './components/InputProfile2';
import YourProfile  from './components/YourProfile';
import { BrowserRouter as Router, Route, Link, Routes, useNavigate  } from 'react-router-dom';

import {FormProvider} from './contexts';

import LunchCompanion from './LunchCompanion';
import EventRegister from './EventRegister';

function App() {
       return(
        <div className="App">
          <FormProvider>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/register_profile" element={<RegisterProfile />} />
                    <Route path="/your_profile" element={<YourProfile />} />

                    <Route path="/event" element={<LunchCompanion />} />
                    <Route path="/Eventregist" element={<EventRegister />} />
                   
                    {/* <Home />
                    <Complete /> */}
                </Routes>
            </Router>
          </FormProvider>
        </div>

       );

}

export default App;
