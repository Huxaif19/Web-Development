import { List,Chat,Detail } from './components'
function App() {

  return (
    <div className='flex justify-center bg-teal-700/20 w-[90vw] h-[90vh] border rounded-lg'>
      <List/>
      <Chat/>
      <Detail/>
    </div>
  )
}

export default App
