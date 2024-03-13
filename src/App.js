import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Projects from './Pages/projects';
import Page4 from './Pages/page4.js';
import Page5 from './Pages/page5.js';
import Home from './Pages/Home.js';
import Timereports from './Pages/Timereports.js';
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
        <Route path="page4" element={<Page4/>} />
        <Route path="page5" element={<Page5/>} />
      </Routes>
      </main>
      <Footer/>
      </div>
    </Router>
  );
}

// ReactDOM.render(<App />, document.getElementById('root'));


