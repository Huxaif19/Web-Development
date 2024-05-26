import { useEffect, useState } from "react"

function Options(
  {
    question,
  }
) {
  const [selectedOption, setSelectedOption] = useState(null);
  const [lock, setLock] = useState(false)
  useEffect(() => {
    setSelectedOption(null);
  }, [question]);


  
  const checkAnswer = (answer) =>{
    setSelectedOption(answer)
  }
  return (
    <div  className='w-full flex flex-col bg-zinc-500 rounded-lg border border-emerald-300'>
      <h3 className='text-left mx-5 mt-4 text-2xl font-medium '>{question.question}</h3>
      <ul type = 'none' className='w-full rounded text-left px-5 flex flex-wrap'>
        {
          question.options.map((option, index)=>(
              <li key = {index} className={`w-full rounded-lg mb-4 text-3xl mt-4 border border-y-lime-500 p-4 shadow-lg ${selectedOption ? (option === question.correctOption  ? 'bg-lime-400 text-white' : 'bg-red-300 text-white') : ('bg-purple-200')}`} onClick={()=>{checkAnswer(option)}}>
                {option}
              </li>
          ))
        }
      </ul>
    </div>
  )
}

export default Options