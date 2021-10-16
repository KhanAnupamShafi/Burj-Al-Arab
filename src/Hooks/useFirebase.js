import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { useEffect, useState } from "react";
import initializeFirebase from "../Firebase/firebase.init";

initializeFirebase(); //initiate required before using firebase

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const googleProvider = new GoogleAuthProvider();

  const auth = getAuth();

  //Google Sign-in
  const handleGoogleSignIn = () => {
    setIsLoading(true);
    return signInWithPopup(auth, googleProvider);

    // console.log(user);
  };

  //sign-Out
  const logOut = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {
        setUser({}); // remove user
      })
      .catch((error) => {
        // An error happened.
      })
      .finally(setIsLoading(false));
  };

  //special observer
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
    return () => unsubscribe;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    user,
    handleGoogleSignIn,
    logOut,
    error,
    isLoading,
    setUser,
    setIsLoading,
    setError,
  };
};

export default useFirebase;
