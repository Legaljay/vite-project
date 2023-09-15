import React, { useState } from 'react'

export const CountBtn = () => {

    const [count, setCount] = useState(0)
    function Increment(){
        setCount((prevCount) => prevCount + 1)
    }

    function Decrease(){
        setCount((prevCount) => prevCount == 0 ? 0:prevCount - 1)
    }
  return (
    <div className='mb-32 flex flex-col items-center justify-center'>
        <div className='text-4xl text-white mb-10'>{count}</div>
        <div className='flex gap-5'>
            <button onClick={Decrease} className='bg-yellow-600 p-5 rounded-xl text-black'>-</button>
            <button onClick={Increment} className='bg-yellow-600 p-5 rounded-xl text-black'>+</button><br/>
        </div>
    </div>
  )
}
