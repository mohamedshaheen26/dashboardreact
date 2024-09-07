import React from 'react'

import "./plans.css"

const Plans = () => {
  return (
    <>
    <h1 className="Special-heading p-relative">Plans</h1>
        <div className="plans m-20 gap-20 d-grid">
          <div className="box p-20 bg-white">
            <div className="bg-green c-white txt-c p-20 border-white outline-green">
              <h2 className="m-0">Free</h2>
              <p className="m-0 mt-10 p-relative">
                <i className="fa-solid fa-dollar-sign fs-20 p-absolute"></i>
                0.00
              </p>
            </div>
            <ul>
              <li className="pt-15 pb-15 d-flex align-c fs-15 border-b">
                <i className="fa-solid fa-check fa-fw fs-18 mr-5 c-green"></i>
                Access All Text Lessons
                <i className="fa-solid fa-circle-info help green"></i>
              </li>
              <li className="pt-15 pb-15 d-flex align-c fs-15 border-b">
                <i className="fa-solid fa-check fa-fw fs-18 mr-5 c-green"></i>
                Access All Videos Lessons
                <i className="fa-solid fa-circle-info help green"></i>
              </li>
              <li className="pt-15 pb-15 d-flex align-c fs-15 border-b">
                <i className="fa-solid fa-check fa-fw fs-18 mr-5 c-green"></i>
                Appear On Leaderboard
                <i className="fa-solid fa-circle-info help green"></i>
              </li>
              <li className="pt-15 pb-15 d-flex align-c fs-15 border-b">
                <i className="fa-solid fa-xmark fa-fw fs-18 mr-5 c-red"></i>
                Browse Content Without Ads
                <i className="fa-solid fa-circle-info help green"></i>
              </li>
              <li className="pt-15 pb-15 d-flex align-c fs-15 border-b">
                <i className="fa-solid fa-xmark fa-fw fs-18 mr-5 c-red"></i>
                Access All Assignments
                <i className="fa-solid fa-circle-info help green"></i>
              </li>
              <li className="pt-15 pb-15 d-flex align-c fs-15 border-b">
                <i className="fa-solid fa-xmark fa-fw fs-18 mr-5 c-red"></i>
                Get Daily Prizes
                <i className="fa-solid fa-circle-info help green"></i>
              </li>
              <li className="pt-15 pb-15 d-flex align-c fs-15 border-b">
                <i className="fa-solid fa-xmark fa-fw fs-18 mr-5 c-red"></i>
                Earn Certificate
                <i className="fa-solid fa-circle-info help green"></i>
              </li>
              <li className="pt-15 pb-15 d-flex align-c fs-15 border-b">
                <i className="fa-solid fa-xmark fa-fw fs-18 mr-5 c-red"></i>
                1 GB Space For Hosting Files
                <i className="fa-solid fa-circle-info help green"></i>
              </li>
              <li className="pt-15 pb-15 d-flex align-c fs-15 border-b">
                <i className="fa-solid fa-xmark fa-fw fs-18 mr-5 c-red"></i>
                Access Badge System
                <i className="fa-solid fa-circle-info help green"></i>
              </li>
            </ul>
            <a className="btn-shape bg-green c-white" href="#">Join</a>
          </div>
          <div className="box p-20 bg-white">
            <div className="bg-blue c-white txt-c p-20 border-white outline-blue">
              <h2 className="m-0">Basic</h2>
              <p className="m-0 mt-10 p-relative">
                <i className="fa-solid fa-dollar-sign fs-20 p-absolute"></i>
                7.99
              </p>
            </div>
            <ul>
              <li className="pt-15 pb-15 d-flex align-c fs-15 border-b">
                <i className="fa-solid fa-check fa-fw fs-18 mr-5 c-green"></i>
                Access All Text Lessons
                <i className="fa-solid fa-circle-info help blue"></i>
              </li>
              <li className="pt-15 pb-15 d-flex align-c fs-15 border-b">
                <i className="fa-solid fa-check fa-fw fs-18 mr-5 c-green"></i>
                Access All Videos Lessons
                <i className="fa-solid fa-circle-info help blue"></i>
              </li>
              <li className="pt-15 pb-15 d-flex align-c fs-15 border-b">
                <i className="fa-solid fa-check fa-fw fs-18 mr-5 c-green"></i>
                Appear On Leaderboard
                <i className="fa-solid fa-circle-info help blue"></i>
              </li>
              <li className="pt-15 pb-15 d-flex align-c fs-15 border-b">
                <i className="fa-solid fa-check fa-fw fs-18 mr-5 c-green"></i>
                Browse Content Without Ads
                <i className="fa-solid fa-circle-info help blue"></i>
              </li>
              <li className="pt-15 pb-15 d-flex align-c fs-15 border-b">
                <i className="fa-solid fa-check fa-fw fs-18 mr-5 c-green"></i>
                Access All Assignments
                <i className="fa-solid fa-circle-info help blue"></i>
              </li>
              <li className="pt-15 pb-15 d-flex align-c fs-15 border-b">
                <i className="fa-solid fa-check fa-fw fs-18 mr-5 c-green"></i>
                Get Daily Prizes
                <i className="fa-solid fa-circle-info help blue"></i>
              </li>
              <li className="pt-15 pb-15 d-flex align-c fs-15 border-b">
                <i className="fa-solid fa-check fa-fw fs-18 mr-5 c-green"></i>
                Earn Certificate
                <i className="fa-solid fa-circle-info help blue"></i>
              </li>
              <li className="pt-15 pb-15 d-flex align-c fs-15 border-b">
                <i className="fa-solid fa-xmark fa-fw fs-18 mr-5 c-red"></i>
                1 GB Space For Hosting Files
                <i className="fa-solid fa-circle-info help blue"></i>
              </li>
              <li className="pt-15 pb-15 d-flex align-c fs-15 border-b">
                <i className="fa-solid fa-xmark fa-fw fs-18 mr-5 c-red"></i>
                Access Badge System
                <i className="fa-solid fa-circle-info help blue"></i>
              </li>
            </ul>
            <a className="btn-shape bg-blue c-white" href="#">Join</a>
          </div>
          <div className="box p-20 bg-white">
            <div
              className="bg-orange c-white txt-c p-20 border-white outline-orange"
            >
              <h2 className="m-0">Premium</h2>
              <p className="m-0 mt-10 p-relative">
                <i className="fa-solid fa-dollar-sign fs-20 p-absolute"></i>
                19.99
              </p>
            </div>
            <ul>
              <li className="pt-15 pb-15 d-flex align-c fs-15 border-b">
                <i className="fa-solid fa-check fa-fw fs-18 mr-5 c-green"></i>
                Access All Text Lessons
                <i className="fa-solid fa-circle-info help orange"></i>
              </li>
              <li className="pt-15 pb-15 d-flex align-c fs-15 border-b">
                <i className="fa-solid fa-check fa-fw fs-18 mr-5 c-green"></i>
                Access All Videos Lessons
                <i className="fa-solid fa-circle-info help orange"></i>
              </li>
              <li className="pt-15 pb-15 d-flex align-c fs-15 border-b">
                <i className="fa-solid fa-check fa-fw fs-18 mr-5 c-green"></i>
                Appear On Leaderboard
                <i className="fa-solid fa-circle-info help orange"></i>
              </li>
              <li className="pt-15 pb-15 d-flex align-c fs-15 border-b">
                <i className="fa-solid fa-check fa-fw fs-18 mr-5 c-green"></i>
                Browse Content Without Ads
                <i className="fa-solid fa-circle-info help orange"></i>
              </li>
              <li className="pt-15 pb-15 d-flex align-c fs-15 border-b">
                <i className="fa-solid fa-check fa-fw fs-18 mr-5 c-green"></i>
                Access All Assignments
                <i className="fa-solid fa-circle-info help orange"></i>
              </li>
              <li className="pt-15 pb-15 d-flex align-c fs-15 border-b">
                <i className="fa-solid fa-check fa-fw fs-18 mr-5 c-green"></i>
                Get Daily Prizes
                <i className="fa-solid fa-circle-info help orange"></i>
              </li>
              <li className="pt-15 pb-15 d-flex align-c fs-15 border-b">
                <i className="fa-solid fa-check fa-fw fs-18 mr-5 c-green"></i>
                Earn Certificate
                <i className="fa-solid fa-circle-info help orange"></i>
              </li>
              <li className="pt-15 pb-15 d-flex align-c fs-15 border-b">
                <i className="fa-solid fa-check fa-fw fs-18 mr-5 c-green"></i>
                1 GB Space For Hosting Files
                <i className="fa-solid fa-circle-info help orange"></i>
              </li>
              <li className="pt-15 pb-15 d-flex align-c fs-15 border-b">
                <i className="fa-solid fa-check fa-fw fs-18 mr-5 c-green"></i>
                Access Badge System
                <i className="fa-solid fa-circle-info help orange"></i>
              </li>
            </ul>
            <span className="c-gray txt-c d-block">This Is Your Current Plan</span>
          </div>
        </div>
    </>
  )
}

export default Plans