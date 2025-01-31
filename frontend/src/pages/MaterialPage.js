// import React, { useState } from "react";
// import "./MaterialPage.css";

// const initialData = [
//   {
//     id: "dept1",
//     name: "Cardiology",
//     diagnoses: [
//       {
//         id: "diag1",
//         name: "Heart Disease",
//         chapters: [
//           {
//             id: "chap1",
//             name: "Chapter 1",
//             subchapters: [
//               { id: "sub1", name: "Subchapter 1A" },
//               { id: "sub2", name: "Subchapter 1B" }
//             ]
//           }
//         ]
//       }
//     ]
//   },
//   {
//     id: "dept2",
//     name: "Nurology",
//     diagnoses: [
//       {
//         id: "diag1",
//         name: "Heart Disease",
//         chapters: [
//           {
//             id: "chap1",
//             name: "Chapter 1",
//             subchapters: [
//               { id: "sub1", name: "Subchapter 1A" },
//               { id: "sub2", name: "Subchapter 1B" }
//             ]
//           }
//         ]
//       }
//     ]
//   }
// ];

// const MaterialPage = () => {
//   const [ data, setData] = useState(initialData);


//   const [selected, setSelected] = useState({
//     departmentId: "",
//     diagnosisId: "",
//     chapterId: "",
//     subchapterId: ""
//   });
  
//   const [newEntries, setNewEntries] = useState({
//     department: "",
//     diagnosis: "",
//     chapter: "",
//     subchapter: ""
//   });

//   const [videoLink, setVideoLink] = useState("");
//   const [documents, setDocuments] = useState([]);

//   // Helper functions to get current selections

//   const currentDepartment = data.find(d => d.id === selected.departmentId);
//   const currentDiagnosis = currentDepartment?.diagnoses?.find(d => d.id === selected.diagnosisId);
//   const currentChapter = currentDiagnosis?.chapters?.find(c => c.id === selected.chapterId);

//   const handleSelect = (level, value) => {
//     setSelected(prev => ({
//       ...prev,
//       [level]: value,
//       // Reset downstream selections
//       ...(level === "departmentId" && { 
//         diagnosisId: "", 
//         chapterId: "", 
//         subchapterId: "" 
//       }),
//       ...(level === "diagnosisId" && { 
//         chapterId: "", 
//         subchapterId: "" 
//       }),
//       ...(level === "chapterId" && { 
//         subchapterId: "" 
//       })
//     }));
//   };

//   const addNewEntry = (level) => {
//     const newName = newEntries[level];
//     if (!newName) return;

//     setData(prev => {
//       const newData = [...prev];
//       switch(level) {
//         case "department":
//           newData.push({
//             id: `dept${Date.now()}`,
//             name: newName,
//             diagnoses: []
//           });
//           break;

//         case "diagnosis":
//           const deptIndex = newData.findIndex(d => d.id === selected.departmentId);
//           if (deptIndex > -1) {
//             newData[deptIndex].diagnoses.push({
//               id: `diag${Date.now()}`,
//               name: newName,
//               chapters: []
//             });
//           }
//           break;

//         case "chapter":
//           const diagIndex = currentDepartment?.diagnoses?.findIndex(d => d.id === selected.diagnosisId);
//           if (diagIndex > -1) {
//             newData.forEach(dept => {
//               if (dept.id === selected.departmentId) {
//                 dept.diagnoses[diagIndex].chapters.push({
//                   id: `chap${Date.now()}`,
//                   name: newName,
//                   subchapters: []
//                 });
//               }
//             });
//           }
//           break;

//         case "subchapter":
//           const chapIndex = currentDiagnosis?.chapters?.findIndex(c => c.id === selected.chapterId);
//           if (chapIndex > -1) {
//             newData.forEach(dept => {
//               if (dept.id === selected.departmentId) {
//                 dept.diagnoses.forEach(diag => {
//                   if (diag.id === selected.diagnosisId) {
//                     diag.chapters[chapIndex].subchapters.push({
//                       id: `sub${Date.now()}`,
//                       name: newName
//                     });
//                   }
//                 });
//               }
//             });
//           }
//           break;
//       }
//       return newData;
//     });

