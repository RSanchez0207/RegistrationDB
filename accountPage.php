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

//delete from database
//DELETE FROM usertable WHERE middleInitial="d"



//waiting for submit button
if($userPassword == $userRepeatPassword){
	insertData($lastName,$firstName,$middleInitial
	,$studentNumber,$yearLevel,$userBirthday
	,$mobileNumber,$emailAddress,$userName
	,$userPassword);
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
		require 'Database.php';
		
		$sql =  "INSERT INTO usertable (lastName, firstName, middleInitial, studentNumber
		, yearLevel, birthDate, mobileNumber, ueEmailAddress, userName, userPassword) VALUES (?,?,?,?,?,?,?,?,?,?)";
		
		
		//username database
		 $userNameDb = $conn->prepare("SELECT count(*) as cntUser FROM usertable WHERE username=:username");
		   $userNameDb->bindValue(':username', $userName, PDO::PARAM_STR);
		   $userNameDb->execute(); 
		   $count = $userNameDb->fetchColumn();
				
				// check if username exist
				if($count > 0){
					echo '<script>
						alert("Username Already Exist");
					 </script>';
						
						echo '<script>
						window.history.go(-1);
					 </script>';
				}else{
					// insert of data to database
					$conn->prepare($sql)->execute([$lastName,$firstName,$middleInitial
						,$studentNumber,$yearLevel,$userBirthday
						,$mobileNumber,$emailAddress,$userName
						,$userPassword]);
					sleep(2);
					header("Location:HomePage.html");
				}
			
	} catch (PDOException $e) {
		echo $sql . "<br>" . $e->getMessage();
	}
	$conn = null;
}


?>