<?php

$lastName = $_POST['lastName'];
$firstName = $_POST['firstName'];
$middleInitial = $_POST['middleInitial'];
$studentNumber = $_POST['studentNumber'];
$yearLevel = $_POST['yearLevel'];
$userBirthday = $_POST['userBirthday'];
$mobileNumber = $_POST['mobileNumber'];
$emailAddress = $_POST['emailAddress'];
$userName = $_POST['userName'];
$userPassword = $_POST['userPassword'];
$userRepeatPassword = $_POST['userRepeatPassword'];

//waiting for submit button
if($userPassword == $userRepeatPassword){
	insertData(lastName,$firstName,$middleInitial
	,$studentNumber,$yearLevel,$userBirthday
	,$mobileNumber,$emailAddress,$userName
	,$userPassword);
	header("Location:HomePage.php");
}else{
	echo '<script>
			alert("Password Mismatch");
		 </script>';
			
	echo '<script>
			window.history.go(-1);
		 </script>';
}

function insertData($lastName,$firstName,$middleInitial,$studentNumber,$yearLevel,$userBirthday,$mobileNumber,$emailAddress,$userName,$userPassword){
	try{
		require 'Database.php'
		
		$sql =  "INSERT INTO userTable (Last Name, First Name, Middle Initial, Student Number, Year Level, Birth Date, Mobile Number, UE Email Address, Username, Password) VALUES (?,?,?,?,?,?,?,?,?,?)";
		
		// no data returned
		$conn->prepare($sql)->execute([$lastName,$firstName,$middleInitial
	,$studentNumber,$yearLevel,$userBirthday
	,$mobileNumber,$emailAddress,$userName
	,$userPassword]);
		
		echo '<script>
					alert ("Congrats")
					</script>';
	} catch (PDOException $e) {
		echo $sql . "<br>" . $e->getMessage();
	}
	$conn = null;
}


?>