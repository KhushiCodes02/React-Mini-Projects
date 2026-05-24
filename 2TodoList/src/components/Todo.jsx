import React, { useState } from 'react'

const Todo = () => {
    const [arr, setArr] = useState([])
    const [task, setTask] = useState('')

    const HandleForm = (e) => {
        e.preventDefault()

        if (task.trim() === "") {
            return
        }

        const DupArr = [...arr, task]

        setArr(DupArr)
        console.log(DupArr);

        setTask('')
        
        
    }



  return (
    <div className='class="bg-gray-900 flex items-center justify-center h-screen'>
        <div className="w-96 bg-gray-800 text-white rounded-lg shadow-lg p-6 flex flex-col">
            <div className="text-center text-2xl font-bold mb-4">
                TO-DO LIST
            </div>

            <form onSubmit={HandleForm} className="flex mb-4">
                <div className="flex-1">
                    <input type="text" 
                           placeholder="Enter task" 
                           className="w-full px-3 py-2 rounded text-black bg-amber-50 border-4 border-black"
                           value={task}
                           onChange={(e) => {
                                setTask(e.target.value)
                           }}/>
                </div>
                <div className="ml-2">
                    <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"> ADD </button>
                </div>
            </form>
            {
                arr.map((elem, idx) => {
                    return <p className="flex-1 overflow-y-auto bg-gray-700 rounded p-3" key={idx}>{elem}</p>
                })
            }
                
        </div>
    </div>
  )
}

export default Todo