//     setNewEntries(prev => ({ ...prev, [level]: "" }));
//   };

//   return (
//     <div className="material-page">
//       <h2>Medical Content Manager</h2>

//       {/* Department Section */}
//       <div className="form-group">
//         <label>Department</label>
//         <select
//           value={selected.departmentId}
//           onChange={(e) => handleSelect("departmentId", e.target.value)}
//         >
//           <option value="">Select Department</option>
//           {data.map(dept => (
//             <option key={dept.id} value={dept.id}>{dept.name}</option>
//           ))}
//         </select>
//         <div className="new-entry">
//           <input
//             type="text"
//             placeholder="New department"
//             value={newEntries.department}
//             onChange={(e) => setNewEntries(p => ({ ...p, department: e.target.value }))}
//           />
//           <button onClick={() => addNewEntry("department")}>Add</button>
//         </div>
//       </div>

//       {/* Diagnosis Section */}
//       <div className="form-group">
//         <label>Diagnosis</label>
//         <select
//           value={selected.diagnosisId}
//           onChange={(e) => handleSelect("diagnosisId", e.target.value)}
//           disabled={!selected.departmentId}
//         >
//           <option value="">Select Diagnosis</option>
//           {currentDepartment?.diagnoses?.map(diag => (
//             <option key={diag.id} value={diag.id}>{diag.name}</option>
//           ))}
//         </select>
//         {selected.departmentId && (
//           <div className="new-entry">
//             <input
//               type="text"
//               placeholder="New diagnosis"
//               value={newEntries.diagnosis}
//               onChange={(e) => setNewEntries(p => ({ ...p, diagnosis: e.target.value }))}
//             />
//             <button onClick={() => addNewEntry("diagnosis")}>Add</button>
//           </div>
//         )}
//       </div>

//       {/* Chapter Section */}
//       <div className="form-group">
//         <label>Chapter</label>
//         <select
//           value={selected.chapterId}
//           onChange={(e) => handleSelect("chapterId", e.target.value)}
//           disabled={!selected.diagnosisId}
//         >
//           <option value="">Select Chapter</option>
//           {currentDiagnosis?.chapters?.map(chap => (
//             <option key={chap.id} value={chap.id}>{chap.name}</option>
//           ))}
//         </select>
//         {selected.diagnosisId && (
//           <div className="new-entry">
//             <input
//               type="text"
//               placeholder="New chapter"
//               value={newEntries.chapter}
//               onChange={(e) => setNewEntries(p => ({ ...p, chapter: e.target.value }))}
//             />
//             <button onClick={() => addNewEntry("chapter")}>Add</button>
//           </div>
//         )}
//       </div>

//       {/* Subchapter Section */}
//       <div className="form-group">
//         <label>Subchapter</label>
//         <select
//           value={selected.subchapterId}
//           onChange={(e) => handleSelect("subchapterId", e.target.value)}
//           disabled={!selected.chapterId}
//         >
//           <option value="">Select Subchapter</option>
//           {currentChapter?.subchapters?.map(sub => (
//             <option key={sub.id} value={sub.id}>{sub.name}</option>
//           ))}
//         </select>
//         {selected.chapterId && (
//           <div className="new-entry">
//             <input
//               type="text"
//               placeholder="New subchapter"
//               value={newEntries.subchapter}
//               onChange={(e) => setNewEntries(p => ({ ...p, subchapter: e.target.value }))}
//             />
//             <button onClick={() => addNewEntry("subchapter")}>Add</button>
//           </div>
//         )}
//       </div>

//       {/* Media Section */}
//       <div className="form-group">
//         <label>Video Link</label>
//         <input
//           type="url"
//           value={videoLink}
//           onChange={(e) => setVideoLink(e.target.value)}
//           placeholder="Enter video URL"
//         />
//       </div>

//       <div className="form-group">
//         <label>Upload Documents</label>
//         <input
//           type="file"
//           multiple
//           onChange={(e) => setDocuments([...e.target.files])}
//         />
//         {documents.length > 0 && (
//           <div className="file-list">
//             Files: {documents.map(f => f.name).join(', ')}
//           </div>
//         )}
//       </div>

