import React from 'react';
import { useLocation } from 'react-router-dom';
import Sidebar from './sidebar/sidebar';
import Header from './header/header';
import Home from './home/home';
import Settings from './settings/settings';
import Profile from './profile/profile';
import Projects from './projects/projects';
import Courses from './courses/courses';
import Friends from './friends/friends';
import Files from './files/files';
import Plans from './plans/plans';
import Drafts from './drafts/drafts';
import { Routes, Route } from 'react-router-dom';

const Layout = ({ toggleDarkMode, darkMode }) => {
  const location = useLocation();

  const getTitle = () => {
    const path = location.pathname;
    switch (path) {
      case "/":
        return "Dashboard";
      case "/settings":
        return "Settings";
      case "/profile":
        return "Profile";
      case "/projects":
        return "Projects";
      case "/courses":
        return "Courses";
      case "/friends":
        return "Friends";
      case "/files":
        return "Files";
      case "/plans":
        return "Plans";
      case "/drafts":
        return "Drafts";
      default:
        return "Dashboard";
    }
  };

  const title = getTitle();

  return (
    <>
      <Sidebar title={title} activePath={location.pathname}  />  
      <div className='content-body w-full'>
        <Header toggleDarkMode={toggleDarkMode} darkMode={darkMode} title={title} />
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
    </>
  );
};

export default Layout;
