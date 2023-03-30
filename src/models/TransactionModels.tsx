export interface TransactionProps{
    id:number,
    type:String,
    text:String,
    amount:number
}

export interface BalanceProps{
    balance:number,
    transaction:TransactionProps[]
}