import React from 'react'

import './header.css'

const Header = ({ toggleDarkMode, darkMode }) => {
  return (
    <header className="between-flex p-15 bg-white">
          <div className="search p-relative">
            <input
              className="p-10 border-ccc rad-10"
              type="search"
              placeholder="Type A Keyword"
            />
          </div>
          <div className="icons d-flex align-c">
            <button onClick={toggleDarkMode}>
              {darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            </button>
            <span className="p-relative notification">
              <i className="fa-regular fa-bell fa-lg pointer"></i>
            </span>
            <a href="profile.html">
              <img className="pointer" src="assets/imgs/avatar.png" alt="" />
            </a>
          </div>
        </header>
  )
}

export default Header