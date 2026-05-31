import React, { useRef, useState } from 'react'
import circle_icon from './Assets/Circle.png'
import cross_icon from './Assets/Cross.png'

let data = ["","","","","","","","",""]

const TicTacToe = () => {
  const [lock, setLock] = useState(false)
  const [count, setCount] = useState(0)

  let box1 = useRef(null)
  let box2 = useRef(null)
  let box3 = useRef(null)
  let box4 = useRef(null)
  let box5 = useRef(null)
  let box6 = useRef(null)
  let box7 = useRef(null)
  let box8 = useRef(null)
  let box9 = useRef(null)

  let box_array =[box1,box2,box3,box4,box5,box6,box7,box8,box9]



  const WinningCondition = () => {
    if (data[0] === data[1] && data[1] === data[2] && data[2] !== "") {
      MatchWon(data[0])
    }
    if (data[3] === data[4] && data[4] === data[5] && data[5] !== "") {
      MatchWon(data[3])
    }
    if (data[6] === data[7] && data[7] === data[8] && data[8] !== "") {
      MatchWon(data[6])
    }
    if (data[0] === data[3] && data[3] === data[6] && data[6] !== "") {
      MatchWon(data[0])
    }
    if (data[1] === data[4] && data[4] === data[7] && data[7] !== "") {
      MatchWon(data[1])
    }
    if (data[2] === data[5] && data[5] === data[8] && data[8] !== "") {
      MatchWon(data[2])
    }
    if (data[0] === data[4] && data[4] === data[8] && data[8] !== "") {
      MatchWon(data[0])
    }
    if (data[2] === data[4] && data[4] === data[6] && data[6] !== "") {
      MatchWon(data[2])
    }
  }

  const MatchWon = (winner) => {
    setLock(true)
    if (winner === 'x') {
      document.getElementById("winnerDeclaration").innerHTML = `CONGRATULATIONS: Winner is X`
    }
    else{
      document.getElementById("winnerDeclaration").innerHTML = `CONGRATULATIONS: Winner is O`
    }

  }

  const SetFun = (e,num) => {
    if (lock) {
      return 0
    }
    if (count%2 === 0) {
      e.target.innerHTML = `<img src = ${cross_icon}>`
      data[num] = 'x'
    }
    else{
      e.target.innerHTML = `<img src = '${circle_icon}'>`
      data[num] = 'o'
    }
    setCount(prev => prev + 1)
    WinningCondition()
  }

  const ResetFunc = () => {
    setLock(false)
    data = ["","","","","","","","","",]
    document.getElementById("winnerDeclaration").innerHTML = ""
    box_array.map((e) => {
      e.current.innerHTML = ""
    })
  }

  return (
    <div className='h-screen bg-black text-white'>
        <h1 className='text-center text-4xl mb-20'>TIC-TAC-TOE GAME</h1>
        <h1 id="winnerDeclaration" className='text-center mb-20 text-3xl'></h1>
        <div>
          <div className="flex flex-row justify-center px-1 py-1 gap-1">
            <button ref={box1} onClick={(e) => {SetFun(e,0)}} className="h-20 w-20 bg-gray-800 text-black active:scale-97">0</button>
            <button ref={box2} onClick={(e) => {SetFun(e,1)}} className="h-20 w-20 bg-gray-800 text-black active:scale-97">1</button>
            <button ref={box3} onClick={(e) => {SetFun(e,2)}} className="h-20 w-20 bg-gray-800 text-black active:scale-97">2</button>
          </div>
          <div className="flex flex-row justify-center px-1 py-1 gap-1">
            <button ref={box4} onClick={(e) => {SetFun(e,3)}} className="h-20 w-20 bg-gray-800 text-black active:scale-97">3</button>
            <button ref={box5} onClick={(e) => {SetFun(e,4)}} className="h-20 w-20 bg-gray-800 text-black active:scale-97">4</button>
            <button ref={box6} onClick={(e) => {SetFun(e,5)}} className="h-20 w-20 bg-gray-800 text-black active:scale-97">5</button>
          </div>
          <div className="flex flex-row justify-center px-1 py-1 gap-1">
            <button ref={box7} onClick={(e) => {SetFun(e,6)}} className="h-20 w-20 bg-gray-800 text-black active:scale-97">6</button>
            <button ref={box8} onClick={(e) => {SetFun(e,7)}} className="h-20 w-20 bg-gray-800 text-black active:scale-97">7</button>
            <button ref={box9} onClick={(e) => {SetFun(e,8)}} className="h-20 w-20 bg-gray-800 text-black active:scale-97">8</button>
          </div>
        </div>
        <div className="flex justify-center">
          <button className="px-4 py-2 bg-white text-black rounded-2xl text-xl text-center active:scale-90 mt-10" onClick={ResetFunc}> Reset</button>
        </div>

    </div>
  )
}

export default TicTacToe