import React, { useEffect, useState } from 'react'

const App = () => {
  const [loremData, setLoremData] = useState([])
  const [pageNum, setPageNum] = useState(1)

  useEffect(function () {
    FetchData()
  },[pageNum])

  const PrevPage = () => {
    if (pageNum > 1) {
      setPageNum(pageNum-1)
    }
  }

  const NextPage = () => {
      setPageNum(pageNum+1)
  }


  const FetchData = async () => {
    const response = await fetch(`https://picsum.photos/v2/list?page=${pageNum}&limit=40`)
    const data = await response.json()
    setLoremData(data)
    console.log(data);
  }

  let image = "No image available"
  if (loremData.length > 0) {
    image = loremData.map(function (elem,idx) {
      return(
        <div key={idx}>
          <a href={elem.url}>
            <div className='h-40 w-44 bg-black'>
              <img className='h-full w-full object-cover' src={elem.download_url}/>
            </div>
            <h2>{elem.author}</h2>
          </a>
        </div>
      )
    })
  }

  return (
    <div className='bg-black h-full text-white'>
      <div className='flex flex-wrap gap-4'>{image}</div>
      <div className='flex justify-center gap-6 item-center p-4'>
        <button className='h-10 w-25 bg-white text-black cursor-pointer active:scale-95 rounded-2xl' onClick={PrevPage}>Prev</button>
        <button className='h-10 w-25 bg-white text-black cursor-pointer active:scale-95 rounded-2xl' onClick={NextPage}>Next</button>
      </div>
    </div>
  )
}

export default App