import React, { useState } from 'react'
import BalanceComponent from './components/BalanceComponent'
import HistoryComponent from './components/HistoryComponent'
import InputComponent from './components/InputComponent'
import {BalanceProps, TransactionProps } from './models/TransactionModels'

const App = () => {
  let tid=1;
  let newAmount=0;
  const [bank,setBank]=useState<BalanceProps>({
    balance:263,
    transaction:[
      // {id:1,type:"income",text:"Cash",amount:263},
      // {id:2,type:"expense",text:"Food",amount:25},
      // {id:3,type:"expense",text:"Hair Cut",amount:12},
      // {id:4,type:"expense",text:"Water",amount:5},
      // {id:5,type:"income",text:"Salary",amount:215},
      
    ]
  })

  const handleUpdate=(amount:number,text:string,ttype:string)=>{
   let newItem:TransactionProps={id:++tid,type:ttype,text:text,amount:amount}
   newAmount+=amount
   setBank({...bank,balance:newAmount,transaction:[...bank.transaction,newItem]})
  }

  return (
    <div className='container bg-light w-25 my-1 p-4'>
    <h3>Expense Tracker!</h3>
    <BalanceComponent balance={bank.balance} transaction={bank.transaction}/>
    <HistoryComponent balance={bank.balance} transaction={bank.transaction} />
    <InputComponent handleUpdate={handleUpdate} />
    </div>
  )
}

export default App