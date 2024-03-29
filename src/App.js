import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Projects from './Pages/projects';
import Page4 from './Pages/Page4.js';
import UserProjects from './Pages/Page5.js';
import Home from './Pages/Home.js';
import Page5 from './Pages/page5copy.js';
import Timereports from './Pages/timereports.js';
import SideBar from './components/SideBar/SideBar.js';
import Footer from './components/Footer/Footer.js';
import Header from './components/Header/Header.js';

export default function App() {
  return (
    <Router>
      <div className='router-container'>
          <SideBar />
        <div className='main-content'>
        <Header/>
        <main>
          <Routes>
            <Route path="elkineers" element={<Home/>} />
            <Route path="projects" element={<Projects/>} />
            <Route path="time-reports" element={<Timereports/>} />
            <Route path="page4" element={<Page4/>} />
            <Route path="page-5" element={<Page5/>} />
            <Route path="page5copy" element={<Page5/>} />
          </Routes>
        </main>
        <Footer/>
        </div>
      </div>
    </Router>
  );
}