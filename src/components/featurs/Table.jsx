import React from "react"

export default function Table({list,colNames,width="auto",heigth="auto",div,table}) {
return(
<div id={div}>
  {list.length> 0 && (
    <table id={table}  class="table table-success table-striped"
    cellSpacing="0"
    style={{width:width,height:heigth,padding:"5px 10px"}}
    >
     <thead>
      <tr>
        {colNames.map((headerItem,index)=>(
          <th key={index}>{headerItem.toUpperCase()} </th>
        ))}
      </tr>
     </thead>
       <tbody>
        {Object.values(list).map((obj,index)=>(
          <tr key={index}>
            {Object.values(obj).map((value,index2)=>(
              <td key={index2}>{value}</td>
            ))}
          </tr>
          ))}
       </tbody>
    </table>
  )}
</div>

)  
}
