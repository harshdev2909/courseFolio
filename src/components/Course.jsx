import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Course = () => {
  const [course, setCourse] = useState([]);
  const token = window.localStorage.getItem('token');

  useEffect(() => {
    async function Fetch() {
      try {
        const courseR = await axios.get('http://localhost:3000/course/preview', {
          headers: {
            Authorization: `Bearer ${token}`, // Adding the token to the request header if required
          },
        });
        const response = courseR.data.courses;
        console.log(response); // Check the structure of the response

        // Assuming `response` contains an array of courses.
        setCourse(response);
      } catch (error) {
        console.error('Error fetching course data:', error);
      }
    }

    Fetch();
  }, [token]);

  return (
    <div className="">
      <div className="flex justify-center">
        <h1 className="text-3xl font-bold font-serif">Courses</h1>
      </div>
      <div className="flex gap-4 mt-5 justify-center text-white">
        {course.length > 0 ? (
          course.map((item) => (
            <div key={item._id} className="bg-black h-[300px] w-[300px] rounded-3xl">
              <h1 className="text-center mt-2 p-3">{item.title}</h1> {/* Display the course name */}
              <div className="w-[250px] flex m-5 rounded-lg">
                <img className="rounded-lg" src={item.imageUrl} alt={item.name} />
                {/* Assuming `item.image` holds the URL for the course image */}
              </div>
              <div className="text-white flex justify-center mt-3">
                <button className="bg-red-300 rounded-xl h-[40px] w-[110px]">
                  Buy Course
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-white">No courses available</p> // Show a message if there are no courses
        )}
      </div>
    </div>
  );
};

export default Course;
