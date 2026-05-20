import React, {useState} from 'react'

function Counter() {
  const [count, setCount] = useState(0);
  const increment=()=>{
    setCount(count+1);
  }

  const decrement=()=>{
    if(count>0){
          setCount(count-1);
    }
    else{
      alert("Oops! Count cannot be in negative.");
    }
  }
  const reset=()=>{
    setCount(0);
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-zinc-900">
      <div className="flex w-full max-w-sm flex-col p-5 bg-zinc-800 rounded-2xl shadow-xl space-y-6 font-bold text-center">
        <h1 className={`text-6xl font-bold ${count>10 ? "text-green-500" : count === 0 ? "text-red-500" : "text-white" }`}>{count}</h1>
        <div className="flex flex-col gap-4 justify-center">
        <button onClick={increment} className="bg-green-500 hover:bg-green-600 text-white rounded-2xl">Increase</button>    
        <button onClick={decrement} className="bg-red-500 hover:bg-red-600 text-white rounded-2xl">Decrease</button>  
        <button onClick={reset} className="bg-blue-500 hover:bg-blue-600 rounded-2xl text-white">Reset</button>
        </div>
      </div>
        
    </div>
  )
}

export default Counter
