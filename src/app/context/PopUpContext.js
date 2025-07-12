
'use client'

import { createContext,useState,useContext } from "react";



const PopUpContext =createContext()

export const AuthProvider=({children})=>{
    const [showPopUp,setShowPopUp]=useState(false)


  
   
    
    
     
   

      
    return <PopUpContext.Provider value={{showPopUp,setShowPopUp}}>
{children}
    </PopUpContext.Provider>
}

export const usePop=()=>useContext(PopUpContext)

