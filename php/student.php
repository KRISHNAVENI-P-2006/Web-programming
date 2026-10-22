<?php

$conn=mysqli_connect("localhost","root","","college");
if(!$conn){
    die("Connection failed !!".mysqli_connect_error());
}
if(isset($_POST['submit'])){
    $name=$_POST['name'];
    $roll=$_POST['roll'];
    $course=$_POST['course'];
    $email=$_POST['email'];

    $sql="insert into student_details values($roll,'$name','$course','$email')";
    if(mysqli_query($conn,$sql)){
        echo "Student inserted sucessfully !!";
    }else{
        echo "Couldnt insert student details ".mysqli_connect_error();
    }
    
}
?>
<html>
    <head><title>Student_details</title>
    <style>
        body{
    background-color: rgb(170, 78, 25);
    font-size: larger;
}
input{
    margin: 8px;
    border: 1px solid black;
}
table{
    width: 600px;
    height:300px;
    border-collapse: collapse;
     background-color: rgb(185, 53, 20);
     align-items: center;
}
td{
    align-items: center;
    justify-content: center;
    
}
button{
    width:100px;
    background-color: burlywood;
    margin-bottom: 5px;
}
form{
    width:500px;
    border: 1px solid brown;
    border-radius: 5%;
    background-color: rgb(160, 38, 7);
}
</style>
</head>
    <body>
        <center>
        <form method="POST">
            Roll No:<input type="text" name="roll"><br><br>
            Name<input type="text" name="name"><br><br>
            Course<input type="text" name="course"><br><br>
            Email<input type="text" name="email"><br><br>
            <button type="submit" name="submit">Register</button>
        </form>
        <table border="1">
            <tr><th>Roll No:</th><th>Name</th><th>Course</th><th>Email</th></tr>
            <?php
            $sql="select * from student_details";
            $res=mysqli_query($conn,$sql);
            while($row=mysqli_fetch_assoc($res)){ ?>
                <tr><td><?php echo $row['roll'] ?> </td> 
                <td><?php echo $row['name'] ?> </td>
                <td><?php echo $row['course'] ?> </td>
                <td><?php echo $row['email'] ?> </td>
                </tr>
            <?php }
    ?>
    </table>
</center>
</body>
</html>

/*
IMPORTANT INFORMATION
This is a purely basic implementation and for educational purposes only. In a secure environment, only use parameterized queries.Else, there is a high chance of SQL Injection

TABLE STRUCTURE
	#	Name	Type	        Collation	            Attributes		   
	1	roll   Primary	    int(11)			          No	        			
	2	name   varchar(20)	utf8mb4_general_ci		No	       			
	3	course varchar(20)	utf8mb4_general_ci		No	       			
	4	email	 varchar(20)	utf8mb4_general_ci		No	       			

*/
