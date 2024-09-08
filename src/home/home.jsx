import React, { useState, useEffect } from "react";

import "./home.css";

const SaveDraftForm = () => {
  const [title, setTitle] = useState("");
  const [thought, setThought] = useState("");
  const [drafts, setDrafts] = useState([]);
  const [showSuccess, setShowSuccess] = useState(false);

  // Load drafts from localStorage on component mount
  useEffect(() => {
    const storedDrafts = window.localStorage.getItem("Drafts");
    if (storedDrafts) {
      setDrafts(JSON.parse(storedDrafts));
    }
  }, []);

  // Update localStorage whenever drafts change
  useEffect(() => {
    window.localStorage.setItem("Drafts", JSON.stringify(drafts));
  }, [drafts]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (title !== "" && thought !== "") {
      const newDraft = {
        id: Date.now(),
        Title: title,
        YourThought: thought,
      };

      setDrafts([...drafts, newDraft]);

      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 4000);

      setTitle("");
      setThought("");
    }
  };

  return (
    <div className='p-relative quick bg-white p-20 rad-10' id='quickDraft'>
      {showSuccess && (
        <div className='success'>
          <i className='fa fa-check-circle ml-5 mr-5'></i>
          <span>Draft saved successfully!</span>
        </div>
      )}
      <h2 className='mt-0 mb-10'>Quick Draft</h2>
      <p className='fs-15 c-gray mt-0 mb-20'>Write A Draft For Your Ideas</p>
      <form onSubmit={handleSubmit}>
        <input
          className='d-block mb-20 w-full p-10 b-none bg-eee rad-6'
          type='text'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder='Title'
        />
        <textarea
          className='d-block mb-20 w-full p-10 b-none bg-eee rad-6'
          value={thought}
          onChange={(e) => setThought(e.target.value)}
          placeholder='Your Thought'
        ></textarea>
        <input
          className='save d-block b-none fs-14 w-fit bg-blue c-white btn-shape'
          type='submit'
          value='Save'
        />
      </form>
    </div>
  );
};

