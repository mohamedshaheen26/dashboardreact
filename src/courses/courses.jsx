import React, { useState, useEffect } from 'react';
import ContentLoader from 'react-content-loader';
import './courses.css';

const CoursePlaceholder = () => (
  <ContentLoader
    speed={2}
    width={400}
    height={520}
    viewBox="0 0 400 520"
    backgroundColor="#ccc"
    foregroundColor="#ecebeb"
  >
    <rect x="0" y="0" rx="10" ry="10" width="400" height="300" />
    <rect x="10" y="320" rx="4" ry="4" width="150" height="10" />
    <rect x="10" y="340" rx="3" ry="3" width="100" height="10" />
    <rect x="10" y="370" rx="4" ry="4" width="60" height="20" />
    <rect x="320" y="370" rx="4" ry="4" width="60" height="20" />
  </ContentLoader>
);

const Courses = ({ searchQuery }) => {
  const [courses, setCourses] = useState([]);
  const [filteredCourses, setFilteredCourses] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

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
        }, 3000)
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  useEffect(() => {
    if (searchQuery) {
      const filtered = courses.filter(course =>
        (course.title && course.title.toLowerCase().includes(searchQuery.toLowerCase())) ||
        (course.description && course.description.toLowerCase().includes(searchQuery.toLowerCase()))
      );
      console.log("Filtered courses:", filtered);
      setFilteredCourses(filtered);
    } else {
      setFilteredCourses(courses);
    }
  }, [searchQuery, courses]);

  return (
    <>
      {loading ? (
        <div className="courses gap-20">
          {[...Array(10)].map((_, index) => (
            <CoursePlaceholder key={index} />
          ))}
        </div>
      ) : (
        <div className="courses gap-20">
          {error && <p>Error: {error}</p>}
          {filteredCourses.length > 0 ? (
            filteredCourses.map(course => (
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
            <p>No courses found</p>
          )}
        </div>
      )}
    </>
  );
};

export default Courses;
