<?php

$userPassword = $_POST['userPassword'];
$userRepeatPassword = $_POST['userRepeatPassword'];

//waiting for submit button
if($userPassword == $userRepeatPassword){
	header("Location:HomePage.php");
}else{
	echo '<script>
			alert("Password Mismatch");
		 </script>';
			
	echo '<script>
			window.history.go(-1);
		 </script>';
}


?>