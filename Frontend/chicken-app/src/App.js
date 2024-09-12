import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';

import LunchCompanion from './LunchCompanion';
import EventRegister from './EventRegister';

function App() {
  return (
    
    <div className="App">

    <Router>
          <Routes>
              <Route path="/profile" element={<LunchCompanion />} />
              <Route path="/Eventregist" element={<EventRegister />} />
              
            </Routes>
        
        </Router>

      <header className="App-header">
       
      </header>
    </div>
  );
}

export default App;
