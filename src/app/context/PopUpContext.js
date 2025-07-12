
'use client'

import { createContext,useState,useContext } from "react";



const PopUpCOntext =createContext()

export const AuthProvider=({children})=>{
    const [showPopUp,setShowPopUp]=useState(false)


  
   
    
    
     
   

      
    return <PopUpCOntext.Provider value={{showPopUp,setShowPopUp}}>
{children}
    </PopUpCOntext.Provider>
}

export const usePop=()=>useContext(PopUpCOntext)

