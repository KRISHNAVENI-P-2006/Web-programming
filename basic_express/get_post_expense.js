const express=require("express");
const app=express();
app.use(express.json());
const expenses=[
    {id:1,title:"Food",amount:250},
    {id:2,title:"Travel",amount:123}
];
app.get("/",(req,res)=>{
    res.send("Go to /expenses to view your expenses<br>Add new expense via external platforms for now");
});
app.get("/expenses",(req,res)=>{
    res.json(expenses);
});
app.post("/expenses",(req,res)=>{
    let expense={id:Date.now(),title:req.body.title,amount:req.body.amount};
    expenses.push(expense);
    res.status(201).json(expense);
});
app.listen(3000,()=>{
    console.log("Server running on port 3000");
});
