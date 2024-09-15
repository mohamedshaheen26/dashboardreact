import React, { useState, useEffect } from 'react';

import BeatLoader from 'react-spinners/BeatLoader';

import './courses.css';

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [delayCompleted, setDelayCompleted] = useState(false);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await fetch('/assets/data/courses.json');
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setTimeout(() => {
          setCourses(data || []);
          setLoading(false);
          setDelayCompleted(true);
        }, 3000);
      } catch (error) {
        setError(error.message);
        setLoading(false);
        setDelayCompleted(true);
      }
    };

    fetchCourses();
  }, []);

  if (loading && !delayCompleted) {
    return (
      <div className="spinner-container">
        <BeatLoader color="blue" loading={loading} size={20} />
      </div>
    );
  }

  return (
    <>
      <div className="courses gap-20">
        {error && <p>Error: {error}</p>}
        {courses.length > 0 ? (
          courses.map(course => (
            <div key={course.id} className="box rad-6 bg-white p-relative">
              <img className="team" src={course.instructorImage} alt="Instructor" />
              <img className="w-full" src={course.thumbnail} alt="Course Thumbnail" />
              <div className="content p-20">
                <h4 className="m-0">{course.title}</h4>
                <p className="c-gray fs-14">{course.description}</p>
              </div>
              <div className="info p-relative between-flex p-15">
                <button className="btn-shape fs-13 bg-blue c-white b-none">
                  Course Info
                </button>
                <span className="c-gray fs-13">
                  <i className="fa-regular fa-user"></i> {course.enrollment}
                </span>
                <span className="c-gray fs-13">
                  <i className="fa-solid fa-dollar-sign"></i> {course.price}
                </span>
              </div>
            </div>
          ))
        ) : (
          <p>No courses available</p>
        )}
      </div>
    </>
  );
};

export default Courses;
