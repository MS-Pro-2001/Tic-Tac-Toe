import React from 'react';
import Square from './Square';

const Board = () => {


   const rendersquare =(indexposition)=>{
       return(
           <Square  indexposition={indexposition} />
       )
   }




  return (<div>
     
     <div className="container my-5 " style={{width:'300px'}}>
    
         <div className="row " >
             <div className="col-4 my-1" style={{padding:'0',margin:'0'}}>
                 {rendersquare(0)}
             </div>
             <div className="col-4  my-1" style={{padding:'0',margin:'0'}}>
             {rendersquare(1)}
             </div>
             <div className="col-4  my-1" style={{padding:'0',margin:'0'}}>
             {rendersquare(2)}
             </div>
             
             <div className="col-4  my-1" style={{padding:'0',margin:'0'}}>
             {rendersquare(3)}
             </div>
             <div className="col-4  my-1" style={{padding:'0',margin:'0'}}>
             {rendersquare(4)}
             </div>
             <div className="col-4 my-1 " style={{padding:'0',margin:'0'}}>
             {rendersquare(5)}
             </div>
             <div className="col-4  my-1" style={{padding:'0',margin:'0'}}>
             {rendersquare(6)}
             </div>
             <div className="col-4  my-1" style={{padding:'0',margin:'0'}}>
             {rendersquare(7)}
             </div>
             <div className="col-4 my-1 " style={{padding:'0',margin:'0'}}>
             {rendersquare(8)}
             </div>
         </div>

     </div>
  </div>)
};

export default Board;
