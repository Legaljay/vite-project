import { useState } from 'react'

export const State = () => {

    const [name, setName] = useState("Deji")

    function handleChange(){
        setName(prompt( "what is your name:"))
    }
  return (
    <div>
        <div className="text-4xl text-white mb-10">{name}</div>
        <button onClick={handleChange} className='bg-yellow-600 p-5 text-white rounded-xl'>Click Me</button>
        <button onClick={handleChange} className='bg-yellow-600 p-5 text-white rounded-xl'>Click Me</button>
        ///////////////////////////////////////
    </div>
  )
}
