import React, { useState, createContext, useContext, useEffect } from "react";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";
import useAuth from "./AuthContext";


const DataContext = createContext({});

export const DataProvider = ({ children }) => {

  const [userData, setUserData] = useState(null)
  const { user } = useAuth()

  const db = getFirestore()
  const docRef = user ? doc(db, "users", user.uid) : null

  const getUserData = async () => {


    try {
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        console.log(docSnap.data());
        setUserData(docSnap.data())
      } else {
        console.log("No user data")
      }

    } catch (error) {
      console.log(error)
    }
  }

  const cargarDatos = async () => {
    try {
      const url = "https://jsonplaceholder.typicode.com/todos/1";
      const res = await fetch(url);
      const datos = await res.json();
      return datos
    } catch (err) {
      console.log(err)
    }
  };

  const mergeUserData = async (data) => {
    try {

      let _data = data
      if (userData) {
        data = {
          ...userData,
          ...data
        }
      }

      const result = await setDoc(docRef, data);
      setUserData(data)


      return _data
    } catch (err) {
      alert(JSON.stringify(err))
      debugger
    }
  }





  return (
    <DataContext.Provider value={{
      userData,
      db,
      getUserData,
      mergeUserData
    }}>
      {children}
    </DataContext.Provider>
  );
};

const useDataContext = () => {
  const context = useContext(DataContext);

  if (context === undefined) {
    throw new Error("useDataContext must be used within a DataProvider");
  }
  return context;
};

export default useDataContext;