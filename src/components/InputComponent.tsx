import React, { FormEvent, useEffect, useRef, useState } from 'react'

interface InputProps{
  handleUpdate:(amount:number,text:string,ttype:string)=>void
}


const InputComponent = ({handleUpdate}:InputProps) => {

  const nameRef=useRef<HTMLInputElement>(null)
  const amountRef=useRef<HTMLInputElement>(null)
  const [amount,setAmount]=useState(0)
  const [text,setText]=useState("")
  const [ttype,setTtype]=useState("")

  const handleSubmit=(event:FormEvent)=>{
    event.preventDefault()
    if(nameRef.current!==null)
      setText(nameRef.current.value)
    if(amountRef.current!==null)
      setAmount(parseInt(amountRef.current.value))
    
  }

  useEffect(()=>{
    if(amount!==0 && text!=="" && ttype!=="")
    handleUpdate(amount,text,ttype)
  },[amount,text])


  return (
    <div className='mt-4'>
      <h5>Add new transaction</h5>
      <hr className="hr"></hr>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name" className="form-label">Name</label>
          <input ref={nameRef} id="name" type="text" className="form-control" placeholder='Enter text' />
        </div>
        <div className='mt-2'>
          <label htmlFor="amount" className="form-label">Amount</label>
          <input ref={amountRef} id="amount" type="text" className="form-control" placeholder='Enter amount'/>
        </div>
        <div className="d-flex justify-content-start gap-5 mt-3">
        <div className="form-check">
          <input  type="radio" value="income" name="ttype" id="income" className="form-check-input" onClick={()=>setTtype("income")}/>
          <label htmlFor="income">Income</label>
        </div>

        <div className="form-check">
          <input  type="radio" value="expense" name="ttype" id="expense" className="form-check-input" onClick={()=>setTtype("expense")}/>
          <label htmlFor="expense">Expense</label>
        </div>
        </div>
        <div><button className="btn btn-secondary mt-3 w-100">Add Transaction</button></div>
      </form>
    </div>
  )
}

export default InputComponent