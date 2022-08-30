import "./Parents.css";
import React, { useContext } from "react";
import {parentsContext} from "../../../contexts/Parents-Context"
import Table from "../../featurs/Table";

function Parents() {

  const{parents} = useContext(parentsContext)
  console.log(parents);
  const colNames = ['first name :', 'last name :','phone :', 'email :' , 'child' ,'id']
  return (
    <div className="parents">
      <h1>Parents</h1>
      <div class="d-flex justify-content-center">
      <Table list={parents} colNames={colNames} width={"70vw"} heigth={"50vh"}  />
      </div>

    </div>
  );
};

export default Parents;
