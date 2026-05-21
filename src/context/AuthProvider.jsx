import React, { createContext, useEffect, useState } from "react"
import { getLocalStorage } from "../utils/LocalStorage";
export const Authcontext=createContext();

const AuthProvider =({children})=>{

    const [userData,setUserData]=useState(null);
   useEffect(()=>{
     const {employees,admin}=getLocalStorage();
     setUserData({employees,admin});
   },[])
    return(
        <div>
            <Authcontext.Provider value={[userData, setUserData]}>
            {children}    
            </Authcontext.Provider>
        </div>
    )
}
export default AuthProvider;