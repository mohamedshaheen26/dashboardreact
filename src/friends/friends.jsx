import React from 'react'

import './friends.css'

const Friends = () => {
  return (
    <>
    <h1 className="Special-heading p-relative">Friends</h1>
        <div className="friends gap-20">
          <div className="box p-relative bg-white p-20 rad-6">
            <div className="icon">
              <i className="fa-solid fa-phone"></i>
              <i className="fa-regular fa-envelope"></i>
            </div>
            <div className="title flex-column border-b">
              <img src="assets/imgs/friend-01.jpg" alt="" />
              <h4 className="m-0 mt-10">Ahmed Nasser</h4>
              <p className="mt-5 c-gray fs-13">JavaScript Developer</p>
            </div>
            <div className="p-relative fs-14 border-b">
              <ul>
                <li className="mb-10">
                  <i className="fa-regular fa-face-smile fa-fw mr-5"></i>
                  99 Friend
                </li>
                <li className="mb-10">
                  <i className="fa-solid fa-code-commit fa-fw mr-5"></i>
                  15 Projects
                </li>
                <li>
                  <i className="fa-regular fa-newspaper fa-fw mr-5"></i>
                  25 Articles
                </li>
              </ul>
              <span className="vip c-orange">VIP</span>
            </div>
            <div className="info between-flex mt-10">
              <span className="c-gray fs-14">Joined 02/10/2021</span>
              <div>
                <button className="btn-shape rad-10 b-none bg-blue c-white">
                  Profile
                </button>
                <button className="btn-shape rad-10 b-none bg-red c-white">
                  Remove
                </button>
              </div>
            </div>
          </div>
          <div className="box p-relative bg-white p-20 rad-6">
            <div className="icon">
              <i className="fa-solid fa-phone"></i>
              <i className="fa-regular fa-envelope"></i>
            </div>
            <div className="title flex-column border-b">
              <img src="assets/imgs/friend-02.jpg" alt="" />
              <h4 className="m-0 mt-10">Omar Fathy</h4>
              <p className="mt-5 c-gray fs-13">Cloud Developer</p>
            </div>
            <div className="p-relative fs-14 border-b">
              <ul>
                <li className="mb-10">
                  <i className="fa-regular fa-face-smile fa-fw mr-5"></i>
                  30 Friend
                </li>
                <li className="mb-10">
                  <i className="fa-solid fa-code-commit fa-fw mr-5"></i>
                  11 Projects
                </li>
                <li>
                  <i className="fa-regular fa-newspaper fa-fw mr-5"></i>
                  12 Articles
                </li>
              </ul>
            </div>
            <div className="info between-flex mt-10">
              <span className="c-gray fs-14">Joined 02/08/2020</span>
              <div>
                <button className="btn-shape rad-10 b-none bg-blue c-white">
                  Profile
                </button>
                <button className="btn-shape rad-10 b-none bg-red c-white">
                  Remove
                </button>
              </div>
            </div>
          </div>
          <div className="box p-relative bg-white p-20 rad-6">
            <div className="icon">
              <i className="fa-solid fa-phone"></i>
              <i className="fa-regular fa-envelope"></i>
            </div>
            <div className="title flex-column border-b">
              <img src="assets/imgs/friend-03.jpg" alt="" />
              <h4 className="m-0 mt-10">Omar Ahmed</h4>
              <p className="mt-5 c-gray fs-13">Mobile Developer</p>
            </div>
            <div className="p-relative fs-14 border-b">
              <ul>
                <li className="mb-10">
                  <i className="fa-regular fa-face-smile fa-fw mr-5"></i>
                  80 Friend
                </li>
                <li className="mb-10">
                  <i className="fa-solid fa-code-commit fa-fw mr-5"></i>
                  20 Projects
                </li>
                <li>
                  <i className="fa-regular fa-newspaper fa-fw mr-5"></i>
                  18 Articles
                </li>
              </ul>
            </div>
            <div className="info between-flex mt-10">
              <span className="c-gray fs-14">Joined 02/06/2020</span>
              <div>
                <button className="btn-shape rad-10 b-none bg-blue c-white">
                  Profile
                </button>
                <button className="btn-shape rad-10 b-none bg-red c-white">
                  Remove
                </button>
              </div>
            </div>
          </div>
          <div className="box p-relative bg-white p-20 rad-6">
            <div className="icon">
              <i className="fa-solid fa-phone"></i>
              <i className="fa-regular fa-envelope"></i>
            </div>
            <div className="title flex-column border-b">
              <img src="assets/imgs/friend-04.jpg" alt="" />
              <h4 className="m-0 mt-10">Shady Nabil</h4>
              <p className="mt-5 c-gray fs-13">Back-End Developer</p>
            </div>
            <div className="p-relative fs-14 border-b">
              <ul>
                <li className="mb-10">
                  <i className="fa-regular fa-face-smile fa-fw mr-5"></i>
                  70 Friend
                </li>
                <li className="mb-10">
                  <i className="fa-solid fa-code-commit fa-fw mr-5"></i>
                  30 Projects
                </li>
                <li>
                  <i className="fa-regular fa-newspaper fa-fw mr-5"></i>
                  18 Articles
                </li>
              </ul>
            </div>
            <div className="info between-flex mt-10">
              <span className="c-gray fs-14">Joined 26/06/2020</span>
              <div>
                <button className="btn-shape rad-10 b-none bg-blue c-white">
                  Profile
                </button>
                <button className="btn-shape rad-10 b-none bg-red c-white">
                  Remove
                </button>
              </div>
            </div>
          </div>
          <div className="box p-relative bg-white p-20 rad-6">
            <div className="icon">
              <i className="fa-solid fa-phone"></i>
              <i className="fa-regular fa-envelope"></i>
            </div>
            <div className="title flex-column border-b">
              <img src="assets/imgs/friend-05.jpg" alt="" />
              <h4 className="m-0 mt-10">Mohamed Ibrahim</h4>
              <p className="mt-5 c-gray fs-13">Algorithm Developer</p>
            </div>
            <div className="p-relative fs-14 border-b">
              <ul>
                <li className="mb-10">
                  <i className="fa-regular fa-face-smile fa-fw mr-5"></i>
                  80 Friend
                </li>
                <li className="mb-10">
                  <i className="fa-solid fa-code-commit fa-fw mr-5"></i>
                  30 Projects
                </li>
                <li>
                  <i className="fa-regular fa-newspaper fa-fw mr-5"></i>
                  18 Articles
                </li>
              </ul>
            </div>
            <div className="info between-flex mt-10">
              <span className="c-gray fs-14">Joined 28/08/2020</span>
              <div>
                <button className="btn-shape rad-10 b-none bg-blue c-white">
                  Profile
                </button>
                <button className="btn-shape rad-10 b-none bg-red c-white">
                  Remove
                </button>
              </div>
            </div>
          </div>
          <div className="box p-relative bg-white p-20 rad-6">
            <div className="icon">
              <i className="fa-solid fa-phone"></i>
              <i className="fa-regular fa-envelope"></i>
            </div>
            <div className="title flex-column border-b">
              <img src="assets/imgs/friend-01.jpg" alt="" />
              <h4 className="m-0 mt-10">Gareeb Elshiekh</h4>
              <p className="mt-5 c-gray fs-13">JavaScript Developer</p>
            </div>
            <div className="p-relative fs-14 border-b">
              <ul>
                <li className="mb-10">
                  <i className="fa-regular fa-face-smile fa-fw mr-5"></i>
                  90 Friend
                </li>
                <li className="mb-10">
                  <i className="fa-solid fa-code-commit fa-fw mr-5"></i>
                  15 Projects
                </li>
                <li>
                  <i className="fa-regular fa-newspaper fa-fw mr-5"></i>
                  25 Articles
                </li>
              </ul>
              <span className="vip c-orange">VIP</span>
            </div>
            <div className="info between-flex mt-10">
              <span className="c-gray fs-14">Joined 02/10/2020</span>
              <div>
                <button className="btn-shape rad-10 b-none bg-blue c-white">
                  Profile
                </button>
                <button className="btn-shape rad-10 b-none bg-red c-white">
                  Remove
                </button>
              </div>
            </div>
          </div>
          <div className="box p-relative bg-white p-20 rad-6">
            <div className="icon">
              <i className="fa-solid fa-phone"></i>
              <i className="fa-regular fa-envelope"></i>
            </div>
            <div className="title flex-column border-b">
              <img src="assets/imgs/friend-02.jpg" alt="" />
              <h4 className="m-0 mt-10">Hamzah</h4>
              <p className="mt-5 c-gray fs-13">Front-End Developer</p>
            </div>
            <div className="p-relative fs-14 border-b">
              <ul>
                <li className="mb-10">
                  <i className="fa-regular fa-face-smile fa-fw mr-5"></i>
                  80 Friend
                </li>
                <li className="mb-10">
                  <i className="fa-solid fa-code-commit fa-fw mr-5"></i>
                  20 Projects
                </li>
                <li>
                  <i className="fa-regular fa-newspaper fa-fw mr-5"></i>
                  18 Articles
                </li>
              </ul>
            </div>
            <div className="info between-flex mt-10">
              <span className="c-gray fs-14">Joined 02/06/2020</span>
              <div>
                <button className="btn-shape rad-10 b-none bg-blue c-white">
                  Profile
                </button>
                <button className="btn-shape rad-10 b-none bg-red c-white">
                  Remove
                </button>
              </div>
            </div>
          </div>
          <div className="box p-relative bg-white p-20 rad-6">
            <div className="icon">
              <i className="fa-solid fa-phone"></i>
              <i className="fa-regular fa-envelope"></i>
            </div>
            <div className="title flex-column border-b">
              <img src="assets/imgs/friend-03.jpg" alt="" />
              <h4 className="m-0 mt-10">Amr Hendawy</h4>
              <p className="mt-5 c-gray fs-13">Back-End Developer</p>
            </div>
            <div className="p-relative fs-14 border-b">
              <ul>
                <li className="mb-10">
                  <i className="fa-regular fa-face-smile fa-fw mr-5"></i>
                  70 Friend
                </li>
                <li className="mb-10">
                  <i className="fa-solid fa-code-commit fa-fw mr-5"></i>
                  30 Projects
                </li>
                <li>
                  <i className="fa-regular fa-newspaper fa-fw mr-5"></i>
                  18 Articles
                </li>
              </ul>
            </div>
            <div className="info between-flex mt-10">
              <span className="c-gray fs-14">Joined 28/06/2020</span>
              <div>
                <button className="btn-shape rad-10 b-none bg-blue c-white">
                  Profile
                </button>
                <button className="btn-shape rad-10 b-none bg-red c-white">
                  Remove
                </button>
              </div>
            </div>
          </div>
          <div className="box p-relative bg-white p-20 rad-6">
            <div className="icon">
              <i className="fa-solid fa-phone"></i>
              <i className="fa-regular fa-envelope"></i>
            </div>
            <div className="title flex-column border-b">
              <img src="assets/imgs/friend-04.jpg" alt="" />
              <h4 className="m-0 mt-10">Ahmed Abuzaid</h4>
              <p className="mt-5 c-gray fs-13">Content Creator</p>
            </div>
            <div className="p-relative fs-14 border-b">
              <ul>
                <li className="mb-10">
                  <i className="fa-regular fa-face-smile fa-fw mr-5"></i>
                  80 Friend
                </li>
                <li className="mb-10">
                  <i className="fa-solid fa-code-commit fa-fw mr-5"></i>
                  30 Projects
                </li>
                <li>
                  <i className="fa-regular fa-newspaper fa-fw mr-5"></i>
                  18 Articles
                </li>
              </ul>
            </div>
            <div className="info between-flex mt-10">
              <span className="c-gray fs-14">Joined 28/08/2020</span>
              <div>
                <button className="btn-shape rad-10 b-none bg-blue c-white">
                  Profile
                </button>
                <button className="btn-shape rad-10 b-none bg-red c-white">
                  Remove
                </button>
              </div>
            </div>
          </div>
          <div className="box p-relative bg-white p-20 rad-6">
            <div className="icon">
              <i className="fa-solid fa-phone"></i>
              <i className="fa-regular fa-envelope"></i>
            </div>
            <div className="title flex-column border-b">
              <img src="assets/imgs/friend-05.jpg" alt="" />
              <h4 className="m-0 mt-10">Mahmoud Adel</h4>
              <p className="mt-5 c-gray fs-13">Cloud Developer</p>
            </div>
            <div className="p-relative fs-14 border-b">
              <ul>
                <li className="mb-10">
                  <i className="fa-regular fa-face-smile fa-fw mr-5"></i>
                  30 Friend
                </li>
                <li className="mb-10">
                  <i className="fa-solid fa-code-commit fa-fw mr-5"></i>
                  11 Projects
                </li>
                <li>
                  <i className="fa-regular fa-newspaper fa-fw mr-5"></i>
                  12 Articles
                </li>
              </ul>
            </div>
            <div className="info between-flex mt-10">
              <span className="c-gray fs-14">Joined 02/08/2020</span>
              <div>
                <button className="btn-shape rad-10 b-none bg-blue c-white">
                  Profile
                </button>
                <button className="btn-shape rad-10 b-none bg-red c-white">
                  Remove
                </button>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default Friends