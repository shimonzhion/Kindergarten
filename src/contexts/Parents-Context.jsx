import { createContext, useEffect, useState } from "react";
import KindergartenSrvice from "../services/kindergarten.service";

export const parentsContext = createContext()
export default function ParentsProvider({children}){
    
    const [parents,setParents]=useState([])
    useEffect(()=>{
        KindergartenSrvice('Parents-Committee').then(result => setParents(result))
    },[])
    return(
        <parentsContext.Provider value={{parents,setParents}}>
            {children}
        </parentsContext.Provider>
    )
}