import React from 'react'

import "./profile.css"

const Profile = () => {
  return (
    <>
    <h1 className="Special-heading p-relative">Profile</h1>
        <div className="profile m-20">
          <div className="overview d-flex align-c column bg-white rad-10">
            <div className="avatar-box txt-c p-20">
              <img src="assets/imgs/avatar.png" alt="profile" />
              <h3 className="m-0 mt-10">Mohamed Shaheen</h3>
              <p className="mt-10 c-gray">Level 20</p>
              <div className="level rad-6 bg-eee p-relative">
                <span style={{width: "70%"}}></span>
              </div>
              <div className="rating mt-10 mb-10">
                <i className="fa-solid fa-star c-orange fs-13"></i>
                <i className="fa-solid fa-star c-orange fs-13"></i>
                <i className="fa-solid fa-star c-orange fs-13"></i>
                <i className="fa-solid fa-star c-orange fs-13"></i>
                <i className="fa-solid fa-star c-orange fs-13"></i>
              </div>
              <span className="c-gray fs-13">550 Rating</span>
            </div>
            <div className="info w-full txt-c-mobile">
              <div className="info-row p-15 border-b">
                <h4 className="c-gray fs-15 m-0 w-full">General Information</h4>
                <div className="fs-14">
                  <span className="c-gray">Full Name:</span>
                  <span>Mohamed shaheen</span>
                </div>
                <div className="fs-14">
                  <span className="c-gray">Gender:</span>
                  <span>Male</span>
                </div>
                <div className="fs-14">
                  <span className="c-gray">Country:</span>
                  <span>Egypt</span>
                </div>
                <div className="fs-14">
                  <label>
                    <input className="toggle-checkbox" type="checkbox" checked />
                    <div className="toggle-switch"></div>
                  </label>
                </div>
              </div>
              <div className="info-row p-15 border-b">
                <h4 className="c-gray fs-15 m-0 w-full">Personal Information</h4>
                <div className="fs-14">
                  <span className="c-gray">Email:</span>
                  <span>o@nn.sa</span>
                </div>
                <div className="fs-14">
                  <span className="c-gray">Phone:</span>
                  <span>014536347367</span>
                </div>
                <div className="fs-14">
                  <span className="c-gray">Date Of Birth:</span>
                  <span>25/10/1982</span>
                </div>
                <div className="fs-14">
                  <label>
                    <input className="toggle-checkbox" type="checkbox" />
                    <div className="toggle-switch"></div>
                  </label>
                </div>
              </div>
              <div className="info-row p-15 border-b">
                <h4 className="c-gray fs-15 m-0 w-full">Job Information</h4>
                <div className="fs-14">
                  <span className="c-gray">Title:</span>
                  <span>Frontend Information</span>
                </div>
                <div className="fs-14">
                  <span className="c-gray">Programming Langauge:</span>
                  <span>Javascript</span>
                </div>
                <div className="fs-14">
                  <span className="c-gray">Years Of Experience:</span>
                  <span>15+</span>
                </div>
                <div className="fs-14">
                  <label>
                    <input className="toggle-checkbox" type="checkbox" checked />
                    <div className="toggle-switch"></div>
                  </label>
                </div>
              </div>
              <div className="info-row p-15 border-b">
                <h4 className="c-gray fs-15 m-0 w-full">Billing Information</h4>
                <div className="fs-14">
                  <span className="c-gray">Payment Method:</span>
                  <span>Paypal</span>
                </div>
                <div className="fs-14">
                  <span className="c-gray">Email:</span>
                  <span>email@website.com</span>
                </div>
                <div className="fs-14">
                  <span className="c-gray">Subscribtion:</span>
                  <span>Monthly</span>
                </div>
                <div className="fs-14">
                  <label>
                    <input className="toggle-checkbox" type="checkbox" />
                    <div className="toggle-switch"></div>
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="other-data d-flex gap-20">
            <div className="skills p-20 mt-20 bg-white rad-10">
              <h2 className="mt-0 mb-10">My skills</h2>
              <p className="mt-0 mb-20 c-gray fs-15">Complete Skills List</p>
              <div className="skill-row txt-c-mobile mb-15 pb-15 border-b">
                <span className="btn-shape bg-eee fs-14">HTML</span>
                <span className="btn-shape bg-eee fs-14">Pugjs</span>
                <span className="btn-shape bg-eee fs-14">HAML</span>
              </div>
              <div className="skill-row txt-c-mobile mb-15 pb-15 border-b">
                <span className="btn-shape bg-eee fs-14">CSS</span>
                <span className="btn-shape bg-eee fs-14">SASS</span>
                <span className="btn-shape bg-eee fs-14">Stylus</span>
              </div>
              <div className="skill-row txt-c-mobile mb-15 pb-15 border-b">
                <span className="btn-shape bg-eee fs-14">Javascript</span>
                <span className="btn-shape bg-eee fs-14">TypeScript</span>
              </div>
              <div className="skill-row txt-c-mobile mb-15 pb-15 border-b">
                <span className="btn-shape bg-eee fs-14">Vuejs</span>
                <span className="btn-shape bg-eee fs-14">Reactjs</span>
              </div>
              <div className="skill-row txt-c-mobile mb-15 pb-15 border-b">
                <span className="btn-shape bg-eee fs-14">Jest</span>
                <span className="btn-shape bg-eee fs-14">Jasmine</span>
              </div>
              <div className="skill-row txt-c-mobile mb-15 pb-15 border-b">
                <span className="btn-shape bg-eee fs-14">PHP</span>
                <span className="btn-shape bg-eee fs-14">Laravel</span>
              </div>
              <div className="skill-row txt-c-mobile mb-15">
                <span className="btn-shape bg-eee fs-14">Python</span>
                <span className="btn-shape bg-eee fs-14">Django</span>
              </div>
            </div>
            <div className="activities p-20 mt-20 bg-white rad-10">
              <h2 className="mt-0 mb-10">Latest Activities</h2>
              <p className="mt-0 mb-20 c-gray fs-15">
                Latest Activities Done By The User
              </p>
              <div
                className="activity-row d-flex mb-15 pb-15 border-b align-c txt-c-mobile"
              >
                <img src="assets/imgs/activity-01.png" alt="" />
                <div className="info">
                  <span>Store</span>
                  <span className="d-block c-gray mt-10"
                    >Bought The Mastring Python Course</span
                  >
                </div>
                <div className="date">
                  <span className="d-block txt-r mb-10">18:10</span>
                  <span className="c-gray">Yesterday</span>
                </div>
              </div>
              <div
                className="activity-row d-flex mb-15 pb-15 border-b align-c txt-c-mobile"
              >
                <img src="assets/imgs/activity-02.png" alt="" />
                <div className="info">
                  <span>Academy</span>
                  <span className="d-block c-gray mt-5"
                    >Got The PHP Certificate</span
                  >
                </div>
                <div className="date">
                  <span className="d-block txt-r mb-10">16:05</span>
                  <span className="c-gray">Yesterday</span>
                </div>
              </div>
              <div
                className="activity-row d-flex mb-15 pb-15 border-b align-c txt-c-mobile"
              >
                <img src="assets/imgs/activity-03.png" alt="" />
                <div className="info">
                  <span>Badges</span>
                  <span className="d-block c-gray mt-5"
                    >Unlocked The 10 Skills Badge</span
                  >
                </div>
                <div className="date">
                  <span className="d-block txt-r mb-10">18:05</span>
                  <span className="c-gray">Yesterday</span>
                </div>
              </div>
              <div className="activity-row d-flex align-c txt-c-mobile">
                <img src="assets/imgs/activity-01.png" alt="" />
                <div className="info">
                  <span>Store</span>
                  <span className="d-block c-gray mt-5"
                    >Bought The TypeScript Course</span
                  >
                </div>
                <div className="date">
                  <span className="d-block txt-r mb-10">12:05</span>
                  <span className="c-gray">Yesterday</span>
                </div>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default Profile