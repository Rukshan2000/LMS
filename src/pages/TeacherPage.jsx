import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import coursesData from '../jsons/courses.json';
import studentsData from '../jsons/students.json';
import teachersData from '../jsons/teachers.json';
import NavBar from '../components/NavBar';
import { motion } from 'framer-motion';
import { imageMap } from '../utils/imageMap'; // Import the imageMap

function TeacherPage() {
  const location = useLocation();
  const { teacherId } = location.state || {};

  const [selectedCourseId, setSelectedCourseId] = useState('');
  const [teacher, setTeacher] = useState(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [requestAmount, setRequestAmount] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    if (teacherId) {
      const teacherData = teachersData.teachers.find(t => t.id === teacherId);
      setTeacher(teacherData);
    }
  }, [teacherId]);

  const handleCourseChange = (event) => {
    setSelectedCourseId(event.target.value);
  };

  const handleOpenPopup = () => setIsPopupOpen(true);
  const handleClosePopup = () => setIsPopupOpen(false);

  const handleRequestAmountChange = (event) => {
    setRequestAmount(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    const courseDetails = courses.find(course => course.courseId === selectedCourseId);

    const totalIncomeBeforeFee = filteredStudents.reduce((acc, student) => {
      const course = student.purchasedCourses.find(course => course.courseId === selectedCourseId);
      return acc + (course ? parseFloat(courseDetails.price.replace('LKR ', '')) : 0);
    }, 0);

    const totalServiceFee = filteredStudents.length * 500;
    const totalIncomeAfterFee = totalIncomeBeforeFee - totalServiceFee;

    if (parseFloat(requestAmount) > totalIncomeAfterFee) {
      setError('Request amount cannot exceed available balance.');
    } else {
      setError('');
      // Handle successful cash-out request here
      alert(`Cash-out request for LKR ${requestAmount} submitted successfully.`);
      setRequestAmount('');
      handleClosePopup();
    }
  };

  if (!teacher) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <h2 className="text-2xl font-semibold text-gray-700">No teacher data available.</h2>
      </div>
    );
  }

  const courses = teacher.coursesTaught.map(courseInfo => {
    return coursesData.courses.find(course => course.courseId === courseInfo.courseId);
  });

  const filteredStudents = studentsData.students.filter(student =>
    student.purchasedCourses.some(course => course.courseId === selectedCourseId)
  );

  const courseDetails = courses.find(course => course.courseId === selectedCourseId);

  // Calculate total income before service fee
  const totalIncomeBeforeFee = filteredStudents.reduce((acc, student) => {
    const course = student.purchasedCourses.find(course => course.courseId === selectedCourseId);
    return acc + (course ? parseFloat(courseDetails.price.replace('LKR ', '')) : 0);
  }, 0);

  // Deduct LKR 500 per student
  const serviceFeePerStudent = 500;
  const totalServiceFee = filteredStudents.length * serviceFeePerStudent;
  const totalIncomeAfterFee = totalIncomeBeforeFee - totalServiceFee;

  // Calculate total payments made
  const totalPaymentsMade = teacher.coursesTaught
    .find(course => course.courseId === selectedCourseId)
    ?.paymentHistory.reduce((acc, payment) => acc + payment.amountPaid, 0) || 0;

  const availableBalance = totalIncomeAfterFee - totalPaymentsMade;

  return (
    <motion.div
      className="min-h-screen px-4 py-12 bg-gray-100 font-poppins"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <NavBar />

      <div className="container mx-auto">
        <h2 className="mb-8 text-3xl font-bold text-center">Welcome, {teacher.name}</h2>

        <div className="mb-6">
          <label htmlFor="courseFilter" className="block mb-2 text-lg font-semibold text-gray-700">Filter by Course</label>
          <select
            id="courseFilter"
            value={selectedCourseId}
            onChange={handleCourseChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select a course</option>
            {courses.map(course => (
              <option key={course.courseId} value={course.courseId}>
                {course.name}
              </option>
            ))}
          </select>
        </div>

        {selectedCourseId && (
          <>
            <h3 className="mb-4 text-2xl font-semibold">Course Details</h3>
            {courseDetails && (
              <div className="p-4 mb-8 bg-white rounded-lg shadow-lg">
                <img
                  src={imageMap[courseDetails.coverImage] || '/assets/default-course.jpg'} // Use imageMap to get the image
                  alt={courseDetails.name}
                  className="object-cover w-full h-40 mb-4 rounded"
                />
                <h4 className="text-xl font-semibold">{courseDetails.name}</h4>
                <p className="text-gray-700">{courseDetails.description}</p>
                <p className="text-gray-700">Instructor: {courseDetails.instructor}</p>
                <p className="text-gray-700">Duration: {courseDetails.duration}</p>
                <p className="text-gray-700">Price: {courseDetails.price}</p>
              </div>
            )}

            <h3 className="mb-4 text-2xl font-semibold">Students Enrolled</h3>
            {filteredStudents.length > 0 ? (
              <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-md">
                <thead>
                  <tr className="border-b border-gray-300">
                    <th className="px-4 py-2 text-left">Student ID</th>
                    <th className="px-4 py-2 text-left">Name</th>
                    <th className="px-4 py-2 text-left">Email</th>
                    <th className="px-4 py-2 text-left">Course</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredStudents.map(student => (
                    <tr key={student.id} className="border-b border-gray-200">
                      <td className="px-4 py-2">{student.id}</td>
                      <td className="px-4 py-2">{student.name}</td>
                      <td className="px-4 py-2">{student.email}</td>
                      <td className="px-4 py-2">
                        {student.purchasedCourses.find(course => course.courseId === selectedCourseId)
                          ? courseDetails.name
                          : 'N/A'}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <p className="text-gray-700">No students enrolled in this course.</p>
            )}

            <div className="my-8">
              <h3 className="text-2xl font-semibold">Available Amount for Cash-Out</h3>
              <p className="text-lg">
                Total Income (Before Service Fee): LKR {totalIncomeBeforeFee}
              </p>
              <p className="text-lg">
                Service Fee (LKR 500 per student): LKR {totalServiceFee}
              </p>
              <p className="text-lg">
                Total Income (After Service Fee): LKR {totalIncomeAfterFee}
              </p>
              <p className="text-lg">
                Total Payments Made: LKR {totalPaymentsMade}
              </p>
              <p className="text-lg">
                Available Balance for Cash-Out: LKR {availableBalance}
              </p>
            </div>

            <button
              onClick={handleOpenPopup}
              className="px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600"
            >
              Request Cash-Out
            </button>

            {isPopupOpen && (
              <div className="fixed inset-0 z-50 flex items-center justify-center">
                <div className="p-6 bg-white rounded-lg shadow-lg w-96">
                  <h3 className="mb-4 text-xl font-semibold">Request Cash-Out</h3>
                  <form onSubmit={handleFormSubmit}>
                    <label htmlFor="amount" className="block mb-2 text-lg font-semibold">Amount</label>
                    <input
                      type="number"
                      id="amount"
                      value={requestAmount}
                      onChange={handleRequestAmountChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm"
                      min="0"
                    />
                    {error && <p className="mt-2 text-red-500">{error}</p>}
                    <div className="mt-4">
                      <button
                        type="submit"
                        className="px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600"
                      >
                        Submit Request
                      </button>
                      <button
                        type="button"
                        onClick={handleClosePopup}
                        className="px-4 py-2 ml-4 text-gray-700 bg-gray-300 rounded-lg hover:bg-gray-400"
                      >
                        Cancel
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </motion.div>
  );
}

export default TeacherPage;
