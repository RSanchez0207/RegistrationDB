function validation(){
    
    if (validate){
        document.form.submit();
    }
}

function verify() {
	
	
	var userNameInput = document.getElementById("username").value;
	var userPasswordInput = document.getElementById("password").value;
	

	
	var alpha = /[A-Za-z]/g;
	var numeric = /[0-9]/g;

	


	var wrongFormat = /[!#@%&'*+/=?()^`{|}~0-9.]/g;
	
		
		//username
		if(userNameInput == ""){
			setErrorFor(username, "This Field is Required");
			return false;	
		}
		else{
			setSuccessFor(username);
		}
		//userName2
		if(userNameInput.match(wrongFormat)){
			setErrorFor(username, "Only Accepts Alphabets, Dash (-), Or Underscore (_)");
			return false;
		}
		else{
			setSuccessFor(username);
		}
		
		if(userNameInput.length < 8){
			setErrorFor(username, "Must Contain At Least 8-15 Characters");
			return false;	
		}
		else{
			setSuccessFor(username);
		}
		
		
		
		
		//password	
		if(userPasswordInput == ""){
			setErrorFor(password, "This Field is Required");
			return false;	
		}
		else{
			setSuccessFor(password);
		}
		
		if(userPasswordInput.length < 8 ){
			setErrorFor(password, "Please 8-20 Enter Alphanumeric Characters");
			return false;	
		}
		else{
			setSuccessFor(password);
		}
		
		if(numeric.test(userPasswordInput) == true){
			if(alpha.test(userPasswordInput) == true){
				setSuccessFor(userPassword);
			}
			else{
			setErrorFor(password, "Please Enter Alphanumeric Characters");
			return false;
			}
		}
		else{
			setErrorFor(password, "Please Enter Alphanumeric Characters ");
			return false;
		}
		


		
		
		
		
		
	return true;
	
	
	
}


//display Error
function setErrorFor(input, message) {
	var formControl = input.parentElement;
	var small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}

//display success
function setSuccessFor(input) {
	var formControl = input.parentElement;
	formControl.className = 'form-control success';
}