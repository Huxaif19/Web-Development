import { useState, useCallback, useEffect, useRef} from 'react'
import './App.css'

function App() {

  const [NumberLength, setLength] = useState(8)
  const [numberAllow , setNumber] = useState(false)
  const [charAllow, setChar] = useState(false)
  const [passwordAllow, setPassword] = useState("")
  const passwordRef = useRef(null)



  const passwordGenerator  = useCallback(()=> {
    let pass = ""
    let str = "ASDFGHJKLZXCVBNMOIUYTREWQzxcvbnmlkjhgfdsaqwertyuiop"
    if (numberAllow) str+= "0987654321"
    if (charAllow) str += "!@#$%&*(){}[]?`~"
    for (let i = 0 ; i < NumberLength; i++)
    {
      let chars = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(chars);
    }
    setPassword(pass)
  },[NumberLength , numberAllow, charAllow,setPassword])



  useEffect(()=> {
    passwordGenerator()
  }, [NumberLength, numberAllow,charAllow, passwordGenerator])


  const copyTest = useCallback(()=> {
    passwordRef.current?.select()
    passwordRef.current.setSelectionRange(0,10)
    window.navigator.clipboard.writeText(passwordAllow)
  }, [passwordAllow])


  return ( 
    <>
    <div className='w-full h-screen flex justify-center items-center bg-green-500'>
      <div className='h-80  justify-center bg-gray-800'
      style={{width:900}}>
        <div className='mb-4'>
         <h1 className='text-white '>Password Generator</h1>
          <input 
          type="text" 
          value={passwordAllow}
          placeholder='password'
          className='bg-white-800 rounded-lg'
          ref = {passwordRef}
          readOnly
          />
          <button className='bg-blue-700 rounded-lg px-2 mx-3' onClick={copyTest}>copy</button>
        </div>
        <div className='flex flex-wrap justify-center '>
          <input type="range"
          min={8}
          max={40}
          value={NumberLength}
          onChange={(e)=> {setLength(e.target.value)}}
          id = 'range-length' 
          className='w-20 cursor-pointer'/>
          <label htmlFor="range-length" className='text-orange-500 mx-1'>Length: {NumberLength}</label>
          <input type="checkbox" 
          id='numbers'
          defaultChecked = {numberAllow}
          onChange={() =>{setNumber((prev) => !prev)}}
          className=''/>
          <label htmlFor="numbers"  className='text-orange-500 mx-1' >Numbers</label>
          <input type="checkbox"
          id='charcters'
          defaultChecked = {charAllow}
          onChange={() => {setChar((prev) => !prev)}}
          />
          <label htmlFor="charcters"  className='text-orange-500 mx-1'>characters</label>
        </div>
      
      </div>
    </div>
    </>
  )
  }
export default App
