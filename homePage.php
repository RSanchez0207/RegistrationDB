<?php


$loginUserName = $_POST['username'];
$loginUserPassword = $_POST['password'];


//delete from database
//DELETE FROM usertable WHERE middleInitial="d"

require 'Database.php';

// select a particular user by password
$check = $conn->prepare("SELECT userName  FROM usertable WHERE userPassword= '$loginUserPassword'");
$check->execute([$loginUserPassword]); 
$user = $check->fetch();

//echo implode(',',$user);

if($user[0] == $loginUserName){
    //Login succesfull
    echo '<script>
						alert("Login Succesfull");
					 </script>';
					 sleep(2);
						
						echo '<script>
						window.history.go(-1);
					 </script>';
}
else{
    echo '<script>
						alert("Username/Password Dont Exist");
					 </script>';
					 sleep(2);
						echo '<script>
						window.history.go(-1);
					 </script>';
}






?>