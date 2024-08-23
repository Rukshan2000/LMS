import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import NavBar from '../components/NavBar';
import background from '../assets/background.jpg';
import { imageMap } from '../utils/imageMap'; // Move imageMap to a separate file if needed
import courseData from '../jsons/courses.json';

function CourseCard({ course }) {
    const navigate = useNavigate();

    const handleViewDetails = () => {
        navigate(`/course-details/${course.courseId}`);
    };

    return (
        <div className="p-6 transition-shadow duration-300 bg-white rounded-lg shadow-lg hover:shadow-xl">
            <img src={imageMap[course.coverImage]} alt={course.name} className="object-cover w-full h-48 rounded-t-lg" />
            <h3 className="mt-4 text-2xl font-bold text-blue-500">{course.name}</h3>
            <p className="mt-2 text-lg">{course.description}</p>
            <p className="mt-4 font-semibold text-md">Instructor: {course.instructor}</p>
            <p className="mt-2 font-semibold text-md">Duration: {course.duration}</p>
            <motion.button
                onClick={handleViewDetails}
                className="px-6 py-2 mt-4 font-bold text-white bg-blue-500 rounded-lg hover:bg-blue-700"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >
                View Course Details
            </motion.button>
        </div>
    );
}



function Courses() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    // Set courses data from JSON file
    setCourses(courseData.courses);
  }, []);

  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = selectedFilter === 'All' || course.duration === selectedFilter;
    return matchesSearch && matchesFilter;
  });



  return (
    <motion.div
      className="font-poppins"
      style={{ backgroundImage: `url(${background})`, backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '100vh' }}
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <NavBar />
      <div className="container px-8 mx-auto lg:px-40">
        <section className="py-12 lg:py-20">
          <div className="flex flex-col items-center mb-8">
            <input
              type="text"
              placeholder="Search for a course..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-2 mb-4 border rounded-lg md:w-1/2 lg:w-1/3"
            />
            <select
              value={selectedFilter}
              onChange={(e) => setSelectedFilter(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg md:w-1/2 lg:w-1/3"
            >
              <option value="All">All Durations</option>
              <option value="4 weeks">4 weeks</option>
              <option value="5 weeks">5 weeks</option>
              <option value="6 weeks">6 weeks</option>
              <option value="8 weeks">8 weeks</option>
              <option value="12 weeks">12 weeks</option>
            </select>
          </div>
          <h2 className="mb-8 text-3xl font-bold text-center">Our Courses</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredCourses.map((course, index) => (
              <CourseCard key={index} course={course} />
            ))}
          </div>
        </section>
      </div>
    </motion.div>
  );
}

export default Courses;
