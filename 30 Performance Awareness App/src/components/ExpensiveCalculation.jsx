import React, { useState,useMemo} from 'react'

const ExpensiveCalculation = () => {

    const [number,setNumber]=useState(0);
    const [count,setCount]=useState(0)

    // const expensiveResult=()=>{
    //     console.log("Calculating...");
    //     let total=0;
    //     for(let i=0;i<10000000;i++){
    //         total+=1;
    //     }
    //     return total+number;
    // };

        const expensiveResult=useMemo(()=>{
        console.log("Calculating...");
        let total=0;
        for(let i=0;i<10000000;i++){
            total+=1;
        }
        return total+number;
    },[number]);

  return (
    <div>
        <h1>useMemo Demo</h1>
        <input type="number" 
        value={number}
        onChange={(e)=>setNumber(Number(e.target.value))}
        />
        {/* <p>Result:{expensiveResult()}</p> */}
        <p>Result:{expensiveResult}</p>

        <button onClick={()=>setCount(c=>c+1)}>Count:{count}</button>

    </div>
  )
}

export default ExpensiveCalculation