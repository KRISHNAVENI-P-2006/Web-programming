require("dotenv").config();
const express=require("express");
const db=require("./db");
const expense=require("./Expense");
const app=express();
app.use(express.json());
app.get("/expenses",async (req,res)=>{
    try{
        const expenses= await expense.find();
        res.json(expenses);
    }catch(err){
        res.status(500).json({error:err.message});
    }
});
app.post("/expenses",async(req,res)=>{
    try{
        const expenses=await expense.create(req.body);
        res.status(201).json(expenses);
    }catch(err){
        res.status(400).json({error:err.message});
    }
});
app.put("/expenses/:id", async (req, res) => {
    try {
        const expenses = await expense.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );

        if (!expenses) {
            return res.status(404).json({ error: "Expense not found" });
        }

        res.json(expenses);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});
app.delete("/expenses/:id", async (req, res) => {
    try {
        const expense = await Expense.findByIdAndDelete(req.params.id);

        if (!expense) {
            return res.status(404).json({ error: "Expense not found" });
        }

        res.json({ message: "Expense deleted" });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});
async function startServer() {
    try {
        await db();

        app.listen(process.env.PORT || 3000, () => {
            console.log("Server is running");
        });
    } catch (err) {
        console.error("Startup failed:", err.message);
        process.exit(1);
    }
}

startServer();