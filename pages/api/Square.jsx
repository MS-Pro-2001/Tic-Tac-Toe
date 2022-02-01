import React from "react";
import { Button } from "@mui/material";

const Square = ({indexposition}) => {
    console.log(indexposition)
  return (
    <div>
      <Button variant="contained" style={{ width: "96%",height:'100px' }}>
      <div className="h1" >{indexposition}</div>
      </Button>
    </div>
  );
};

export default Square;
