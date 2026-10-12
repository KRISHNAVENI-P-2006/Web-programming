/* ProgramsusingMongoDBdatabasewithNode.js:
Develop aNode.js application that performs basic CRUDoperations on a
MongoDBdatabase formanaginga librarycollection. Theapplicationshould
implementthefollowingfunctionalities:
1. Insertanewbookwithfields: title,author,genre
2.Displayallbooks
3.Updateabook’sgenreusingitstitle
4.Deleteabookusingitstitle*/

const express=require("express");
const mongoose=require("mongoose");
const app=express();
app.use(express.urlencoded({extended:true}));

mongoose.connect("mongodb://127.0.0.1/wplab").then(()=>console.log("MongoDB server started ")).catch(err =>console.log(err));
const Book=mongoose.model("Book",new mongoose.Schema({
    title:String,
    author:String,
    genre:String
}));

app.get("/",async (req,res)=>{
    const book=await Book.find();
    let rows=book.map(b=>
        `<tr>
        <td>${b.title}</td>
        <td>${b.author}</td>
        <td>${b.genre}</td>
        </tr>
        `
    ).join(" ");
    res.send(`
        <h2>Library</h2>
        <h3>Insert Book</h3>
        <form method="POST" action="/add">
        Title
        <input type="text" name="title" required>
        Author
        <input type="text" name="author" required>
        Genre
        <input type="text" name="genre" required>
        <button type="Submit">Add</button>
        </form>

        
        <a href="/"><h3>Display Books</h3></a>
        <table border="1">
        <tr><th>Title</th><th>Author</th><th>Genre</th></tr>
        ${rows}
        </table>

        <h3>Update Book</h3>
        <form method="POST" action="/update">
        Title
        <input type="text" name="title" required>
        Author
        <input type="text" name="author" required>
        Genre
        <input type="text" name="genre" required>
        <button type="Submit">Update</button>
        </form>

        <h3>Delete Book</h3>
        <form method="POST" action="/delete">
        Title
        <input type="text" name="title" required>
        <button type="Submit">Delete</button>
        </form>

        `);
});

app.post("/add",async (req,res)=>{
    await Book.create(req.body);
    res.redirect("/");
});

app.post("/update",async(req,res)=>{
    const updt =await Book.updateOne(
        {title:req.body.title},
        {$set:{genre:req.body.genre, author:req.body.author}}
    );
    res.send(updt.matchedCount?'Updated sucessfully<br><a href="/">Go back</a>':'No matches<br><a href="/">Go back</a>');
});

app.post("/delete",async(req,res)=>{
    const dlt=await Book.deleteOne(
        {title:req.body.title}
    );
    res.send(dlt.deletedCount?'Deleted sucessfully<br><a href="/">Go back</a>':'No matches<br><a href="/">Go back</a>');
})

app.listen(3000,()=>{
    console.log("Server running on port 3000");
})