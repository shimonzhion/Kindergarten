import { createContext, useEffect, useState } from "react";
import KindergartenSrvice from "../services/kindergarten.service"

export const layerAContext = createContext()
export default function LayerֹֹAProvider ({children}){
    const [layerA,setLayerA] = useState([])
    useEffect(()=>{
        KindergartenSrvice("Pupils-A").then(result=>setLayerA(result))
    },[])
    
    return(
        <layerAContext.Provider value={{layerA,setLayerA}}>
            {children}
        </layerAContext.Provider>
    )
}