import React from 'react'

function App() {

  const numbers = [0,1,2,3,4,5,6,7,8,9]

  return (
    <div className='flex flex-row flex-wrap justify-center items-center gap-5 mt-[200px] mx-[600px] border-green-200 border-2 p-5'>
      <input className='border-2 border-green-200 p-1 rounded-full ' type='number' placeholder='enter the passcode'/>
      {numbers.map( number => {
        return (
          <div>
             <button className='px-4 rounded-full bg-green-200 cursor-pointer text-lg font-medium'>{number}</button>
          </div>
           
        )
      })}
    </div>
  )
}

export default App