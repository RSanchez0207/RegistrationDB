<?php

$userEmail =$_POST['emailAddress']
$userName = $_POST['userName']
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

function insertData($userName, $userPassword, $userEmail){
	try{
		require 'database.php'
		
		$sql =  "INSERT INTO accounts (userName, userPassword, mail) VALUES (?,?,?)";
		
		// no data returned
		$conn->prepare($sql)->execute([$userName,$userPassword,$userEmail]);
		
		echo '<script>
					alert ("Congrats")
					</script>';
	} catch (PDOException $e) {
		echo $sql . "<br>" . $e->getMessage();
	}
	$conn = null;
}


?>