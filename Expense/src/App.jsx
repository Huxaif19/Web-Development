import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Header, Balance, IncomeExpense,Tansaction, AddTransaction, TransactionList} from './components'
import { TransactionContext, TransactionContextProvider } from './components/context/GlobalState'

function App() {
  const deleteTransaction = () =>{
    console.log("hwllo");
  }
  const [transactions,setTrasactions]= useState([
    { id: 1, text: "Flour", amount: -20 },
    { id: 2, text: "Books", amount: 300 },
    { id: 3, text: "Camera", amount: 200 },]
  )
  return (
    <TransactionContextProvider value={{transactions, deleteTransaction}}>
    <div className='flex flex-col gap-4  items-center'>
    <Header/>
    <Balance/>
    <IncomeExpense/>
    <Tansaction/>
    <AddTransaction/>
    </div>
    </TransactionContextProvider>
  )
}

export default App
