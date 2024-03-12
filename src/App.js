import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Projects from './Pages/projects';
import Page4 from './Pages/page4.js';
import Page5 from './Pages/page5.js';
import Home from './Pages/Home.js';
import TimeReports from './Pages/timeReports.js'; 
import SideBar from './components/SideBar/SideBar.js';
import Login from './components/Login.js';
import Footer from './components/Footer.js';
import Header from './components/Header.js';

export default function App() {
  return (
    <Router>
      <div>
        <SideBar />
        <clerk style={{
            display: 'flex',
            justifyContent: 'end',
            alignItems: 'center',
            margin: '15px'
            }}>
          <Login/>
        </clerk>
        <Header/>
      <main>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="home" element={<Home/>} />
        <Route path="projects" element={<Projects/>} />
        <Route path="time-reports" element={<TimeReports/>} />
        <Route path="page4" element={<Page4/>} />
        <Route path="page5" element={<Page5/>} />
      </Routes>
      </main>
      </div>
      <Footer/>
    </Router>
  );
}

// ReactDOM.render(<App />, document.getElementById('root'));


