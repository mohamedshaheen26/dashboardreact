import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

import './header.css';

const Header = ({ toggleDarkMode, darkMode }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const profileImgRef = useRef(null);

  // Handle click outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        !profileImgRef.current.contains(event.target)
      ) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleProfileClick = () => {
    setIsDropdownOpen(prevState => !prevState);
  };

  return (
    <header className='between-flex p-15 bg-white'>
      <div className='search p-relative'>
        <input
          className='p-10 border-ccc rad-10'
          type='search'
          placeholder='Type A Keyword'
        />
      </div>
      <div className='icons d-flex align-c'>
        <span>
          <label className="dark-toggler-container">
            <input type="checkbox" checked={darkMode} onChange={toggleDarkMode} />
            <svg viewBox="0 0 384 512" height="1em" xmlns="http://www.w3.org/2000/svg" className="moon">
              <path d="M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z"></path>
            </svg>
            <svg viewBox="0 0 512 512" height="1em" xmlns="http://www.w3.org/2000/svg" className="sun">
              <path d="M361.5 1.2c5 2.1 8.6 6.6 9.6 11.9L391 121l107.9 19.8c5.3 1 9.8 4.6 11.9 9.6s1.5 10.7-1.6 15.2L446.9 256l62.3 90.3c3.1 4.5 3.7 10.2 1.6 15.2s-6.6 8.6-11.9 9.6L391 391 371.1 498.9c-1 5.3-4.6 9.8-9.6 11.9s-10.7 1.5-15.2-1.6L256 446.9l-90.3 62.3c-4.5 3.1-10.2 3.7-15.2 1.6s-8.6-6.6-9.6-11.9L121 391 13.1 371.1c-5.3-1-9.8-4.6-11.9-9.6s-1.5-10.7 1.6-15.2L65.1 256 2.8 165.7c-3.1-4.5-3.7-10.2-1.6-15.2s6.6-8.6 11.9-9.6L121 121 140.9 13.1c1-5.3 4.6-9.8 9.6-11.9s10.7-1.5 15.2 1.6L256 65.1 346.3 2.8c4.5-3.1 10.2-3.7 15.2-1.6zM160 256a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zm224 0a128 128 0 1 0 -256 0 128 128 0 1 0 256 0z"></path>
            </svg>
          </label>
        </span>
        <span className='p-relative notification'>
          <i className='fa-regular fa-bell fa-lg pointer'></i>
        </span>
        <span className='user-account p-relative'>
          <img
            className='pointer profile-img'
            src='assets/imgs/avatar.png'
            alt='Profile'
            onClick={handleProfileClick}
            ref={profileImgRef}
          />
          {isDropdownOpen && (
            <div class="menu" ref={dropdownRef}>
              <span className='user-name'>
                <strong>Admin</strong>
              </span>
              <ul>
                <li>
                  <Link to='/profile'>
                    <i className='fas fa-user'></i>
                    <span>My profile</span>
                  </Link>
                </li>
                <li>
                  <Link to='/settings'>
                    <i className='fas fa-cog'></i>
                    <span>Account Settings</span>
                  </Link>
                </li>
                <li class="log-out">
                  <Link to="">
                    <i class="fas fa-sign-out-alt"></i>
                    <span>Logout</span>
                  </Link>
                </li>
              </ul>
            </div>   
          )}
        </span>
      </div>
    </header>
  );
};

export default Header;
