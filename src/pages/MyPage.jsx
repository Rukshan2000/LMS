import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import coursesData from '../jsons/courses.json';
import { motion } from 'framer-motion';
import NavBar from '../components/NavBar';
import backgroundImage from '../assets/bg2.jpg';

// Import images
import reactImage from '../assets/wad.jpg';
import javascriptImage from '../assets/wad.jpg';
// Add more imports as needed

// Map image names to import images
const imageMap = {
  'react.jpg': reactImage,
  'javascript.jpg': javascriptImage,
  // Add more mappings as needed
};

function MyPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const { purchasedCourses } = location.state || {};

  if (!purchasedCourses || purchasedCourses.length === 0) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <h2 className="text-2xl font-semibold text-gray-700">No courses purchased.</h2>
      </div>
    );
  }

  return (
    <motion.div
      className="min-h-screen px-4 py-12 font-poppins"
      style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <NavBar />
      <div className="container px-4 mx-auto">
        <h2 className="mb-8 text-3xl font-bold text-center text-white">Your Purchased Courses</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {purchasedCourses.map((course, index) => {
            const courseDetails = coursesData.courses.find(c => c.courseId === course.courseId);

            if (!courseDetails) return null;

            const handleViewDetails = () => {
              navigate(`/${courseDetails.courseId}`);
            };

            return (
              <motion.div
                key={index}
                className="p-6 bg-white rounded-lg shadow-lg"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <img
                  src={imageMap[courseDetails.coverImage]}
                  alt={courseDetails.name}
                  className="object-cover w-full h-48 rounded-t-lg"
                />
                <h4 className="mb-2 text-xl font-semibold text-gray-800">{courseDetails.name}</h4>
                <p className="mb-2 text-gray-600">{courseDetails.description}</p>
                <p className="text-gray-500">Duration: {courseDetails.duration}</p>
                <motion.button
                  onClick={handleViewDetails}
                  className="px-4 py-2 mt-4 font-bold text-white bg-blue-500 rounded-lg hover:bg-blue-700"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Go to Course
                </motion.button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}

export default MyPage;
