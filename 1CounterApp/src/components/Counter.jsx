import React, { useState } from 'react'

const Counter = () => {
    const [num, setNum] = useState(0)
    
    const AddCount = () => {
        setNum(num+1)
    }

    const SubCount = () =>{
        setNum(num - 1)
    }

  return (
    <div className="bg-black flex flex-col items-center justify-center h-screen">
        <div className="bg-gray-800 p-8 rounded w-64 h-64 flex items-center justify-center">
            <span className="text-white text-6xl">{num}</span>
        </div>
        <div className="flex space-x-4 mt-8">
            <button onClick={AddCount} className="bg-white text-gray-800 px-4 py-2 rounded">Increase</button>
            <button onClick={SubCount } className="bg-white text-gray-800 px-4 py-2 rounded">Decrease</button>
        </div>
    </div>

  )
}

export default Counter
