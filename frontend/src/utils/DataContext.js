import React, { createContext, useState, useContext } from 'react';

// Create a Context for sharing data globally
const DataContext = createContext();

// Custom hook to use the context in other components
export const useData = () => {
  return useContext(DataContext);
};

// The Provider component that will wrap your application
export const DataContextProvider = ({ children }) => {
  // Example state, you can customize this based on your app's needs
  const [userData, setUserData] = useState({
    role: null,  // Will hold role of the logged-in user
    name: '',
    email: '',
  });

  // Function to update the user data (example)
  const updateUserData = (data) => {
    setUserData(data);
  };

  return (
    <DataContext.Provider value={{ userData, updateUserData }}>
      {children}
    </DataContext.Provider>
  );
};
