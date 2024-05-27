import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {data} from './assets/data'
import Options from './components/Options/Options'
import { themeContextProvider } from './context/context'
function App() {

// context api
  const [themeMode, setThemeMode]  = useState('light'); 
  const setDarkTheme = ()=>{
    setThemeMode('dark')
  }

  const setLightTheme = ()=>{
    setThemeMode ('light');
  }


  useEffect(()=>{
    document.querySelector('html').classList.remove('dark', 'ligth');
    document.querySelector('html').classList.add(themeMode);
  }, [themeMode])


//
  const savedIndex = parseInt(localStorage.getItem('index'), 10);
  const [index ,setIndex] = useState(!isNaN(savedIndex) ? savedIndex : 0);
  const [question , setQuestion] = useState(data.length > 0 ? data[index] || data[0] : null); 
  const handleButton = () =>{
    const next = (index + 1) % data.length;
    setIndex(next)
    setQuestion(data[next])
  }

  useEffect(()=>{
    localStorage.setItem('index',index)
  },[index])


  return  (
    <themeContextProvider value = {{themeMode , setLightTheme, setDarkTheme}}>
    <hr />
    Quiz
    <hr />
    <div className='m-5'>
    <Options  question = {question} />
    </div>
    <div className='mt-5  flex justify-between mx-4'>
      <p className='py-3 font-thin text-black text-3xl'>{index+ 1} out of {data.length}</p>
    <button className='rounded-full bg-blue-700 text-white w-2/3 h-[50px] text-3xl hover:bg-green-700' onClick={handleButton}>Next</button>
    </div>
    </themeContextProvider>
  )
}

export default App
