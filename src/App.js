import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Projects from './Pages/projects';
import Page4 from './Pages/page4.js';
import Page5 from './Pages/page5.js';
import Page3 from './Pages/page3.js';
import TimeReports from './Pages/timeReports.js'; 
import SideBar from './components/SideBar/SideBar.js';

export default function App() {
  return (
    <Router>
      <div>
      <header>
        <SideBar />
      </header>
      <main>
      <Routes>
        <Route path="/" element={<Projects/>} />
        <Route path="projects" element={<Projects/>} />
        <Route path="time-reports" element={<TimeReports/>} />
        <Route path="page3" element={<Page3/>} />
        <Route path="page4" element={<Page4/>} />
        <Route path="page5" element={<Page5/>} />
      </Routes>
      </main>
      </div>
    </Router>
  );
}

// ReactDOM.render(<App />, document.getElementById('root'));


