<?php
include "db.php";

$id=(int)$_GET['id'];
$sql="delete from student where id='$id'";
if(mysqli_query($conn,$sql)){
    echo "Student deleted";
    exit();
}else{
    echo"Could not delete";
}
?>