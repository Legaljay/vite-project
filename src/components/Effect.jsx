import React, { useEffect } from 'react'

export const Effect = () => {
    useEffect(() => {
        console.log('effect')
    }, []) //it takes in an anonymous function and an array dependency, used to call API's and setTimers, it runs asynchronously, it creates an effect without sideEffect

    //if array [] is empty it is equal to componentDidMount in class component lifeCycle method
  return (
    <div>

    </div>
  )
}
