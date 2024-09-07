import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

import Header from "./header/header";
import Home from "./home/home";
import Sidebar from "./sidebar/sidebar";
import Settings from "./settings/settings";
import Profile from "./profile/profile";
import Projects from "./projects/projects";
import Courses from "./courses/courses";
import Friends from "./friends/friends";
import Files from "./files/files";
import Plans from "./plans/plans";
import Drafts from "./drafts/drafts";

function App() {

  const [darkMode, setDarkMode] = useState(false);

  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // Save theme preference in localStorage
  useEffect(() => {
    const savedTheme = window.localStorage.getItem('darkMode');
    if (savedTheme) {
      setDarkMode(JSON.parse(savedTheme));
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  return (
    <div className={`page d-flex ${darkMode ? 'dark-mode' : ''}`} id='page'>
      <BrowserRouter>
        <Sidebar />
        <div className='content-body w-full'>
          <Header toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
          <Routes>
            <Route index element={<Home />} />
            <Route path='/settings' element={<Settings />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/courses' element={<Courses />} />
            <Route path='/friends' element={<Friends />} />
            <Route path='/files' element={<Files />} />
            <Route path='/plans' element={<Plans />} />
            <Route path='/drafts' element={<Drafts />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
