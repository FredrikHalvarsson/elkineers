import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Projects from './Pages/projects';
import Home from './Pages/Home.js';
import People from './Pages/people.js';
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
            <Route path="" element={<Home/>} />
            <Route path="elkineers" element={<Home/>} />
            <Route path="projects" element={<Projects/>} />
            <Route path="time-reports" element={<Timereports/>} />
            <Route path="people" element={<People/>} />
          </Routes>
        </main>
        <Footer/>
        </div>
      </div>
    </Router>
  );
}