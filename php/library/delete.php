<?php
include "db.php";
$id=$_GET['id'];
if(mysqli_query($conn,"delete from library where id='$id'")){
    echo"Book deleted";
    exit();
}
?>