import React from 'react'
import { BalanceProps } from '../models/TransactionModels'

const HistoryComponent = ({transaction}:BalanceProps) => {
  return (
    <div>
      <h5>History</h5>
      <hr className="hr"></hr>

      {transaction.map((item)=>(
        <div key={item.id}>
          <div className={`d-flex bg-white shadow bg-dark-rounded mb-2 p-1 justify-content-between border ${item.type=="income"?"border-success":"border-danger"}`}>
          <div><h6>{item.text}</h6></div>
          <div><h6>${item.amount}.00</h6></div>
          </div>
        </div>
          

      ))}
    </div>
  )
}

export default HistoryComponent