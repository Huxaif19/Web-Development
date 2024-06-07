import React, { useState } from 'react'

function AddTransaction() {
    const [text,setText] = useState('');
    const [amount,setAmount] = useState(0)
  return (
    <div className='flex flex-col gap-4 items-start'>
        <h3>Add new transaction</h3>
        <div className='flex flex-col items-start'>
            <label htmlFor="text" className=''>Text</label>
            <input
            type="text" 
            placeholder='enter text...' 
            value={text}
            onChange={(event)=>{
                setText(event.target.value)
            }}
            className='outline-none  border border-emerald-300 rounded-md'
            />
        </div>
        <div className='flex flex-col items-start'>
            <label htmlFor="amount">Amount</label>
            <input
            type="text" 
            placeholder='enter text...' 
            value={amount}
            onChange={(event)=>{
                setAmount(event.target.value)
            }}
            className='outline-none  border border-emerald-300 rounded-md mb-2'
            />
        </div>
        <button className='bg-purple-600  w-full  text-white'>Add Transaction</button>
    </div>
  )
}

export default AddTransaction