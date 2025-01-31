

import React, { useState } from 'react';
import { useData } from '../utils/DataContext';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import ClinicianRegistration from '../forms/ClinicianRegistration';
import TeacherRegistration from '../forms/TeacherRegistration';
import StudentRegistration from '../forms/StudentRegistration';
import './DashBoard.css';

const Dashboard = () => {
  const { userData } = useData(); // Get userData from context
  const [open, setOpen] = useState(false);
  const [selectedForm, setSelectedForm] = useState(null);

  const handleCreateClick = () => {
    switch (userData.role) {
      case 'Institute':
        setSelectedForm(<ClinicianRegistration />);
        break;
      case 'School':
        setSelectedForm(<TeacherRegistration />);
        break;
      case 'Teacher':
        setSelectedForm(<StudentRegistration />);
        break;
      default:
        setSelectedForm(null);
    }
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedForm(null);
  };

  const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: '#333',
    boxShadow: 24,
    p: 4,
    borderRadius: '8px',
  };

  return (
    <div className="custom-dashboard">
      <main className="custom-content">
        <header className="custom-header-dashboard">
          <h1>Welcome to EarlySpark</h1>
        </header>
        <section className="custom-overview">
          {/* User card with a "Create" button */}
          <div className="custom-card">
            <h3>User</h3>
            {userData.role?.toLowerCase() !== 'clinician' &&
              userData.role?.toLowerCase() !== 'nodal' && (
                <button onClick={handleCreateClick} className="custom-create-button">
                  Create
                </button>
              )}
          </div>
        </section>
      </main>
      {/* Modal */}
      <Modal open={open} onClose={handleClose}>
        <Box sx={modalStyle}>
          <button
            className="close-modal-btn"
            onClick={handleClose}
            style={{
              position: 'absolute',
              top: '10px',
              right: '10px',
              backgroundColor: '#333',
              color: 'white',
              border: 'none',
              borderRadius: '50%',
              cursor: 'pointer',
              width: '30px',
              height: '30px',
              fontSize: '16px',
              fontWeight: 'bold',
              textAlign: 'center',
              lineHeight: '30px',
            }}
          >
            X
          </button>
          {selectedForm}
        </Box>
      </Modal>
    </div>
  );
};

export default Dashboard;

// import React, { useState } from 'react';
// import { useData } from '../utils/DataContext';
// import Modal from '@mui/material/Modal';
// import Box from '@mui/material/Box';
// import ClinicianRegistration from '../forms/ClinicianRegistration';
// import TeacherRegistration from '../forms/TeacherRegistration';
// import StudentRegistration from '../forms/StudentRegistration';
// import './DashBoard.css';

// const Dashboard = () => {
//   const { userData } = useData(); // Get userData from context
//   const [open, setOpen] = useState(false);
//   const [selectedForm, setSelectedForm] = useState(null);

//   const handleCreateClick = () => {
//     switch (userData.role) {
//       case 'Institute':
//         setSelectedForm(<ClinicianRegistration />);
//         break;
//       case 'School':
//         setSelectedForm(<TeacherRegistration />);
//         break;
//       case 'Teacher':
//         setSelectedForm(<StudentRegistration />);
//         break;
//       default:
//         setSelectedForm(null);
//     }
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//     setSelectedForm(null);
//   };

//   const modalStyle = {
//     position: 'absolute',
//     top: '50%',
//     left: '50%',
//     transform: 'translate(-50%, -50%)',
//     width: 400,
//     bgcolor: '#333',
//     boxShadow: 24,
//     p: 4,
//     borderRadius: '8px',
//   };

//   return (
//     <div className="custom-dashboard">
//       <main className="custom-content">
//         <header className="custom-header-dashboard">
//           <h1>Welcome to EarlySpark</h1>
//         </header>

//         {/* Institute-specific section */}
//         {userData.role?.toLowerCase() === 'institute' && (
//           <section className="custom-overview">
//             <div className="custom-card-grid">
//               <div className="custom-card">
//                 <h3>Clinician List</h3>
//                 <button onClick={handleCreateClick} className="custom-create-button">
//                   View Clinicians
//                 </button>
//               </div>

//               <div className="custom-card">
//                 <h3>School List</h3>
//                 <button onClick={handleCreateClick} className="custom-create-button">
//                   View Schools
//                 </button>
//               </div>

//               <div className="custom-card">
//                 <h3>Reports</h3>
//                 <button onClick={handleCreateClick} className="custom-create-button">
//                   View Reports
//                 </button>
//               </div>
//             </div>
//           </section>
//         )}

//         {/* Clinician-specific section */}
//         {userData.role?.toLowerCase() === 'clinician' && (
//           <section className="custom-overview">
//             <div className="custom-card-grid">
//               <div className="custom-card">
//                 <h3>Clinician List</h3>
//                 <button onClick={handleCreateClick} className="custom-create-button">
//                   View Clinicians
//                 </button>
//               </div>

//               <div className="custom-card">
//                 <h3>Student List</h3>
//                 <button onClick={handleCreateClick} className="custom-create-button">
//                   View Students
//                 </button>
//               </div>

//               <div className="custom-card">
//                 <h3>Reports</h3>
//                 <button onClick={handleCreateClick} className="custom-create-button">
//                   View Reports
//                 </button>
//               </div>
//             </div>
//           </section>
//         )}

//         {/* Other roles section */}
//         {userData.role?.toLowerCase() !== 'institute' && userData.role?.toLowerCase() !== 'clinician' && (
//           <section className="custom-overview">
//             <div className="custom-card">
//               <h3>User</h3>
//               {userData.role?.toLowerCase() !== 'clinician' && userData.role?.toLowerCase() !== 'nodal' && (
//                 <button onClick={handleCreateClick} className="custom-create-button">
//                   Create
//                 </button>
//               )}
//             </div>
//           </section>
//         )}
//       </main>

//       {/* Modal */}
//       <Modal open={open} onClose={handleClose}>
//         <Box sx={modalStyle}>
//           <button
//             className="close-modal-btn"
//             onClick={handleClose}
//             style={{
//               position: 'absolute',
//               top: '10px',
//               right: '10px',
//               backgroundColor: '#333',
//               color: 'white',
//               border: 'none',
//               borderRadius: '50%',
//               cursor: 'pointer',
//               width: '30px',
//               height: '30px',
//               fontSize: '16px',
//               fontWeight: 'bold',
//               textAlign: 'center',
//               lineHeight: '30px',
//             }}
//           >
//             X
//           </button>
//           {selectedForm}
//         </Box>
//       </Modal>
//     </div>
//   );
// };

// export default Dashboard;
