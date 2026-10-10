<?php
include "db.php";

if(isset($_POST['submit'])){
    $id=$_POST['id'];
    $name=$_POST['name'];
    $dept=$_POST['dept'];
    $mark=$_POST['mark'];
    $sql="insert into student values ($id,'$name','$dept',$mark)";
    if(mysqli_query($conn,$sql)){
        echo "Student details inserted sucessfully !!";
    }
}
?>
<html>
    <head><title>Student</title>
<link rel="stylesheet" href="style.css"></head>
    <body>
        <h1>Student CRUD</h1>
        <form method="POST">
            Id:<input type="text" name="id" required><br><br>
            Name:<input type="text" name="name" required><br><br>
            Department:<input type="text" name="dept" required><br><br>
            Mark:<input type="text" name="mark" required><br><br>
            <input type="submit" name="submit" id="submit"><br>
        </form> 
        <h2>Student Records</h2>
        <table border="1">
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Department</th>
                <th>Marks</th>
            </tr>
             <?php
             $sql="Select * from student";
             $res=mysqli_query($conn,$sql);
             while($row=mysqli_fetch_assoc($res)){
                ?>
                <tr>
                    <td><?php echo $row['id'];?></td>
                    <td><?php echo $row['name'];?></td>
                    <td><?php echo $row['dept'];?></td>
                    <td><?php echo $row['mark'];?></td>
                    <td><a href="edit.php?id=<?php echo $row['id']; ?> ">Edit|
                        <a href="delete.php?id=<?php echo $row['id']; ?> " onclick="return confirm('Delete this student ?')">Delete
                </td>
                </tr>
             <?php } ?>

</body>
</html>      