import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import "./courseDetails.css";

const CourseDetails = () => {
  const { courseId } = useParams();
  const [course, setCourse] = useState(null);
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  useEffect(() => {
    const fetchCourseDetails = async () => {
      const response = await fetch("/assets/data/courses.json");
      const data = await response.json();

      const foundCourse = data.find(
        (course) => course.id === parseInt(courseId)
      );

      setCourse(foundCourse);
    };

    fetchCourseDetails();
  }, [courseId]);

  const renderStars = (rating) => {
    const totalStars = 5;
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;
    const stars = [];

    for (let i = 0; i < fullStars; i++) {
      stars.push(<span key={i}>★</span>);
    }

    if (halfStar) {
      stars.push(<span key='half'>☆</span>); // Optional: Use half-star if available
    }

    const emptyStars = totalStars - fullStars - (halfStar ? 1 : 0);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<span key={`empty-${i}`}>☆</span>);
    }

    return stars;
  };

  const convertDurationToMinutes = (duration) => {
    const timeParts = duration.split(" "); // Split by space
    let totalMinutes = 0;

    for (let i = 0; i < timeParts.length; i += 2) {
      const value = parseInt(timeParts[i], 10); // Get the numeric value
      const unit = timeParts[i + 1]; // Get the unit (hour/minute)

      if (unit.startsWith("hour")) {
        totalMinutes += value * 60; // Convert hours to minutes
      } else if (unit.startsWith("minute")) {
        totalMinutes += value; // Add minutes
      }
    }

    return totalMinutes; // Return total minutes
  };

  const calculateTotalDuration = (lessons) => {
    return lessons.reduce((total, lesson) => {
      return total + convertDurationToMinutes(lesson.duration);
    }, 0);
  };

  const formatTime = (totalMinutes) => {
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;
    return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(
      2,
      "0"
    )}`;
  };

  if (!course) return <div>Loading ...</div>;

  return (
    <div className='content-wrapper d-flex flex-wrap'>
      <div className='course-details d-flex gap-20'>
        <div className='course-info d-flex mb-20'>
          <img
            src={course.thumbnail}
            alt={course.title}
            className='course-image mr-20'
            width={200}
            height={200}
          />
          <div className='course-text'>
            <h1>{course.title}</h1>
            <p>{course.description}</p>
            <div className='course-rating d-flex align-c gap-20 c-gray '>
              <div className='stars'>{renderStars(course.rating)}</div>
              <span>({course.reviewsCount} reviews)</span>
            </div>
          </div>
        </div>
        <div className='enroll-now txt-c'>
          <p>Created: {course.creationDate}</p>
          <p>Self-Paced</p>
          <a href='#' className='enroll-btn btn-shape bg-blue c-white'>
            Enroll for Free
          </a>
        </div>
      </div>
      <div className='main-content bg-white rad-10 p-20'>
        <div className='about-course'>
          <h3>About this course</h3>
          <p>{course.about}</p>
        </div>
        <div className='what-learn'>
          <h3>What you'll learn</h3>
          <ul>
            {course.whatYouWillLearn.map((learn, index) => (
              <li key={index}>{learn}</li>
            ))}
          </ul>
        </div>
        <div className='instructors'>
          <h3>Instructors</h3>
          <div className='instructors-list d-flex'>
            {course.instructors.map((instructor, index) => (
              <div key={index} className='instructor txt-c'>
                <img
                  src={instructor.image}
                  alt={instructor.name}
                  className='rad-circle'
                  width={100}
                  height={100}
                />
                <div className='instructor-info'>
                  <h4 className='fs-15 mt-5 mb-5'>{instructor.name}</h4>
                  <p className='m-0 c-gray'>{instructor.specialty}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className='weekly-lessons-section'>
          <h3>Course content </h3>
          <div className='custom-accordion'>
            {course.weeklyLessons.map((week, index) => {
              const totalDuration = calculateTotalDuration(week.lessons);
              const totalHours = Math.floor(totalDuration / 60);
              const totalMinutes = totalDuration % 60;

              return (
                <div className='accordion-item' key={index}>
                  <div
                    className='accordion-header'
                    onClick={() => toggleAccordion(index)}
                  >
                    <h4>
                      <i
                        className={`fas fa-chevron-${
                          openIndex === index ? "up" : "down"
                        }`}
                      ></i>
                      Week {week.week}: {week.summary}
                    </h4>
                    <span>
                      {week.lessons.length} Lectrues -{totalHours}h{" "}
                      {`${totalMinutes == 0 ? "" : totalMinutes + "m"}`}
                    </span>
                  </div>
                  {openIndex === index && (
                    <div className='accordion-content'>
                      <ul>
                        {week.lessons.map((lesson, lessonIndex) => {
                          const lessonDurationInMinutes =
                            convertDurationToMinutes(lesson.duration);

                          const formattedLessonDuration = formatTime(
                            lessonDurationInMinutes
                          );
                          return (
                            <li key={lessonIndex} className='between-flex'>
                              {lesson.title}{" "}
                              <span>{formattedLessonDuration}</span>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className='course-informations'>
        <div className='details flex-center bg-white rad-10 p-20'>
          <ul className='details-list c-gray'>
            <li>
              <i className='fas fa-users'></i> {course.enrollment} learners
            </li>
            <li>
              <i className='fas fa-dollar-sign'></i> {course.price}
            </li>
            <li>
              <i className='fas fa-clock'></i> {course.duration}
            </li>
            <li>
              <i className='fas fa-hourglass-half'></i> 3-4 hours per week
            </li>
            <li>
              <i className='fas fa-graduation-cap'></i> {course.level}
            </li>
            <li>
              <i className='fas fa-flag'></i> {course.language}
            </li>
          </ul>
        </div>
        <div className='share-course txt-c'>
          <h3>Share this course with a friend</h3>
          <div className='social-icons'>
            <a
              href='https://facebook.com'
              target='_blank'
              aria-label='Facebook'
              className='facebook'
            >
              <i className='fab fa-facebook'></i>
            </a>
            <a
              href='https://twitter.com'
              target='_blank'
              aria-label='Twitter'
              className='twitter'
            >
              <i className='fab fa-twitter'></i>
            </a>
            <a
              href='https://instagram.com'
              target='_blank'
              aria-label='Instagram'
              className='instagram'
            >
              <i className='fab fa-instagram'></i>
            </a>
            <a
              href='https://linkedin.com'
              target='_blank'
              aria-label='LinkedIn'
              className='linkedin'
            >
              <i className='fab fa-linkedin'></i>
            </a>
            <a
              href='https://github.com'
              target='_blank'
              aria-label='GitHub'
              className='github'
            >
              <i className='fab fa-github'></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
