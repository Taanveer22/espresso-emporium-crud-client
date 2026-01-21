import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase.config";

//=== STEP 1: Create a context to share authentication data/functions
const AuthContext = createContext();

//=== STEP 2: Create a provider component to wrap the app
const AuthProvider = ({ children }) => {
  //=== STEP 3: Create state to store the logged-in user
  const [user, setUser] = useState(null);
  //=== STEP 4: Create state to track loading/auth process status
  const [loading, setLoading] = useState(true);

  //=== STEP 5: Create firebase functions for various purpose
  const registerUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  //=== STEP 6 : must listen to firebase auth state
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => {
      unSubscribe();
    };
  }, []);

  //==== STEP 7: Prepare the values to be shared via context
  const userInfo = {
    user,
    loading,
    registerUser,
    signInUser,
  };
  //==== STEP 8: Provide auth data/functions to all child components
  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
export { AuthContext };
