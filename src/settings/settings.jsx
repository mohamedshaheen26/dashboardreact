import React from 'react'

import './settings.css'

const Settings = () => {
  return (
    <>
    <h1 className="Special-heading p-relative">Settings</h1>
        <div className="settings-page wrapper d-grid gap-20">
          <div className="site-control bg-white rad-10 p-20">
            <h2 className="mt-0 mb-10">Site Control</h2>
            <p className="fs-15 c-gray mt-0 mb-20">
              Control The Website If There Is Maintenance
            </p>
            <div className="between-flex mb-15">
              <div>
                <span className="d-block mb-5">Website Control</span>
                <p className="fs-13 c-gray mt-5">
                  Open/Close Website And Type The Reason
                </p>
              </div>
              <label>
                <input className="toggle-checkbox" type="checkbox" checked />
                <span className="toggle-switch d-block"></span>
              </label>
            </div>
            <textarea
              className="d-block w-full p-10 border-ccc rad-6"
              placeholder="Close Message content"
            ></textarea>
          </div>
          <div className="general-info bg-white rad-10 p-20">
            <h2 className="mt-0 mb-10">General Info</h2>
            <p className="mt-0 mb-20 c-gray fs-15">
              General InhtmlFormation About Your Account
            </p>
            <form action="" className="c-gray fs-14">
              <label>First Name</label>
              <input
                className="w-full p-10 rad-6 border-ccc mt-10 mb-15"
                type="text"
                placeholder="First Name"
              />
              <label>Last Name</label>
              <input
                className="w-full p-10 rad-6 border-ccc mt-10 mb-15"
                type="text"
                placeholder="Last Name"
              />
              <label>Email</label>
              <div className="w-full d-flex align-c">
                <input
                  className="flex-1 p-10 rad-6 border-ccc mt-10 mr-15 w-full"
                  type="text"
                  placeholder="o@nn.sa"
                  disabled
                />
                <a className="c-blue" href="#">Change</a>
              </div>
            </form>
          </div>
          <div className="Security-info bg-white rad-10 p-20">
            <h2 className="mt-0 mb-10">Security Info</h2>
            <p className="mt-0 mb-20 c-gray fs-15">
              Security InhtmlFormation About Your Account
            </p>
            <div className="security-row between-flex border-b pb-15">
              <div>
                <span className="d-block mt-10">Password</span>
                <p className="mt-5 c-gray fs-13">Last Change On 25/10/2021</p>
              </div>
              <a className="change btn-shape bg-blue c-white">Change</a>
            </div>
            <div className="security-row between-flex border-b pb-15">
              <div>
                <span className="d-block mt-10">Two-Factor Authentication</span>
                <p className="mt-5 c-gray fs-13">Enable/Disable The Feature</p>
              </div>
              <label>
                <input className="toggle-checkbox" type="checkbox" checked />
                <span className="toggle-switch d-block"></span>
              </label>
            </div>
            <div className="security-row between-flex">
              <div>
                <span className="d-block mt-10">Devices</span>
                <p className="mt-5 c-gray fs-13">Check The Login Devices List</p>
              </div>
              <a className="device btn-shape bg-eee c-black">Devices</a>
            </div>
          </div>
          <div className="social-info bg-white rad-10 p-20">
            <h2 className="mt-0 mb-10">Social Info</h2>
            <p className="mt-0 mb-20 c-gray fs-15">Social Media InhtmlFormation</p>
            <div className="d-flex align-c mb-15">
              <i className="fa-brands fa-twitter flex-center c-gray"></i>
              <input
                className="w-full"
                type="text"
                placeholder="Twitter UserName"
              />
            </div>
            <div className="d-flex align-c mb-15">
              <i className="fa-brands fa-facebook flex-center c-gray"></i>
              <input
                className="w-full"
                type="text"
                placeholder="Facebook UserName"
              />
            </div>
            <div className="d-flex align-c mb-15">
              <i className="fa-brands fa-linkedin flex-center c-gray"></i>
              <input
                className="w-full"
                type="text"
                placeholder="Linkedin UserName"
              />
            </div>
            <div className="d-flex align-c mb-15">
              <i className="fa-brands fa-youtube flex-center c-gray"></i>
              <input
                className="w-full"
                type="text"
                placeholder="Youtube UserName"
              />
            </div>
          </div>
          <div className="widgets-control bg-white rad-10 p-20">
            <h2 className="mt-0 mb-10">Widgets Control</h2>
            <p className="mt-0 mb-20 c-gray fs-15">Show/Hide Widgets</p>
            <div className="d-flex align-c mb-15">
              <input type="checkbox" id="one" />
              <label htmlFor="one">Quick Draft</label>
            </div>
            <div className="d-flex align-c mb-15">
              <input type="checkbox" id="two" checked />
              <label htmlFor="two">Yearly Targets</label>
            </div>
            <div className="d-flex align-c mb-15">
              <input type="checkbox" id="three" checked />
              <label htmlFor="three">Tickets Statistics</label>
            </div>
            <div className="d-flex align-c mb-15">
              <input type="checkbox" id="four" />
              <label htmlFor="four">Latest News</label>
            </div>
            <div className="d-flex align-c mb-15">
              <input type="checkbox" id="five" checked />
              <label htmlFor="five">Latest Tasks</label>
            </div>
            <div className="d-flex align-c mb-15">
              <input type="checkbox" id="six" />
              <label htmlFor="six">Top Search Items</label>
            </div>
          </div>
          <div className="backup bg-white rad-10 p-20">
            <h2 className="mt-0 mb-10">Backup Manager</h2>
            <p className="mt-0 mb-20 c-gray fs-15">
              Control Backup Time And Location
            </p>
            <div className="date d-flex align-c mb-15">
              <input type="radio" name="backup" id="daily" checked />
              <label htmlFor="daily">Daily</label>
            </div>
            <div className="date d-flex align-c mb-15">
              <input type="radio" name="backup" id="weekly" />
              <label htmlFor="weekly">Weekly</label>
            </div>
            <div className="date d-flex align-c mb-15">
              <input type="radio" name="backup" id="monthly" />
              <label htmlFor="monthly">Monthly</label>
            </div>
            <div className="servers d-flex align-c txt-c">
              <input type="radio" name="servers" id="server-one" />
              <div className="server mb-15 rad-10 w-full">
                <label htmlFor="server-one" className="d-block m-15">
                  <i className="fa-solid fa-server d-block mb-10"></i>
                  Megaman
                </label>
              </div>
              <input type="radio" name="servers" id="server-two" checked />
              <div className="server mb-15 rad-10 w-full">
                <label htmlFor="server-two" className="d-block m-15">
                  <i className="fa-solid fa-server d-block mb-10"></i>
                  Zero
                </label>
              </div>
              <input type="radio" name="servers" id="server-three" />
              <div className="server mb-15 rad-10 w-full">
                <label htmlFor="server-three" className="d-block m-15">
                  <i className="fa-solid fa-server d-block mb-10"></i>
                  Sigma
                </label>
              </div>
            </div>
          </div>
        </div></>
  )
}

export default Settings