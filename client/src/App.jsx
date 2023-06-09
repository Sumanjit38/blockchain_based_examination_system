//import logo from './logo.svg';
import React from 'react';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './Login/Login'
import Register from './Register/Register'

// Admin part
import Dashboard from './Admin/Pages/Dashboard/Dashboard';
import Teachers from '../src/Admin/Pages/Management/teachers/Teachers';
import Students from '../src/Admin/Pages/Management/students/Students';
import Departments from '../src/Admin/Pages/Management/departments/Departments';
import UserManagement from '../src/Admin/Pages/Management/userManagement/UserManagement';

// Teacher part
import TeacherDashboard from './Teacher/Pages/Dashboard/TeacherDashboard';
import TeacherManagement from './Teacher/Pages/Management/TeacherManagement';
import TeacherDepartments from './Teacher/Pages/Management/TeacherDepartments';
import Courses from './Teacher/Pages/Management/Courses';
import Semester from './Teacher/Pages/Management/Semester';
import Subjects from './Teacher/Pages/Management/Subjects';
import Marks from './Teacher/Pages/Management/Marks';
import TeacherStudents from './Teacher/Pages/Management/TeacherStudents';

// Student part
import StudentDashboard from './Student/Pages/Dashboard/StudentDashboard';
import StudentCourses from './Student/Pages/Management/StudentCourses';
import StudentSemesters from './Student/Pages/Management/StudentSemesters';
import Student from './Student/Pages/Management/Student';
import StudentManagement from './Student/Pages/Management/StudentManagement';

//import Students from "./Teacher/Pages/Management/Students"
//import Profile from './Components/students/Profile'

const router = createBrowserRouter ([
  {
    path: '/',
    element: <div><Login /></div>
  },
  {
    path: '/register',
    element: <div><Register /></div>
  },
  {
    path: '/admin/dashboard',
    element: <div><Dashboard /></div>
  },
  {
    path: '/teachers',
    element: <div><Dashboard WrappedComponent={Teachers}/></div>
  },
  {
    path: '/students',
    element: <div><Dashboard WrappedComponent={Students}/></div>
  },
  {
    path: '/departments',
    element: <div><Dashboard WrappedComponent={Departments}/></div>
  },
  {
    path: '/user-management',
    element: <div><Dashboard WrappedComponent={UserManagement}/></div>
  },
  {
    path: '/teacher-management',
    element: <div><TeacherDashboard WrappedComponent={TeacherManagement} /></div>
  },
  {
    path: '/teacher-departments',
    element: <div><TeacherDashboard WrappedComponent={TeacherDepartments}/></div>
  },
  {
    path: '/teacher-courses',
    element: <div><TeacherDashboard WrappedComponent={Courses}/></div>
  },
  {
    path: '/teacher-semester',
    element: <div><TeacherDashboard WrappedComponent={Semester}/></div>
  },
  {
    path: '/teacher-subjects',
    element: <div><TeacherDashboard WrappedComponent={Subjects}/></div>
  },
  {
    path: '/teacher-marks',
    element: <div><TeacherDashboard WrappedComponent={Marks}/></div>
  },
  {
    path: '/teacher-students',
    element: <div><TeacherDashboard WrappedComponent={TeacherStudents}/></div>
  },
  {
    path: '/student-courses',
    element: <div><StudentDashboard WrappedComponent={StudentCourses}/></div>
  },
  {
    path: '/student-semesters',
    element: <div><StudentDashboard WrappedComponent={StudentSemesters}/></div>
  },
  {
    path: '/student',
    element: <div><StudentDashboard WrappedComponent={Student}/></div>
  },
  {
    path: '/student-management',
    element: <div><StudentDashboard WrappedComponent={StudentManagement}/></div>
  }
  
])

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
