import { createContext, useEffect, useState } from "react";
import KindergartenSrvice from "../services/kindergarten.service"

export const layerBContext = createContext()
export default function LayerֹֹBProvider ({children}){
    const [layerB,setLayerB] = useState([])
    useEffect(()=>{
        KindergartenSrvice("Pupils-B").then(result=>setLayerB(result))
    },[])
    
    return(
        <layerBContext.Provider value={{layerB,setLayerB}}>
            {children}
        </layerBContext.Provider>
    )
}