//       <button 
//         className="submit-btn" 
//         onClick={() => console.log("Final Data:", data)}
//       >
//         Submit
//       </button>
//     </div>
//   );
// };

// export default MaterialPage;

import React, { useState } from "react";
import "./MaterialPage.css";

const MaterialPage = () => {
  // Main data structure
  const [departments, setDepartments] = useState([
    {
      id: "dept1",
      name: "Cardiology",
      diagnoses: [
        {
          id: "diag1",
          name: "Heart Disease",
          chapters: [
            {
              id: "chap1",
              name: "Chapter 1",
              subchapters: [
                { id: "sub1", name: "Subchapter 1A" },
                { id: "sub2", name: "Subchapter 1B" }
              ]
            }
          ]
        }
      ]
    }
  ]);

  // Selected values
  const [selected, setSelected] = useState({
    departmentId: "",
    diagnosisId: "",
    chapterId: "",
    subchapterId: ""
  });

  // New entry inputs
  const [newEntry, setNewEntry] = useState({
    department: "",
    diagnosis: "",
    chapter: "",
    subchapter: ""
  });

  const [videoLink, setVideoLink] = useState("");
  const [documents, setDocuments] = useState([]);

  // Handle selection changes
  const handleSelect = (level, value) => {
    const newState = { ...selected };
    
    // Reset downstream selections
    switch(level) {
      case "departmentId":
        newState.diagnosisId = "";
        newState.chapterId = "";
        newState.subchapterId = "";
        break;
      case "diagnosisId":
        newState.chapterId = "";
        newState.subchapterId = "";
        break;
      case "chapterId":
        newState.subchapterId = "";
        break;
    }
    
    newState[level] = value;
    setSelected(newState);
  };

  // Add new entries
  const addNewEntry = (level) => {
    const value = newEntry[level].trim();
    if (!value) return;

    const newDepartments = [...departments];
    
    switch(level) {
      case "department":
        newDepartments.push({
          id: `dept${Date.now()}`,
          name: value,
          diagnoses: []
        });
        break;
      
      case "diagnosis":
        const deptIndex = newDepartments.findIndex(d => d.id === selected.departmentId);
        if (deptIndex > -1) {
          newDepartments[deptIndex].diagnoses.push({
            id: `diag${Date.now()}`,
            name: value,
            chapters: []
          });
        }
        break;
      
      case "chapter":
        const dept = newDepartments.find(d => d.id === selected.departmentId);
        if (dept) {
          const diagIndex = dept.diagnoses.findIndex(d => d.id === selected.diagnosisId);
          if (diagIndex > -1) {
            dept.diagnoses[diagIndex].chapters.push({
              id: `chap${Date.now()}`,
              name: value,
              subchapters: []
            });
          }
        }
        break;
      
      case "subchapter":
        const deptWithSub = newDepartments.find(d => d.id === selected.departmentId);
        if (deptWithSub) {
          const diag = deptWithSub.diagnoses.find(d => d.id === selected.diagnosisId);
          if (diag) {
            const chapIndex = diag.chapters.findIndex(c => c.id === selected.chapterId);
            if (chapIndex > -1) {
              diag.chapters[chapIndex].subchapters.push({
                id: `sub${Date.now()}`,
                name: value
              });
            }
          }
        }
        break;
    }

    setDepartments(newDepartments);
    setNewEntry(prev => ({ ...prev, [level]: "" }));
  };

  // Handle form submission
  const handleSubmit = () => {
    const formData = {
      department: departments.find(d => d.id === selected.departmentId)?.name,
      diagnosis: departments.find(d => d.id === selected.departmentId)
        ?.diagnoses.find(d => d.id === selected.diagnosisId)?.name,
      chapter: departments.find(d => d.id === selected.departmentId)
        ?.diagnoses.find(d => d.id === selected.diagnosisId)
        ?.chapters.find(c => c.id === selected.chapterId)?.name,
      subchapter: departments.find(d => d.id === selected.departmentId)
        ?.diagnoses.find(d => d.id === selected.diagnosisId)
        ?.chapters.find(c => c.id === selected.chapterId)
        ?.subchapters.find(s => s.id === selected.subchapterId)?.name,
      videoLink,
      documents: documents.map(file => file.name)
    };
    
    console.log("Submitted Data:", formData);
    // Add your API call here
  };

  // Get current selections
  const currentDepartment = departments.find(d => d.id === selected.departmentId);
  const currentDiagnosis = currentDepartment?.diagnoses?.find(d => d.id === selected.diagnosisId);
  const currentChapter = currentDiagnosis?.chapters?.find(c => c.id === selected.chapterId);

  return (
    <div className="material-page">
      <h2>Medical Content Manager</h2>

      {/* Department Section */}
      <div className="form-group">
        <label>Department</label>
        <select
          value={selected.departmentId}
          onChange={(e) => handleSelect("departmentId", e.target.value)}
        >
          <option value="">Select Department</option>
          {departments.map(dept => (
            <option key={dept.id} value={dept.id}>{dept.name}</option>
          ))}
        </select>
        <div className="new-entry">
          <input
            type="text"
            placeholder="New department"
            value={newEntry.department}
            onChange={(e) => setNewEntry(p => ({ ...p, department: e.target.value }))}
          />
          <button onClick={() => addNewEntry("department")}>Add</button>
        </div>
      </div>

      {/* Diagnosis Section */}
      <div className="form-group">
        <label>Diagnosis</label>
        <select
          value={selected.diagnosisId}
          onChange={(e) => handleSelect("diagnosisId", e.target.value)}
          disabled={!selected.departmentId}
        >
          <option value="">Select Diagnosis</option>
          {currentDepartment?.diagnoses?.map(diag => (
            <option key={diag.id} value={diag.id}>{diag.name}</option>
          ))}
        </select>
        {selected.departmentId && (
          <div className="new-entry">
            <input
              type="text"
              placeholder="New diagnosis"
              value={newEntry.diagnosis}
              onChange={(e) => setNewEntry(p => ({ ...p, diagnosis: e.target.value }))}
            />
            <button onClick={() => addNewEntry("diagnosis")}>Add</button>
          </div>
        )}
      </div>

      {/* Chapter Section */}
      <div className="form-group">
        <label>Chapter</label>
        <select
          value={selected.chapterId}
          onChange={(e) => handleSelect("chapterId", e.target.value)}
          disabled={!selected.diagnosisId}
        >
          <option value="">Select Chapter</option>
          {currentDiagnosis?.chapters?.map(chap => (
            <option key={chap.id} value={chap.id}>{chap.name}</option>
          ))}
        </select>
        {selected.diagnosisId && (
          <div className="new-entry">
            <input
              type="text"
              placeholder="New chapter"
              value={newEntry.chapter}
              onChange={(e) => setNewEntry(p => ({ ...p, chapter: e.target.value }))}
            />
            <button onClick={() => addNewEntry("chapter")}>Add</button>
          </div>
        )}
      </div>

      {/* Subchapter Section */}
      <div className="form-group">
        <label>Subchapter</label>
        <select
          value={selected.subchapterId}
          onChange={(e) => handleSelect("subchapterId", e.target.value)}
          disabled={!selected.chapterId}
        >
          <option value="">Select Subchapter</option>
          {currentChapter?.subchapters?.map(sub => (
            <option key={sub.id} value={sub.id}>{sub.name}</option>
          ))}
        </select>
        {selected.chapterId && (
          <div className="new-entry">
            <input
              type="text"
              placeholder="New subchapter"
              value={newEntry.subchapter}
              onChange={(e) => setNewEntry(p => ({ ...p, subchapter: e.target.value }))}
            />
            <button onClick={() => addNewEntry("subchapter")}>Add</button>
          </div>
        )}
      </div>

      {/* Media Section */}
      <div className="form-group">
        <label>Video Link</label>
        <input
          type="url"
          value={videoLink}
          onChange={(e) => setVideoLink(e.target.value)}
          placeholder="Enter video URL"
        />
      </div>

      <div className="form-group">
        <label>Upload Documents</label>
        <input
          type="file"
          multiple
          onChange={(e) => setDocuments([...e.target.files])}
        />
        {documents.length > 0 && (
          <div className="file-list">
            Files: {documents.map(f => f.name).join(', ')}
          </div>
        )}
      </div>

      <button className="submit-btn" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
};

export default MaterialPage;