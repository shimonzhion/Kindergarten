import "./Teachers.css";
import React, { useContext } from "react";
import {teachersContext} from "../../../contexts/Teachers-Context" 
import TeachersCard from "../../featurs/TeacherCard";

function Teachers() {

  const {teachers} = useContext(teachersContext)
  return (
    <div className="teachers">
      <h1>Teachers</h1>
      <div id="div_cards_teachers">
        {
          teachers?.map((teacherItem)=><TeachersCard teacher={teacherItem}/>)
        }
      </div>
    </div>
  );
};

export default Teachers;
