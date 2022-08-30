import { createContext, useEffect, useState } from "react";
import KindergartenSrvice from "../services/kindergarten.service";

export const teachersContext = createContext();

export default function TeachersProvider({children}) {
  const [teachers, setTeachers] = useState([]);
  useEffect(() => {
    KindergartenSrvice('teachers')
      .then((result) =>setTeachers(result))
      .catch((err) => {console.log(err)});
  }, []);

  return (
    <teachersContext.Provider value={{teachers,setTeachers}}>
      {children}
    </teachersContext.Provider>
  )
}
