import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Pages
import LandingPage from './pages/LandingPage';
import CoursesPage from './pages/CoursesPage';
import AboutPage from './pages/AboutPage';
import BlogPage from './pages/BlogPage';
import Login from './pages/Login';
import MyPage from './pages/MyPage.jsx';
import DisplayCourse from './pages/DisplayCourse.jsx';


//courses

import C001 from './Corses/C001.jsx';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<LandingPage />} />
        <Route path="/courses" element={<CoursesPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/course-details/:courseId" element={<DisplayCourse />} />



        <Route path="/C001" element={<C001 />} />
        </Routes>
    </Router>
  );
}

export default App;