const Home = () => {
  return (
    <>
      <h1 className='Special-heading p-relative'>Dashboard</h1>
      <div className='wrapper d-grid gap-20'>
        <div className='welcome bg-white rad-10 txt-c-mobile block-mobile'>
          <div className='intro d-flex space-between bg-eee p-20'>
            <div>
              <h2 className='m-0'>Welcome</h2>
              <p className='c-gray mt-5'>Mohamed Shaheen</p>
            </div>
            <img className='hide-mobile' src='assets/imgs/welcome.png' alt='' />
          </div>
          <img className='avatar' src='assets/imgs/avatar.png' />
          <div className='body txt-c d-flex p-20 mt-20 mb-20 block-mobile'>
            <div>
              Mohamed Shaheen
              <span className='d-block c-gray fs-14 mt-10'>Developer</span>
            </div>
            <div>
              80<span className='d-block c-gray fs-14 mt-10'>Projects</span>
            </div>
            <div>
              $8500<span className='d-block c-gray fs-14 mt-10'>Earned</span>
            </div>
          </div>
          <a
            href='profile.html'
            className='visit d-block fs-14 bg-blue c-white w-fit btn-shape'
          >
            Profile
          </a>
        </div>
        <SaveDraftForm />
        <div className='targets bg-white p-20 rad-10'>
          <h2 className='mt-0 mb-10'>Yearly Targets</h2>
          <p className='fs-15 c-gray mt-0 mb-20'>Targets Of The Year</p>
          <div className='target-row mb-20 flex-center blue'>
            <div className='icons flex-center'>
              <i className='fa-solid fa-dollar-sign fa-lg c-blue'></i>
            </div>
            <div className='ml-15 flex-1'>
              <span className='fs-14 c-gray'>Money</span>
              <span className='mb-10 mt-5 fw-bold d-block'>$20.000</span>
              <div className='progress-bar mt-10 p-relative'>
                <span
                  className='p-relative d-block bg-blue blue'
                  style={{ width: "80%" }}
                >
                  <span className='bg-blue'>80%</span>
                </span>
              </div>
            </div>
          </div>
          <div className='target-row mb-20 flex-center orange'>
            <div className='icons flex-center'>
              <i className='fa-solid fa-code fa-lg c-orange'></i>
            </div>
            <div className='ml-15 flex-1'>
              <span className='fs-14 c-gray'>Projects</span>
              <span className='mb-10 mt-5 fw-bold d-block'>24</span>
              <div className='progress-bar mt-10 p-relative'>
                <span
                  className='p-relative d-block bg-orange orange'
                  style={{ width: "40%" }}
                >
                  <span className='bg-orange'>40%</span>
                </span>
              </div>
            </div>
          </div>
          <div className='target-row mb-20 flex-center green'>
            <div className='icons flex-center'>
              <i className='fa-solid fa-user fa-lg c-green'></i>
            </div>
            <div className='ml-15 flex-1'>
              <span className='fs-14 c-gray'>Team</span>
              <span className='mb-10 mt-5 fw-bold d-block'>12</span>
              <div className='progress-bar mt-10 p-relative'>
                <span
                  className='p-relative d-block bg-green green'
                  style={{ width: "60%" }}
                >
                  <span className='bg-green'>60%</span>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className='tickets bg-white p-20 rad-10'>
          <h2 className='mb-10 mt-0'>Tickets Statistics</h2>
          <p className='mt-0 mb-20 c-gray fs-15'>
            Everything About Support Tickets
          </p>
          <div className='d-flex flex-wrap gap-20 txt-c'>
            <div className='box p-20 rad-10 fs-13 c-gray'>
              <i className='fa-regular fa-rectangle-list fa-2x mb-10 c-orange'></i>
              <span className='d-block c-black fw-bold fs-15 mb-5'>2500</span>
              Total
            </div>
            <div className='box p-20 rad-10 fs-13 c-gray'>
              <i className='fa-regular fa-rectangle-list fa-2x mb-10 c-blue'></i>
              <span className='d-block c-black fw-bold fs-15 mb-5'>500</span>
              Pending
            </div>
            <div className='box p-20 rad-10 fs-13 c-gray'>
              <i className='fa-regular fa-rectangle-list fa-2x mb-10 c-green'></i>
              <span className='d-block c-black fw-bold fs-15 mb-5'>1900</span>
              Closed
            </div>
            <div className='box p-20 rad-10 fs-13 c-gray'>
              <i className='fa-regular fa-rectangle-list fa-2x mb-10 c-red'></i>
              <span className='d-block c-black fw-bold fs-15 mb-5'>100</span>
              Deleted
            </div>
          </div>
        </div>
        <div className='news bg-white p-20 rad-10 txt-c-mobile'>
          <h2 className='mt-0 mb-20'>Latest News</h2>
          <div className='news-row mb-20 pb-20 border-ccc-b d-flex align-c block-mobile'>
            <img className='image rad-6' src='assets/imgs/news-01.png' alt='' />
            <div className='info flex-1 ml-15'>
              <h3 className='mt-0 mb-5'>Created SASS Section</h3>
              <p className='c-gray m-0 fs-14'>New SASS Examples & tutorials</p>
            </div>
            <span className='fs-13 rad-6 btn-shape bg-eee'>3 Days Ago</span>
          </div>
          <div className='news-row mb-20 pb-20 border-ccc-b d-flex align-c block-mobile'>
            <img className='image rad-6' src='assets/imgs/news-02.png' alt='' />
            <div className='info flex-1 ml-15'>
              <h3 className='mt-0 mb-5'>Changed The Design</h3>
              <p className='c-gray m-0 fs-14'>A Brand New Website Design</p>
            </div>
            <span className='fs-13 rad-6 btn-shape bg-eee'>3 Days Ago</span>
          </div>
          <div className='news-row mb-20 pb-20 border-ccc-b d-flex align-c block-mobile'>
            <img className='image rad-6' src='assets/imgs/news-03.png' alt='' />
            <div className='info flex-1 ml-15'>
              <h3 className='mt-0 mb-5'>Team Increased</h3>
              <p className='c-gray m-0 fs-14'>3 Developers Joined The Team</p>
            </div>
            <span className='fs-13 rad-6 btn-shape bg-eee'>3 Days Ago</span>
          </div>
          <div className='news-row d-flex align-c block-mobile'>
            <img className='image rad-6' src='assets/imgs/news-04.png' alt='' />
            <div className='info flex-1 ml-15'>
              <h3 className='mt-0 mb-5'>Added Payment Gateway</h3>
              <p className='c-gray m-0 fs-14'>
                Many New Payment Gateways Added
              </p>
            </div>
            <span className='fs-13 rad-6 btn-shape bg-eee'>3 Days Ago</span>
          </div>
        </div>
        <div className='tasks bg-white rad-10 p-20'>
          <h2 className='mt-0 mb-20'>Latest Tasks</h2>
          <div className='task-row between-flex mb-15 pb-15 border-b'>
            <div className='title'>
              <h3 className='mt-0 mb-5 fs-15'>Record One New Video</h3>
              <p className='m-0 c-gray'>Record Python Create Exe Project</p>
            </div>
            <i className='fa-regular fa-trash-can delete'></i>
          </div>
          <div className='task-row between-flex mb-15 pb-15 border-b'>
            <div className='title'>
              <h3 className='mt-0 mb-5 fs-15'>Write Article</h3>
              <p className='m-0 c-gray'>
                Write Low Level vs High Level Languages
              </p>
            </div>
            <i className='fa-regular fa-trash-can delete'></i>
          </div>
          <div className='task-row between-flex mb-15 pb-15 border-b'>
            <div className='title'>
              <h3 className='mt-0 mb-5 fs-15'>Finish Project</h3>
              <p className='m-0 c-gray'>Publish Academy Programming Project</p>
            </div>
            <i className='fa-regular fa-trash-can delete'></i>
          </div>
          <div className='task-row between-flex mb-15 pb-15 border-b done'>
            <div className='title'>
              <h3 className='mt-0 mb-5 fs-15'>Attend The Meeting</h3>
              <p className='m-0 c-gray'>
                Attend The Project Business Analysis Meeting
              </p>
            </div>
            <i className='fa-regular fa-trash-can delete'></i>
          </div>
          <div className='task-row between-flex'>
            <div className='title'>
              <h3 className='mt-0 mb-5 fs-15'>Finish Lesson</h3>
              <p className='m-0 c-gray'>Finish Teaching Flex Box</p>
            </div>
            <i className='fa-regular fa-trash-can delete'></i>
          </div>
        </div>
        <div className='search bg-white rad-10 p-20'>
          <h2 className='mb-20 mt-0'>Top Search Items</h2>
          <div className='between-flex mb-10 c-gray'>
            <span>Keyword</span>
            <span>Search Count</span>
          </div>
          <ul className='m-0'>
            <li className='between-flex pb-15 pt-15'>
              Programming
              <span className='btn-shape fs-13 bg-eee'>220</span>
            </li>
            <li className='between-flex pb-15 pt-15'>
              JavaScript
              <span className='btn-shape fs-13 bg-eee'>180</span>
            </li>
            <li className='between-flex pb-15 pt-15'>
              PHP
              <span className='btn-shape fs-13 bg-eee'>160</span>
            </li>
            <li className='between-flex pb-15 pt-15'>
              Code
              <span className='btn-shape fs-13 bg-eee'>145</span>
            </li>
            <li className='between-flex pb-15 pt-15'>
              Design
              <span className='btn-shape fs-13 bg-eee'>110</span>
            </li>
            <li className='between-flex pb-15 pt-15'>
              Logic
              <span className='btn-shape fs-13 bg-eee'>95</span>
            </li>
          </ul>
        </div>
        <div className='uploads bg-white rad-10 p-20'>
          <h2 className='mt-0 mb-20'>Latest Uploads</h2>
          <div className='upload-row between-flex border-b pb-10 pt-10'>
            <div className='d-flex'>
              <img src='assets/imgs/pdf.svg' alt='' />
              <div className='ml-15'>
                My-File.pdf
                <span className='c-gray fs-15 d-block'>Elzero</span>
              </div>
            </div>
            <span className='bg-eee btn-shape fs-13'>2.9mb</span>
          </div>
          <div className='upload-row between-flex border-b pb-10 pt-10'>
            <div className='d-flex'>
              <img src='assets/imgs/avi.svg' alt='' />
              <div className='ml-15'>
                My-video-File.avi
                <span className='c-gray fs-15 d-block'>Admin</span>
              </div>
            </div>
            <span className='bg-eee btn-shape fs-13'>2.9mb</span>
          </div>
          <div className='upload-row between-flex border-b pb-10 pt-10'>
            <div className='d-flex'>
              <img src='assets/imgs/psd.svg' alt='' />
              <div className='ml-15'>
                My-Psd-File.psd
                <span className='c-gray fs-15 d-block'>Osama</span>
              </div>
            </div>
            <span className='bg-eee btn-shape fs-13'>2.9mb</span>
          </div>
          <div className='upload-row between-flex border-b pb-10 pt-10'>
            <div className='d-flex'>
              <img src='assets/imgs/zip.svg' alt='' />
              <div className='ml-15'>
                My-Zip-File.zip
                <span className='c-gray fs-15 d-block'>User</span>
              </div>
            </div>
            <span className='bg-eee btn-shape fs-13'>2.9mb</span>
          </div>
          <div className='upload-row between-flex border-b pb-10 pt-10'>
            <div className='d-flex'>
              <img src='assets/imgs/dll.svg' alt='' />
              <div className='ml-15'>
                My-DLL-File.dll
                <span className='c-gray fs-15 d-block'>Admin</span>
              </div>
            </div>
            <span className='bg-eee btn-shape fs-13'>2.9mb</span>
          </div>
          <div className='upload-row between-flex pb-10 pt-10'>
            <div className='d-flex'>
              <img src='assets/imgs/eps.svg' alt='' />
              <div className='ml-15'>
                My-Eps-File.eps
                <span className='c-gray fs-15 d-block'>Designer</span>
              </div>
            </div>
            <span className='bg-eee btn-shape fs-13'>2.9mb</span>
          </div>
        </div>
        <div className='last-project bg-white rad-10 p-20 p-relative'>
          <h2 className='mt-0 mb-20'>Last Project Progress</h2>
          <ul className='m-0 p-relative'>
            <li className='mt-30 d-flex align-c done'>Got The Project</li>
            <li className='mt-30 d-flex align-c done'>Started The Project</li>
            <li className='mt-30 d-flex align-c done'>
              The Project About To Finish
            </li>
            <li className='mt-30 d-flex align-c current'>Test The Project</li>
            <li className='mt-30 d-flex align-c'>
              Finish The Project & Get Money
            </li>
          </ul>
          <img src='assets/imgs/project.png' alt='' />
        </div>
        <div className='reminders bg-white rad-10 p-20'>
          <h2 className='mt-0 mb-25'>Reminders</h2>
          <div className='reminder-row d-flex align-c mb-20'>
            <div className='mr-15'>
              <span className='bg-blue'></span>
            </div>
            <div className='content blue'>
              <p className='mt-0 mb-5 fs-14 fw-bold'>Check My Tasks List</p>
              <p className='c-gray fs-13 mt-10'>28/09/2022 - 12:00am</p>
            </div>
          </div>
          <div className='reminder-row d-flex align-c mb-20'>
            <div className='mr-15'>
              <span className='bg-green'></span>
            </div>
            <div className='content green'>
              <p className='mt-0 mb-5 fs-14 fw-bold'>Check My Projects</p>
              <p className='c-gray fs-13 mt-10'>26/10/2022 - 12:00am</p>
            </div>
          </div>
          <div className='reminder-row d-flex align-c mb-20'>
            <div className='mr-15'>
              <span className='bg-orange'></span>
            </div>
            <div className='content orange'>
              <h3 className='mt-0 mb-5 fs-14 fw-bold'>Call All My Clients</h3>
              <p className='c-gray fs-13 mt-10'>05/11/2022 - 12:00am</p>
            </div>
          </div>
          <div className='reminder-row d-flex align-c mb-20'>
            <div className='mr-15'>
              <span className='bg-red'></span>
            </div>
            <div className='content red'>
              <h3 className='mt-0 mb-5 fs-15 fw-bold'>
                Finish The Development Workshop
              </h3>
              <p className='c-gray fs-13 mt-10'>20/12/2022 - 12:00am</p>
            </div>
          </div>
        </div>
        <div className='posts bg-white rad-10 p-20'>
          <h2 className='mt-0 mb-25'>Latest Post</h2>
          <div className='d-flex align-c border-b pb-20'>
            <img src='assets/imgs/avatar.png' alt='' />
            <div className='account-name ml-15'>
              <span className='mb-5 d-block fw-bold'>Mohamed Shaheen</span>
              <span className='c-gray'>About 3 Hours Ago</span>
            </div>
          </div>
          <div className='post-content mt-20 mb-20 border-b txt-c-mobile'>
            You Can Fool All Of The People Some Of The Time, And Some Of The
            People All Of The Time, But You Can't Fool All Of The People All Of
            The Time.
          </div>
          <div>
            <div className='between-flex c-gray'>
              <span className='d-flex align-c'>
                <i className='fa-regular fa-heart mr-5'></i>
                1.8K
              </span>
              <span className='d-flex align-c'>
                <i className='fa-regular fa-comments mr-5'></i>
                500
              </span>
            </div>
          </div>
        </div>
        <div className='social-media bg-white rad-10 p-20'>
          <h2 className='mt-0 mb-25'>Social Media Stats</h2>
          <div className='box twitter p-15 p-relative between-flex mb-10'>
            <i className='fa-brands fa-twitter fa-2x c-white h-full flex-center'></i>
            <span className=''>90K Followers</span>
            <a className='btn-shape c-white fs-13' href='#'>
              Follow
            </a>
          </div>
          <div className='box facebook p-15 p-relative between-flex mb-10'>
            <i className='fa-brands fa-facebook fa-2x c-white h-full flex-center'></i>
            <span className=''>2M Like</span>
            <a className='btn-shape c-white fs-13' href='#'>
              Like
            </a>
          </div>
          <div className='box youtube p-15 p-relative between-flex mb-10'>
            <i className='fa-brands fa-youtube fa-2x c-white h-full flex-center'></i>
            <span className=''>1M Subs</span>
            <a className='btn-shape c-white fs-13' href='#'>
              SubScribe
            </a>
          </div>
          <div className='box linkedin p-15 p-relative between-flex mb-10'>
            <i className='fa-brands fa-linkedin fa-2x c-white h-full flex-center'></i>
            <span className=''>70K Followers</span>
            <a className='btn-shape c-white fs-13' href='#'>
              Follow
            </a>
          </div>
        </div>
      </div>
      <div className='projects p-20 bg-white rad-10 m-20'>
        <h2 className='mt-0 mb-25'>Projects</h2>
        <div className='responsive-table'>
          <table className='fs-15 w-full'>
            <thead>
              <tr>
                <td>Name</td>
                <td>Finish</td>
                <td>Client</td>
                <td>Price</td>
                <td>Team</td>
                <td>Status</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Ministry Wikipedia</td>
                <td>10 May 2022</td>
                <td>Ministry</td>
                <td>$5300</td>
                <td>
                  <img src='assets/imgs/team-01.png' alt='' />
                  <img src='assets/imgs/team-02.png' alt='' />
                  <img src='assets/imgs/team-03.png' alt='' />
                  <img src='assets/imgs/team-05.png' alt='' />
                </td>
                <td>
                  <span className='fs-13 bg-orange c-white btn-shape'>
                    Pending
                  </span>
                </td>
              </tr>
              <tr>
                <td>Elzero Shop</td>
                <td>12 Oct 2021</td>
                <td>Elzero Company</td>
                <td>$1500</td>
                <td>
                  <img src='assets/imgs/team-01.png' alt='' />
                  <img src='assets/imgs/team-02.png' alt='' />
                  <img src='assets/imgs/team-05.png' alt='' />
                </td>
                <td>
                  <span className='fs-13 bg-blue c-white btn-shape'>
                    In Progress
                  </span>
                </td>
              </tr>
              <tr>
                <td>Bouba App</td>
                <td>05 Sep 2021</td>
                <td>Bouba</td>
                <td>$800</td>
                <td>
                  <img src='assets/imgs/team-02.png' alt='' />
                  <img src='assets/imgs/team-03.png' alt='' />
                </td>
                <td>
                  <span className='fs-13 bg-green c-white btn-shape'>
                    Completed
                  </span>
                </td>
              </tr>
              <tr>
                <td>Mahmoud Website</td>
                <td>22 May 2021</td>
                <td>Mahmoud</td>
                <td>$600</td>
                <td>
                  <img src='assets/imgs/team-01.png' alt='' />
                  <img src='assets/imgs/team-02.png' alt='' />
                </td>
                <td>
                  <span className='fs-13 bg-green c-white btn-shape'>
                    Completed
                  </span>
                </td>
              </tr>
              <tr>
                <td>Sayed Website</td>
                <td>24 May 2021</td>
                <td>Sayed</td>
                <td>$300</td>
                <td>
                  <img src='assets/imgs/team-01.png' alt='' />
                  <img src='assets/imgs/team-03.png' alt='' />
                </td>
                <td>
                  <span className='fs-13 bg-red c-white btn-shape'>
                    Rejected
                  </span>
                </td>
              </tr>
              <tr>
                <td>Arena Application</td>
                <td>01 Mar 2021</td>
                <td>Arena Company</td>
                <td>$2600</td>
                <td>
                  <img src='assets/imgs/team-01.png' alt='' />
                  <img src='assets/imgs/team-02.png' alt='' />
                  <img src='assets/imgs/team-03.png' alt='' />
                  <img src='assets/imgs/team-05.png' alt='' />
                </td>
                <td>
                  <span className='fs-13 bg-green c-white btn-shape'>
                    Completed
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Home;
