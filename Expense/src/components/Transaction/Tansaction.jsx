import React, { useContext } from 'react'
import useTranscation, { TransactionContext } from '../context/GlobalState'
import {TransactionList} from '../../components'
function Tansaction() {
  const {transactions, deleteTransaction} = useTranscation();
  // console.log(context);
  return (
    <div className='flex flex-col items-start'>
      <h3>History</h3>
      {transactions.length > 0 ? (
        <ul>
          {transactions.map((transaction) => (
          <TransactionList key = {transaction.id} transaction= {transaction}/>
          
          ))}
        </ul>
      ) : (
        <p>No transactions to display</p>
      )}
    </div>


  )
}

export default Tansaction