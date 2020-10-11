function validation(){
    
    if (validate){
        document.form.submit();
    }
}

function validate() {
	
	var lastNameInput = document.getElementById("lastName").value;
	var firstNameInput = document.getElementById("firstName").value;
	var middleInput = document.getElementById("middleInitial").value;
	var studentNumberInput = document.getElementById("studentNumber").value;
	var yearLevelInput = document.getElementById("yearLevel").value;
	var userBirthdayInput = document.getElementById("userBirthday").value;
	var mobileNumberInput = document.getElementById("mobileNumber").value;
	var emailInput = document.getElementById("emailAddress").value;
	var userNameInput = document.getElementById("userName").value;
	var userPasswordInput = document.getElementById("userPassword").value;
	var repeatPasswordInput = document.getElementById("userRepeatPassword").value;
	var box = document.getElementById("agreeCheck").value;
	
	var letters = /[.!#@%&'*+/=?()^-_`{|}~A-Za-z]/g;
	var numbers = /[0-9.!#@%&'*+/=?()^-_`{|}~]/g;
	var passwordFormat = /[.!#@%&'*+/=?()^-_`{|}~]/g;
	var alpha = /[A-Za-z]/g;
	var numeric = /[0-9]/g;
	var emailFormat =  /^([a-zA-Z@.]+)$/;
	var emailFormatTwo = /[a-zA-Z@.]+@ue.edu.ph\s*$/;
	//var emailWrong = /[.!#@%&'*_-+/=?()^`{|}~] + @[.!#@%&'*_-+/=?()^`{|}~] + .[.!#@%&'*_-+/=?()^`{|}~] + .[.!#@%&'*_-+/=?()^`{|}~]/g;
	var tel = /[.!#@%&'*/=?()^-_`{|}~A-Za-z]/g;
	var userFormat = /[-_A-Za-z]/g;
	var wrongFormat = /[!#@%&'*+/=?()^`{|}~0-9.]/g;
	
	//replacing "-" in date
	var newUserBirthday = userBirthdayInput.replace(/-/,"");
	
	
	
		//lastname
		if(lastNameInput.match(numbers) ){
			setErrorFor(lastName, "Only Alphabet Characters are Allowed");
			return false;	
		}
		else{
			setSuccessFor(lastName);
		}
		
		if(lastNameInput == ""){
			setErrorFor(lastName, "This Field is Required");
			return false;	
		}
		else{
			setSuccessFor(lastName);
		}
		
		
		//firstname
		if(firstNameInput.match(numbers)){
			setErrorFor(firstName, "Only Alphabet Characters are Allowed");
			return false;
		}
		else{
			setSuccessFor(firstName);
		}
		
		if(firstNameInput == ""){
			setErrorFor(firstName, "This Field is Required");
			return false;	
		}
		else{
			setSuccessFor(firstName);
		}
		
		//middleInitial
		if(middleInput.match(numbers)){
			setErrorFor(middleInitial, "Please enter Alphabet Characters ");
			return false;	
		}
		else{	
			setSuccessFor(middleInitial);
		}
		
		if(middleInput.length > 2){
			setErrorFor(middleInitial, "Maximum of 2 characters ");
			return false;	
		}
		else{	
			setSuccessFor(middleInitial);
		}
		
		
		//student numbers
		if(studentNumberInput.match(letters)){
			setErrorFor(studentNumber, "Invalid Student Number");
			return false;
		}
		else{
			setSuccessFor(studentNumber);
		}
		
		if(studentNumberInput == ""){
			setErrorFor(studentNumber, "This Field is Required");
			return false;	
		}
		else{
			setSuccessFor(studentNumber);
		}
		
		if(studentNumberInput.length < 11){
			setErrorFor(studentNumber, "Invalid Student Number");
			return false;	
		}
		else{
			setSuccessFor(studentNumber);
		}
		
		//yearLevel
		if(yearLevelInput == "none"){
			setErrorFor(yearLevel, "This Field is Required");
			return false;
		}
		else{
			setSuccessFor(yearLevel);
		}
		
		//birthday
		if(userBirthdayInput == ""){
			setErrorFor(userBirthday, "This Field is Required");
			return false;
		}
		else{
			setSuccessFor(userBirthday);
			//replacing "-" in date
			var newUserBirthday = userBirthdayInput.replace(/-/,"");
		}
		// validation of age
		if(newUserBirthday > "20021004" ){
			setErrorFor(userBirthday, "Ages 18 And Above Only")
			return false;
		}
		else{
			setSuccessFor(userBirthday);
		}
		if(newUserBirthday < "19400101"){
			setErrorFor(userBirthday, "Invalid Date Range")
			return false;
		}
		else{
			setSuccessFor(userBirthday);
		}
		
	
		
		//mobile number
		if(mobileNumberInput.match(tel)){
			setErrorFor(mobileNumber, "Wrong Format");
			return false;
		}
		else{
			setSuccessFor(mobileNumber);
		}
		if(mobileNumberInput.length == 0){
			setErrorFor(mobileNumber, "This Field Is Required");
			return false;	
		}
		else{
			setSuccessFor(mobileNumber);
		}
		if(mobileNumberInput.length != 14){
			setErrorFor(mobileNumber, "Wrong Format");
			return false;	
		}
		else{
			setSuccessFor(mobileNumber);
		}
		
		
		
		//email
		if(emailInput == ""){
			setErrorFor(emailAddress, "This Field is Required");
			return false;	
		}
		else{
			setSuccessFor(emailAddress);
		}
		
		//email2
		if(emailFormat.test(emailInput) == true){
			if(emailFormatTwo.test(emailInput) == false){
				setErrorFor(emailAddress, "Invalid UE Email Address");
				return false;
			}
			else{
				setSuccessFor(emailAddress);
			}
		}
		else{
			setErrorFor(emailAddress, "Invalid UE Email Address");
			return false;
		}
		
		
		//username
		if(userNameInput == ""){
			setErrorFor(userName, "This Field is Required");
			return false;	
		}
		else{
			setSuccessFor(userName);
		}
		//userName2
		if(userNameInput.match(wrongFormat)){
			setErrorFor(userName, "Only Accepts Alphabets, Dash (-), Or Underscore (_)");
			return false;
		}
		else{
			setSuccessFor(userName);
		}
		
		if(userNameInput.length < 8){
			setErrorFor(userName, "Must Contain At Least 8-15 Characters");
			return false;	
		}
		else{
			setSuccessFor(userName);
		}
		
		
		
		
		//password	
		if(userPasswordInput == ""){
			setErrorFor(userPassword, "This Field is Required");
			return false;	
		}
		else{
			setSuccessFor(userPassword);
		}
		
		if(userPasswordInput.length < 8 ){
			setErrorFor(userPassword, "Please 8-15 Enter Alphanumeric Characters");
			return false;	
		}
		else{
			setSuccessFor(userPassword);
		}
		
		if(numeric.test(userPasswordInput) == true){
			if(alpha.test(userPasswordInput) == true){
				setSuccessFor(userPassword);
			}
			else{
			setErrorFor(userPassword, "Please 8-15 Enter Alphanumeric Characters");
			return false;
			}
		}
		else{
			setErrorFor(userPassword, "Please 8-15 Enter Alphanumeric Characters ");
			return false;
		}
		
		
		
		//repeat pass
		if(repeatPasswordInput == ""){
			setErrorFor(userRepeatPassword, "This Field is Required");
			return false;	
		}
		else{
			setSuccessFor(userRepeatPassword);
		}
		
		//checkbox
		if(document.form.agreeCheck.checked == false){
			setErrorFor(agreeCheck, "You must agree to the terms first");
			return false;
		}
		else{
			setSuccessFor(agreeCheck);
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