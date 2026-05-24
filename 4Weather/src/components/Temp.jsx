import React, { useEffect, useState } from 'react'

const Temp = () => {
    const [inpValue, setInpValue] = useState("")
    const [city, setCity] = useState("Lucknow")
    const [output, setOutput] = useState(null)

    const FetchDetails = async (selectedCity) => {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${selectedCity}&appid=875dffd87fea8089256be1dcbcb73c35&units=metric`)

        const data = await response.json()

        console.log(data);
        setOutput(data.main.temp)
        
    }

    useEffect(() => {
        FetchDetails(city)
    },[city])

    const HandleSearch = () => {
       if (inpValue.trim !== "") {
        setCity(inpValue)
        setInpValue("")
       }
    }



    return (
        <div className="bg-gradient-to-br from-blue-900 via-blue-700 to-blue-500 h-screen flex flex-col items-center justify-center p-6">
            <div className="flex space-x-4 mb-8">
            <input
                className="bg-white/90 text-gray-800 text-center rounded-xl shadow-md h-12 w-72 px-4 focus:outline-none focus:ring-2        focus:ring-blue-400"
                type="text"
                placeholder="Enter City"
                value={inpValue}
                onChange={(e) => 
                    setInpValue(e.target.value)
                }/>
            <button
                className="bg-blue-600 text-white font-semibold h-12 px-6 rounded-xl shadow-md hover:bg-blue-700 transition duration-300"
                onClick={HandleSearch}> Search </button>
            </div>

            <div className="text-white text-3xl font-bold bg-black/30 px-6 py-4 rounded-xl shadow-lg">
            {output !== null ? `${city}: ${output}\u00B0C` : "Loading..."}
            </div>
        </div>
)

}

export default Temp