<?php
include "db.php";
if(isset($_POST['submit'])){
    $id=$_POST['id'];
    $name=$_POST['name'];
    $author=$_POST['author'];
    $genre=$_POST['genre'];
    $sql="insert into library values ($id,'$name','$author','$genre')";
    if(mysqli_query($conn,$sql)){
        echo "Book added";
        }

}
?>
<html>
    <head><title>LIBRARY</title></head>
    <body>
        <form method="POST">
            Id:<input type="text" name="id"><br><br>
            Name:<input type="text" name="name"><br><br>
            Author:<input type="text" name="author"><br><br>
            Genre:<input type="text" name="genre"><br><br>
            <input type="submit" name="submit">
</form>
<h2>Book Details</h2>
<table>
    <tr><th>Id</th><th>Title</th><th>Author</th><th>Genre</th></tr>
    <?php 
    $res=mysqli_query($conn,"select * from library");
    while($row=mysqli_fetch_assoc($res)){?>
    <tr><td> <?php echo $row['id']; ?></td>
    <td> <?php echo $row['title']; ?></td>
    <td> <?php echo $row['author']; ?></td>
    <td> <?php echo $row['genre']; ?></td>
    <td><a href="edit.php?id= <?php echo $row['id']; ?> ">Edit
        <a href="delete.php?id= <?php echo $row['id']; ?> " onclick="return confirm('Delete this book?')">Delete
    </tr>
    <?php } ?>
</table>
</body>
</html>
