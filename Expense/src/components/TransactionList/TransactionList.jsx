import React from 'react'

function TransactionList({transaction}) {
    const sign = transaction.amount < 0 ? '-' : '+';
  return (
    <div className='mb-4 bg-purple-200'>
        <li key={transaction.id} className={`border-r-4 ${transaction.amount < 0 ? 'border-red-600' : 'border-green-700'} flex flex-wrap justify-start gap-2 items-center`}>
        <button  className="opacity-0 group-hover:opacity-100  bg-red-500 text-white p-2 m-2 text-2xl rounded-full transition-opacity">X</button>
            {transaction.text}<span>{sign}${Math.abs(transaction.amount)}</span>
          </li>
    </div>
  )
}

export default TransactionList