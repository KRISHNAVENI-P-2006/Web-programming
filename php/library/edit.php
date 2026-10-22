<?php
include "db.php";
$id=(int)$_GET['id'];
if(isset($_POST['edit'])){
    $id=$_POST['id'];
    $name=$_POST['name'];
    $author=$_POST['author'];
    $genre=$_POST['genre'];
    $sql="update library set title='$name',author='$author',genre='$genre' where id='$id'";
    if(mysqli_query($conn,$sql)){
        echo "Book edited";
        exit();
        }

}
?>
<html>
    <head><title>LIBRARY</title></head>
    <body>
        <form method="POST">
            Id:<input type="text" name="id" readonly ><br><br>
            Name:<input type="text" name="name"><br><br>
            Author:<input type="text" name="author"><br><br>
            Genre:<input type="text" name="genre"><br><br>
            <input type="submit" name="edit" value="Edit">
</form>
</body>
</html>