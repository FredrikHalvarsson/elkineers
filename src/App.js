import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Projects from './Pages/projects';
import ActiveProjects from './Pages/ActiveProjects.js';
import UserProjects from './Pages/UserProjects.js';
import Home from './Pages/Home.js';
import Timereports from './Pages/timeReports.js';
import SideBar from './components/SideBar/SideBar.js';
import Footer from './components/Footer/Footer.js';
import Header from './components/Header/Header.js';

export default function App() {
  return (
    <Router>
      <div>
      <Header/>
      <aside>
        <SideBar />
      </aside>
      <main>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="home" element={<Home/>} />
        <Route path="projects" element={<Projects/>} />
        <Route path="time-reports" element={<Timereports/>} />
        <Route path="active-projects" element={<ActiveProjects/>} />
        <Route path="user-projects" element={<UserProjects/>} />
      </Routes>
      </main>
      <Footer/>
      </div>
    </Router>
  );
}

// ReactDOM.render(<App />, document.getElementById('root'));


