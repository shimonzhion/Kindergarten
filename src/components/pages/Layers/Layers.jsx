import "./Layers.css";
import React from "react";
import Table from "../../featurs/Table";
import { useContext } from "react";
import { layerAContext } from "../../../contexts/Layers-A-Context";
import { layerBContext } from "../../../contexts/Layers-B-Context";
import CustomizedTables from "../../featurs/Header/Tablee";
function Layers() {
  const { layerA } = useContext(layerAContext);
  const { layerB } = useContext(layerBContext);
  
  const colNames = ["first-nmae :", "last-name :", "parent-phone :","id :"];
  return (
    <div className="layers">
      <h1>Layers</h1>
      <div class="d-flex justify-content-center justify-content-around ">
      {/* <Table list={layerA} colNames={colNames} width={'40vw'} heigth={'50vh'} id={"div1"}/> */}
      <CustomizedTables list ={layerA}colNames={colNames} div={"div3"}table={"div4"} />

      {/* <Table list={layerB} colNames={colNames} width={'40vw'} heigth={'50vh'} id={"div2"} /> */}
      <CustomizedTables list ={layerB}colNames={colNames} div={"div1"}table={"div2"} />

      </div>
    </div>
  );
}

export default Layers;
