import React, { useEffect, useState } from 'react'
import { db } from "../firebase.config";
import {
 
  getAuth,
 
} from "firebase/auth";
import {doc, getDoc, } from "firebase/firestore";


const Profile = () => {
  const [companyData, setCompanyData] = useState(null)
  const auth = getAuth()
  // const userId = auth.currentUser.uid;

  useEffect(() => {
    async function fetchAdminData() {
      const docRef = doc(db, "admin", auth.currentUser.uid);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setCompanyData(docSnap.data());
        
      } else {
      }
    }
    fetchAdminData();
  }, []);

  console.log('CD',companyData);
  return (
    <div>Profile</div>
  )
}

export default Profile