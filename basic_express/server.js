const express=require("express");
const app=express();
app.use(express.json());
app.get("/",(req,res)=>{
    res.send("Node.js server !!");
});
app.get("/about",(req,res)=>{
    res.send("Wherabouts ? <br>Nothing here !!");
    //res.json({message:"Learning Node.js n Express"});
});
app.listen(3000,()=>{
    console.log("Server running on port 3000");
});
