<?php
include "db.php";
$id=(int)$_GET['id'];
$sql="select * from student where id=$id";
$res=mysqli_query($conn,$sql);
$row=mysqli_fetch_assoc($res);

if(isset($_POST['edit'])){
    $name=$_POST['name'];
    $dept=$_POST['dept'];
    $mark=$_POST['mark'];
    $sql="update student set name='$name',dept='$dept',mark='$mark' where id='$id'";
    if(mysqli_query($conn,$sql)){
        echo "Student details updated sucessfully !!";
    exit();
    }else {
        echo "Could not update student ";
    }
}
?>
<html>
    <head><title>Student</title>
<link rel="stylesheet" href="style.css"></head>
    <body>
        <form method="POST">
            Id:<input type="text" name="id" value= <?php echo $row['id']; ?> readonly><br><br>
            Name:<input type="text" name="name" value= "<?php echo $row['name']; ?>"  ><br><br>
            Department:<input type="text" name="dept" value= "<?php echo $row['dept']; ?>" ><br><br>
            Mark:<input type="text" name="mark" value= <?php echo $row['mark']; ?> ><br>
            <input type="submit" name="edit" value="Edit" id="submit">
        </form> 
</body>
</html>    