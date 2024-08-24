import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import teachersData from '../jsons/teachers.json'; // Import teacher data
import NavBar from '../components/NavBar'; // Import NavBar component
import backgroundImage from '../assets/bg2.jpg';
import { motion } from 'framer-motion'; // Import motion from framer-motion

function TeacherLogin() {
  const [teacherId, setTeacherId] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    const teacher = teachersData.teachers.find(t => t.id === teacherId);

    if (teacher && teacher.password === password) {
      // Navigate to TeacherPage with teacherId
      navigate('/teacherpage', { state: { teacherId } });
      setError('');
    } else {
      setError('Invalid teacher ID or password.');
    }
  };

  return (
    <motion.div
      className="flex flex-col min-h-screen bg-center bg-cover"
      style={{ backgroundImage: `url(${backgroundImage})` }}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <NavBar /> {/* Add the NavBar component */}
      
      <div className="flex flex-col items-center justify-center flex-grow py-12 bg-gray-900 bg-opacity-40">
        <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
          <h2 className="mb-6 text-3xl font-extrabold text-center text-gray-900">Welcome Back, Teacher!</h2>
          <p className="mb-6 text-center text-gray-700">
            Log in to manage your courses and track your students' progress.
          </p>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Teacher ID"
              value={teacherId}
              onChange={(e) => setTeacherId(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-6">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            onClick={handleLogin}
            className="w-full py-2 font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Login
          </button>
          {error && <p className="mt-4 text-center text-red-500">{error}</p>}
        </div>
      </div>
    </motion.div>
  );
}

export default TeacherLogin;
