import React, { useState } from 'react';
import Square from './Square';

const Board = () => {

    const [square, setSqaure] = useState(Array(9).fill(null));
    const [X, setX] = useState(true);
    




    const rendersquare = (indexposition) => {
        return (
            <Square indexposition={square[indexposition]} onClick={() => { handleclick(indexposition) }} winner={winner} />
        )
    }

// console.log(square)
    const handleclick = (i) => {
        const squares = square.slice()

        if (square[i] === null) {
            squares[i] = X ? "X" : "O";
            setSqaure(squares)

            setX(!X)





        }

    }


    const calculateWinner = (square) => {
        const casesToWin = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ]


        for (let index = 0; index < casesToWin.length; index++) {
            const [a, b, c] = casesToWin[index]
            if (square[a] && square[a] === square[b] && square[b] === square[c]) {
                return square[a]




            }
            

            
        

        }

      

        
       




    }


    const winner = calculateWinner(square)
    let status;
    if (winner) {
        status = "Winner: " + winner;
    
    }
    else {
        status = "Player Turn:" + (X ? " X" : " O")
    }
   
   


    const handleReset = ()=>{
        
        setSqaure(Array(9).fill(null))
    }

    let a=0;

    for (let arr = 0; arr < square.length; arr++) {
        if(square[arr] !== null){
            a++;
            
        }
        
    }

    if(a === 9 && !winner){
        status="Match is draw."
        winner = "false"
    }
    // console.log(a);



    return (<div>

        <div className="container my-5 " style={{ width: '300px' }}>

            <div className="row " >
                <div className="col-4 my-1" id="get" style={{ padding: '0', margin: '0' }}>
                    {rendersquare(0)}
                </div>
                <div className="col-4  my-1" style={{ padding: '0', margin: '0' }}>
                    {rendersquare(1)}
                </div>
                <div className="col-4  my-1" style={{ padding: '0', margin: '0' }}>
                    {rendersquare(2)}
                </div>

                <div className="col-4  my-1" style={{ padding: '0', margin: '0' }}>
                    {rendersquare(3)}
                </div>
                <div className="col-4  my-1" style={{ padding: '0', margin: '0' }}>
                    {rendersquare(4)}
                </div>
                <div className="col-4 my-1 " style={{ padding: '0', margin: '0' }}>
                    {rendersquare(5)}
                </div>
                <div className="col-4  my-1" style={{ padding: '0', margin: '0' }}>
                    {rendersquare(6)}
                </div>
                <div className="col-4  my-1" style={{ padding: '0', margin: '0' }}>
                    {rendersquare(7)}
                </div>
                <div className="col-4 my-1 " style={{ padding: '0', margin: '0' }}>
                    {rendersquare(8)}
                </div>
            </div>

        </div>
        <h4 className="text-center">
            {status}

        </h4>
        <div className='text-center container' style={{ width: '300px' }}>
            
              <Square indexposition={"Reset"} onClick={()=>{handleReset()}} winner={!winner} />
            
      

        </div>
        


    </div>)
};

export default Board;
