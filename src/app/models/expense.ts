export class Expense{
    amount:number
    category:{name,id} = {name:"",id:""}
    description:string
    timestamp = new Date()
}