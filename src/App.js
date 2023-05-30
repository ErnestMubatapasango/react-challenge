import React from 'react'

function App() {

  const numbers = [0,1,2,3,4,5,6,7,8,9];
  const passcode = "7021";

  const [enteredNumber, setEnteredNumber] = React.useState([])
  const [error, setError] = React.useState("");
  const [isCorrect, setIsCorrect] = React.useState(false)

  // function handleChange(e){
  //   const [name, value] = e.target
  //   value = JSON.stringify(enteredNumber)
  //   setDisplayNumber(prevNumber => ({...prevNumber, name: [value]}))
  // }
  
  React.useEffect(() => {
    if(enteredNumber.length === 1){
      setError("")
    }
    if(enteredNumber.length === passcode.length){
      if(enteredNumber.join('') === passcode){
        setError("you have logged in")
        setIsCorrect(true)
        setEnteredNumber([])
      }
      else{
       setError('wrong password')
        setEnteredNumber([])
      }
    }
  }, [enteredNumber])

  return (
    
    <div className='text-center mt-[200px] mx-[600px] border-green-200 border-2 p-5'>
      {isCorrect ? <div>Welcome!!!!</div> : 
      <><div>
          {JSON.stringify(enteredNumber)}
        </div><p>{error}</p><div className='flex flex-row flex-wrap justify-center items-center gap-5 mt-5'>

            {/* <input
      className='border-2 border-green-200 p-1 rounded-full outline-none'
      type='number'
      placeholder='enter the passcode'
      value={displayNumber}
      onChange={handleChange}
      name='displayNumber'
    /> */}

            {numbers.map(number => {
              return (
                <div className=''>

                  <button
                    className='px-4 rounded-full bg-green-200 cursor-pointer text-lg font-medium'
                    onClick={(() => (
                      setEnteredNumber((prevEnteredNumber) => [...prevEnteredNumber, number])
                      // console.log(enteredNumber)
                    ))}

                  >
                    {number}
                  </button>
                </div>

              );
            })}
          </div></>
}
  </div>
      
  )
}

export default App