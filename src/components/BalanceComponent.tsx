import React, { useEffect, useState } from 'react'
import { TransactionProps,BalanceProps } from '../models/TransactionModels'

const BalanceComponent = ({balance,transaction}:BalanceProps) => {
    const [income,setIncome]=useState(0)
    const [expense,setExpense]=useState(0)
    useEffect(()=>{
        calcIncomeExpense()
    },[income,expense,transaction])

    function calcIncomeExpense(){
        let i=0;
        let e=0;
        transaction.forEach(element => {
            if(element.type=="income"){
                i+=element.amount
                //
            } else {
                e+=element.amount
               
            }

        });
        setIncome(i)
        setExpense(e) 
    }

  return (
    <div className='my-4'>
        <h5 className='mt-2'>YOUR BALANCE</h5>
        <h3>${income-expense}.00</h3>
        <div className='d-flex gap-5 mt-3 bg-white p-2 justify-content-around shadow-lg'>
            <div>
            <strong>INCOME</strong>
            <h5 style={{color:'lightgreen'}}>${income}.00</h5>
            </div>
            <div>
                <strong>EXPENSE</strong>
                <h5 style={{color:'red'}}>${expense}.00</h5>
            </div>
        </div>
    </div>
    
  )
}

export default BalanceComponent