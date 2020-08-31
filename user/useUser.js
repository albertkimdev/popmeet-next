// Hook for using Firestore's user data
import React, { useState, useEffect, useContext, createContext } from "react";
import { useAuth } from "../auth/useAuth";

const userContext = createContext();

export function ProvideUser({ children }) {
  const user = useProvideUser();
  return <userContext.Provider value={user}>{children}</userContext.Provider>;
}

export const useUser = () => {
  return useContext(userContext);
};

function useProvideUser() {
  const [user, setUser] = useState(null);
  const auth = useAuth();
  useEffect(() => {
    // const unsubscribe = firebase.auth().onAuthStateChanged(user => {
    //   if (user) {
    //     setUser(user);
    //   } else {
    //     setUser(false);
    //   }
    // });
    // // Cleanup subscription on unmount
    // return () => unsubscribe();
  }, []);

  const getUserData = async (uid) => {
    if (!auth.user || !uid) return null;

    return auth.useFirestore().collection("users").doc(uid).get();
  };

  const setUserProfile = async (uid, data) => {
    if (!auth.user || !uid) return null;

    return auth.useFirestore().collection("users").doc(uid).set(data);
  };

  return {
    getUserData,
    setUserProfile,
  };
}
