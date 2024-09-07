import React from 'react'

import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import './sidebar.css'


const Sidebar = () => {
  return (
    <aside className="bg-white p-relative p-20">
    <h3 className="p-relative txt-c mt-0">Dashboad</h3>
    <ul>
      <li>
        <Link
          className="active d-flex align-c fs-14 c-black rad-6 p-10"
          to="/"
        >
          <i className="fa-regular fa-chart-bar fa-fw"></i>
          <span className="hide-mobile">Dashboard</span>
        </Link>
      </li>
      <li>
        <Link
          className="d-flex align-c fs-14 c-black rad-6 p-10"
          to="/settings"
        >
          <i className="fa-solid fa-gear fa-fw"></i>
          <span className="hide-mobile">Settings</span>
        </Link>
      </li>
      <li>
        <Link
          className="d-flex align-c fs-14 c-black rad-6 p-10"
          to="profile"
        >
          <i className="fa-regular fa-user fa-fw"></i>
          <span className="hide-mobile">Profile</span>
        </Link>
      </li>
      <li>
        <Link
          className="d-flex align-c fs-14 c-black rad-6 p-10"
          to="/projects"
        >
          <i className="fa-solid fa-diagram-project fa-fw"></i>
          <span className="hide-mobile">Projects</span>
        </Link>
      </li>
      <li>
        <Link
          className="d-flex align-c fs-14 c-black rad-6 p-10"
          to="/courses"
        >
          <i className="fa-solid fa-graduation-cap fa-fw"></i>
          <span className="hide-mobile">Courses</span>
        </Link>
      </li>
      <li>
        <Link
          className="d-flex align-c fs-14 c-black rad-6 p-10"
          to="/friends"
        >
          <i className="fa-regular fa-circle-user fa-fw"></i>
          <span className="hide-mobile">Friends</span>
        </Link>
      </li>
      <li>
        <Link
          className="d-flex align-c fs-14 c-black rad-6 p-10"
          to="/files"
        >
          <i className="fa-regular fa-file fa-fw"></i>
          <span className="hide-mobile">Files</span>
        </Link>
      </li>
      <li>
        <Link
          className="d-flex align-c fs-14 c-black rad-6 p-10"
          to="/plans"
        >
          <i className="fa-regular fa-credit-card fa-fw"></i>
          <span className="hide-mobile">Plans</span>
        </Link>
      </li>
      <li>
        <Link
          className="d-flex align-c fs-14 c-black rad-6 p-10"
          to="/drafts"
        >
          <i className="fa-brands fa-firstdraft fa-fw"></i>
          <span className="hide-mobile">Darfts</span>
        </Link>
      </li>
    </ul>
  </aside>
  )
}

export default Sidebar