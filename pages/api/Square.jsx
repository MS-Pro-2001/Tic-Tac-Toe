import React, { useState } from "react";
import { Button } from "@mui/material";

const Square = ({indexposition,onClick,winner}) => {
  let flag = false;
  
  if(winner){
    // console.log(winner)
    flag = true;

  }

  
    
  return (
    <div>
      <Button variant="contained" disabled={flag}  style={{ width: "96%",height:'100px' }}  onClick={()=>{onClick()}} >
      <div className="h1" >{indexposition}</div>
      </Button>
    </div>
  );
};

export default Square;
