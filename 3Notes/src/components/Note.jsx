import React from 'react'
import { useState } from 'react'
import App from '../App'

const Note = () => {
    const [arr, setArr] = useState([])
    const [task, setTask] = useState('')
    const [error, setError] = useState('');
   
    
    const HandleForm = (e) => {
        e.preventDefault()

        if (task.trim() === "") {
            setError("Note cannot be empty")
             return
        }

        const DupArr = [...arr, task]
        console.log(DupArr);
        setArr(DupArr)

        setTask('')
        setError('')
        
    }

  return (
    <div className="bg-gray-900 text-white h-screen p-6">
        <div className="flex h-full gap-6">
            <div className="w-1/3 bg-gray-800 rounded-lg p-4 flex flex-col">
                <div className="text-xl font-bold mb-4">WRITE NOTE</div>
                    <form onSubmit={HandleForm} className="flex flex-col flex-1">
                        <textarea placeholder="Type your note here" 
                                  className="flex-1 p-3 rounded text-black resize-none mb-4"
                                  value={task}
                                  onChange={(e) => {
                                    setTask(e.target.value)
                                  }}></textarea>
                        <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 rounded font-semibold">ADD</button>
                    </form>
            </div>
            <div className="w-3/4 bg-gray-800 rounded-lg p-4 flex flex-col">
                <div className="flex-1 overflow-y-auto">
                    <div className="grid grid-cols-4 gap-4 mb-4">
                        {
                            arr.map((elem,idx) => {
                                return <p className="bg-gray-700 p-6 rounded text-center" key={idx}>{idx + 1}) {elem}</p>
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Note
