import React from 'react'

import { Link } from 'react-router-dom';

import './sidebar.css'


const Sidebar = ({title, activePath}) => {

  const sidebarItems = [
    { path: '/', name: 'Dashboard', icon: "fa-regular fa-chart-bar" },
    { path: '/settings', name: 'Settings', icon: "fa-solid fa-gear" },
    { path: '/profile', name: 'Profile', icon: "fa-regular fa-user" },
    { path: '/projects', name: 'Projects', icon: "fa-solid fa-diagram-project" },
    { path: '/courses', name: 'Courses', icon: "fa-solid fa-graduation-cap" },
    { path: '/friends', name: 'Friends', icon: "fa-regular fa-circle-user" },
    { path: '/files', name: 'Files', icon: "fa-regular fa-file" },
    { path: '/plans', name: 'Plans', icon: "fa-regular fa-credit-card" },
    { path: '/drafts', name: 'Drafts', icon: "fa-brands fa-firstdraft" },
  ];


  return (
    <aside className="bg-white p-relative p-20">
      <h3 className="p-relative txt-c mt-0">{title}</h3>
      <ul>
        {sidebarItems.map((item) => (
          <li key={item.path}>
            <Link
                className={`d-flex align-c fs-14 c-black rad-6 p-10 ${activePath === item.path ? 'active' : ''}`}
                to={item.path}
            >
              <i className={`${item.icon} fa-fw`}></i>
              <span className="hide-mobile">{item.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  )
}

export default Sidebar