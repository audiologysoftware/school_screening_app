import React, { useState } from "react";
import "./ScreeningQuestionnaire.css";

const ScreeningQuestionnaire = () => {
  // State for form fields
  const [department, setDepartment] = useState("");
  const [screening, setScreening] = useState("");
  const [ageRange, setAgeRange] = useState({ min: "", max: "" });
  const [diagnosis, setDiagnosis] = useState("");
  const [question, setQuestion] = useState("");
  const [questionsList, setQuestionsList] = useState([]);

  // State for "New" options
  const [isDepartmentNew, setIsDepartmentNew] = useState(false);
  const [isScreeningNew, setIsScreeningNew] = useState(false);
  const [isDiagnosisNew, setIsDiagnosisNew] = useState(false);

  // State for storing disorder-wise questions
  const [disorderQuestions, setDisorderQuestions] = useState([]);

  // Sample data structure with IDs
  const initialData = [
    {
      id: "dept1",
      name: "Cardiology",
      screenings: [
        {
          id: "scr1",
          name: "Heart Disease Screening",
          ageRange: "18-60",
          diagnoses: [
            {
              id: "diag1",
              name: "Heart Disease",
              questions: [],
            },
          ],
        },
      ],
    },
    {
      id: "dept2",
      name: "Neurology",
      screenings: [
        {
          id: "scr2",
          name: "Stroke Screening",
          ageRange: "40-80",
          diagnoses: [
            {
              id: "diag2",
              name: "Stroke",
              questions: [],
            },
          ],
        },
      ],
    },
  ];

  const [data, setData] = useState(initialData);
 const [submittedData, setSubmittedData] = useState([]);
  // Get current department
  const currentDepartment = data.find((dept) => dept.id === department);

  // Get current screening
  const currentScreening = currentDepartment?.screenings?.find(
    (scr) => scr.id === screening
  );

  // Handle department selection
  const handleDepartmentChange = (e) => {
    const value = e.target.value;
    if (value === "New") {
      setIsDepartmentNew(true);
      setDepartment("");
    } else {
      setIsDepartmentNew(false);
      setDepartment(value);
    }
    setScreening("");
    setDiagnosis("");
    setQuestionsList([]);
    setDisorderQuestions([]);
  };

  // Handle screening selection
  const handleScreeningChange = (e) => {
    const value = e.target.value;
    if (value === "New") {
      setIsScreeningNew(true);
      setScreening("");
    } else {
      setIsScreeningNew(false);
      setScreening(value);
    }
    setDiagnosis("");
    setQuestionsList([]);
    setDisorderQuestions([]);
  };

  // Handle diagnosis selection
  const handleDiagnosisChange = (e) => {
    const value = e.target.value;
    if (value === "New") {
      setIsDiagnosisNew(true);
      setDiagnosis("");
    } else {
      setIsDiagnosisNew(false);
      setDiagnosis(value);
    }
    setQuestionsList([]);
  };

  // Add new department
  const addNewDepartment = () => {
    if (department.trim()) {
      const newDept = {
        id: `dept${data.length + 1}`,
        name: department,
        screenings: [],
      };
      setData([...data, newDept]);
      setDepartment("");
      setIsDepartmentNew(false);
    }
  };

  // Add new screening
  const addNewScreening = () => {
    if (screening.trim() && department && ageRange.min && ageRange.max) {
      const newScr = {
        id: `scr${currentDepartment.screenings.length + 1}`,
        name: screening,
        ageRange: `${ageRange.min}-${ageRange.max}`,
        diagnoses: [],
      };
      const updatedData = data.map((dept) =>
        dept.id === department
          ? { ...dept, screenings: [...dept.screenings, newScr] }
          : dept
      );
      setData(updatedData);
      setScreening("");
      setAgeRange({ min: "", max: "" });
      setIsScreeningNew(false);
    }
  };

  // Add new diagnosis
  const addNewDiagnosis = () => {
    if (diagnosis.trim() && department && screening) {
      const newDiag = {
        id: `diag${currentScreening.diagnoses.length + 1}`,
        name: diagnosis,
        questions: [],
      };
      const updatedData = data.map((dept) =>
        dept.id === department
          ? {
              ...dept,
              screenings: dept.screenings.map((scr) =>
                scr.id === screening
                  ? { ...scr, diagnoses: [...scr.diagnoses, newDiag] }
                  : scr
              ),
            }
          : dept
      );
      setData(updatedData);
      setDiagnosis("");
      setIsDiagnosisNew(false);
    }
  };

  // Add question to the list
  const addQuestion = () => {
    if (question.trim() && diagnosis) {
      const updatedDisorderQuestions = [...disorderQuestions];
      const existingDisorder = updatedDisorderQuestions.find(
        (d) => d.diagnosis === diagnosis
      );

      if (existingDisorder) {
        existingDisorder.questions.push(question);
      } else {
        updatedDisorderQuestions.push({
          diagnosis,
          questions: [question],
        });
      }

      setDisorderQuestions(updatedDisorderQuestions);
      setQuestion("");
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!department || !screening || disorderQuestions.length === 0) {
      alert("Please fill all fields and add at least one question!");
      return;
    }
    // Create the submission object
    const submission = {
      department: currentDepartment.name,
      screening: currentScreening.name,
      ageRange: currentScreening.ageRange,
      disorders: disorderQuestions.map((disorder) => ({
        name: currentScreening.diagnoses.find((d) => d.id === disorder.diagnosis)?.name,
        questions: disorder.questions,
      })),
    };

    // Add to submitted data
    setSubmittedData([...submittedData, submission]);
    // Add questions to the data structure
    const updatedData = data.map((dept) =>
      dept.id === department
        ? {
            ...dept,
            screenings: dept.screenings.map((scr) =>
              scr.id === screening
                ? {
                    ...scr,
                    diagnoses: scr.diagnoses.map((diag) => {
                      const disorder = disorderQuestions.find(
                        (d) => d.diagnosis === diag.id
                      );
                      return disorder
                        ? { ...diag, questions: [...diag.questions, ...disorder.questions] }
                        : diag;
                    }),
                  }
                : scr
            ),
          }
        : dept
    );
    setData(updatedData);

    // Reset form
    setDepartment("");
    setScreening("");
    setAgeRange({ min: "", max: "" });
    setDiagnosis("");
    setQuestion("");
    setQuestionsList([]);
    setDisorderQuestions([]);
  };

  return (
    <div className="screening-questionnaire">
      <h2>Screening Questionnaire</h2>

      <form onSubmit={handleSubmit}>
        {/* Department Section */}
        <div className="form-group">
          <label>Department:</label>
          {isDepartmentNew ? (
            <div className="new-entry">
              <input
                type="text"
                value={department}
                onChange={(e) => setDepartment(e.target.value)}
                placeholder="Enter new department"
              />
              <button type="button" onClick={addNewDepartment}>
                Add
              </button>
            </div>
          ) : (
            <select value={department} onChange={handleDepartmentChange}>
              <option value="">Select Department</option>
              {data.map((dept) => (
                <option key={dept.id} value={dept.id}>
                  {dept.name}
                </option>
              ))}
             
            </select>
          )}
        </div>

        {/* Screening Section */}
        <div className="form-group">
          <label>Screening Name:</label>
          {isScreeningNew ? (
            <div className="new-entry">
              <input
                type="text"
                value={screening}
                onChange={(e) => setScreening(e.target.value)}
                placeholder="Enter new screening"
              />
              <div className="age-range">
                <input
                  type="number"
                  value={ageRange.min}
                  onChange={(e) =>
                    setAgeRange({ ...ageRange, min: e.target.value })
                  }
                  placeholder="Min Age"
                />
                <input
                  type="number"
                  value={ageRange.max}
                  onChange={(e) =>
                    setAgeRange({ ...ageRange, max: e.target.value })
                  }
                  placeholder="Max Age"
                />
              </div>
              <button type="button" onClick={addNewScreening}>
                Add
              </button>
            </div>
          ) : (
            <select value={screening} onChange={handleScreeningChange}>
              <option value="">Select Screening</option>
              {currentDepartment?.screenings?.map((scr) => (
                <option key={scr.id} value={scr.id}>
                  {scr.name} ({scr.ageRange})
                </option>
              ))}
              <option value="New">New</option>
            </select>
          )}
        </div>

        {/* Diagnosis Section */}
        <div className="form-group">
          <label>Disorder Name:</label>
          {isDiagnosisNew ? (
            <div className="new-entry">
              <input
                type="text"
                value={diagnosis}
                onChange={(e) => setDiagnosis(e.target.value)}
                placeholder="Enter new diagnosis"
              />
              <button type="button" onClick={addNewDiagnosis}>
                Add
              </button>
            </div>
          ) : (
            <select value={diagnosis} onChange={handleDiagnosisChange}>
              <option value="">Select Diagnosis</option>
              {currentScreening?.diagnoses?.map((diag) => (
                <option key={diag.id} value={diag.id}>
                  {diag.name}
                </option>
              ))}
              <option value="New">New</option>
            </select>
          )}
        </div>

        {/* Question Section */}
        <div className="form-group">
          <label>Question:</label>
          <div className="question-entry">
            <input
              type="text"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              placeholder="Enter question"
            />
            <button type="button" onClick={addQuestion}>
              Add Question
            </button>
          </div>
        </div>

        {/* Submit Button */}
        <button type="submit" className="submit-btn">
          Submit
        </button>
      </form>

      {/* Display Disorder-wise Questions */}
      {disorderQuestions.length > 0 && (
        <div className="disorder-questions">
          <h3>Questions:</h3>
          {disorderQuestions.map((disorder, index) => (
            <div key={index} className="disorder-card">
              <p>
                <strong>Disorder Name:</strong>{" "}
                {currentScreening?.diagnoses?.find((d) => d.id === disorder.diagnosis)?.name}
              </p>
              <p>
                <strong>Questions:</strong>
                <ul>
                  {disorder.questions.map((q, idx) => (
                    <li key={idx}>{q}</li>
                  ))}
                </ul>
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ScreeningQuestionnaire;