import "./Layers.css";
import React from "react";
import Table from "../../featurs/Table";
import { useContext } from "react";
import { layerAContext } from "../../../contexts/Layers-A-Context";
import { layerBContext } from "../../../contexts/Layers-B-Context";
function Layers() {
  const { layerA } = useContext(layerAContext);
  const { layerB } = useContext(layerBContext);
  
  const colNames = ["first-nmae :", "last-name :", "parent-phone :","id :"];
  return (
    <div className="layers">
      <h1>Layers</h1>
      <div class="d-flex justify-content-center justify-content-around ">
      <Table list={layerA} colNames={colNames} width={'40vw'} heigth={'50vh'} id={"div1"}/>
      <Table list={layerB} colNames={colNames} width={'40vw'} heigth={'50vh'} id={"div2"} />
      </div>
    </div>
  );
}

export default Layers;
