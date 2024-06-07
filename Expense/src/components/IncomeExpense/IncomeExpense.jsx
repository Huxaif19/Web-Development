import React, { useState } from 'react'

function IncomeExpense() {
  const [income, setIncome] = useState(0)
  const [balance, setBalance] = useState(0)
  return (
    <>
      <div className='flex  flex-wrap  rounded-full justify-center gap-3 border shadow-sm shadow-neutral-200 w-2/5'>
        <div>
            <h4 className='text-2xl'>Income</h4>
            <p className='text-green-700'>+${income}</p>
        </div>
        <p className='text-3xl font-black mt-1'>|</p>
        <div>
            <h4 className='text-2xl'>Expense</h4>
            <p className='text-red-700'>-${balance}</p>
        </div>
    </div>
    </>
  
  )
}

export default IncomeExpense