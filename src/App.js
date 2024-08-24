import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Pages
import LandingPage from './pages/LandingPage';
import CoursesPage from './pages/CoursesPage';
import AboutPage from './pages/AboutPage';
import BecomeTeacherPage from './pages/BecomeTeacherPage';
import Login from './pages/Login';
import MyPage from './pages/MyPage.jsx';
import DisplayCourse from './pages/DisplayCourse.jsx';
import TeacherLogin from './pages/TeacherLogin.jsx';
import TeacherPage from './pages/TeacherPage.jsx';


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
        <Route path="/teacher" element={<BecomeTeacherPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/course-details/:courseId" element={<DisplayCourse />} />
        <Route path="/teacher-login" element={<TeacherLogin />} />
        <Route path="/teacherpage" element={<TeacherPage />} />



        <Route path="/C001" element={<C001 />} />
        </Routes>
    </Router>
  );
}

export default App;
