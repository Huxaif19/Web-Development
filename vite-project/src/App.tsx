import './App.css'
// import { Card } from './components/Card/Card'
// import { Header } from './components/Header/Header'
import SignUp from './components/signUp'
// Import the functions you need from the SDKs you need

function App() {

  return (

    <div className='place-items-center grid'>
        <div className="max-w-screen-lg w-full ">
          {/* <Header/> */}
          <SignUp/>
          {/* <Card>hi there</Card> */}
        </div>
    </div>
  )
}

export default App
