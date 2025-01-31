// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import LoginPage from './pages/LoginPage';
// import ForgotPassword from './pages/ForgotPassword';
// import ChangePassword from './pages/ChangePassword';
// import NodalCenterForm from './forms/NodalCenterForm'
// import InstituteRegistration from './forms/InstituteRegistration';
// import ClinicianRegistration from './forms/ClinicianRegistration';
// import SchoolRegistration from './forms/SchoolRegistration';
// import TeacherRegistration from './forms/TeacherRegistration';
// import StudentRegistration from './forms/StudentRegistration';
// import Dashboard   from './pages/DashBoard';
// import './App.css';
// import { DataContextProvider } from './utils/DataContext';
// import Library from './pages/Library';
// import LibraryVideo from './pages/LibraryVideo';
// import ScreeningQuestionnaire from './forms/ScreeningQuestionnaire';

// const App = () => {
//   return (
//     <DataContextProvider> 
//     <Router>
//       <Routes>
//         <Route path="/" element={<LoginPage />} />
//         <Route path="/forgot-password" element={<ForgotPassword />} />
//         <Route path="/change-password" element={<ChangePassword />} />
//         <Route path="/nodalcenter-form" element={<NodalCenterForm />} />
//         <Route path="/institute-registration" element={<InstituteRegistration />} />
//         <Route path="/clinic" element={<ClinicianRegistration />} />
//         <Route path="/school-registration" element={<SchoolRegistration />} />
//         <Route path="/teacher-registration" element={<TeacherRegistration />} />
//         <Route path="/student-registration" element={<StudentRegistration />} />  
//         <Route path="/dashboard" element={<Dashboard />} />   
//         <Route path="/library"  element={<Library/>}/>
//         <Route path="/libraryvideo" element={<LibraryVideo/>}/>
//         <Route path="/screening" element={<ScreeningQuestionnaire/>}/>
//       </Routes>
//     </Router>
//     </DataContextProvider> 
//   );
// };

// export default App;


import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import ForgotPassword from './pages/ForgotPassword';
import ChangePassword from './pages/ChangePassword';
import NodalCenterForm from './forms/NodalCenterForm';
import InstituteRegistration from './forms/InstituteRegistration';
import ClinicianRegistration from './forms/ClinicianRegistration';
import SchoolRegistration from './forms/SchoolRegistration';
import TeacherRegistration from './forms/TeacherRegistration';
import StudentRegistration from './forms/StudentRegistration';
import Dashboard from './pages/DashBoard';
import './App.css';
import { DataContextProvider } from './utils/DataContext';
import Library from './pages/Library';
import LibraryVideo from './pages/LibraryVideo';
import ScreeningQuestionnaire from './forms/ScreeningQuestionnaire';
import Navbar from './components/Navbar'; // Import Navbar
import Footer from './components/Footer'; // Import Footer
import MaterialPage from './pages/MaterialPage';

const Layout = ({ children }) => {
  const location = useLocation(); // Get current location

  return (
    <div>
      {/* Conditionally render Navbar and Footer based on the current route */}
      {location.pathname !== "/" && <Navbar />} {/* Don't show navbar on LoginPage */}
      <div>{children}</div> {/* Render children components here */}
      {location.pathname !== "/" && <Footer />} {/* Don't show footer on LoginPage */}
    </div>
  );
};

const App = () => {
  return (
    <DataContextProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/forgot-password" element= {<ForgotPassword />} />
          <Route path="/change-password" element={<ChangePassword />} />
          <Route path="/nodalcenter-form" element={<NodalCenterForm />} />
          <Route path="/institute-registration" element={<InstituteRegistration />} />
          <Route path="/clinic" element={<ClinicianRegistration />} />
          <Route path="/school-registration" element={<Layout><SchoolRegistration /></Layout>} />
          <Route path="/teacher-registration" element={<TeacherRegistration />} />
          <Route path="/student-registration" element={<StudentRegistration />} />
          <Route path="/dashboard" element={<Layout><Dashboard /></Layout>} />
          <Route path="/library" element={<Layout><Library /></Layout>} />
          <Route path="/libraryvideo" element={<Layout><LibraryVideo /></Layout>} />
          <Route path="/screening" element={<ScreeningQuestionnaire />} />
          <Route path="/material" element={ <MaterialPage/>} />
        </Routes>
      </Router>
    </DataContextProvider>
  );
};

export default App;
