import { createUserWithEmailAndPassword } from "firebase/auth";
import { createContext, useState } from "react";
import { auth } from "../firebase/firebase.config";

// STEP 1: Create a context to share authentication data/functions
const AuthContext = createContext();

// STEP 2: Create a provider component to wrap the app
const AuthProvider = ({ children }) => {
  // STEP 3: Create state to store the logged-in user
  const [user, setUser] = useState(null);
  // STEP 4: Create state to track loading/auth process status
  const [loading, setLoading] = useState(true);

  // STEP 5: Create function to register a user using email & password
  const registerUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // STEP 6: Prepare the values to be shared via context
  const userInfo = {
    user,
    loading,
    registerUser,
  };
  // STEP 7: Provide auth data/functions to all child components
  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  );
};

// STEP 8: Export provider and context for use in other components
export default AuthProvider;
export { AuthContext };
