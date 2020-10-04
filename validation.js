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
	
	var letters = /[.!#@%&'*+/=?()^-_`{|}~A-Za-z]/g;
	var numbers = /[0-9.!#@%&'*+/=?()^-_`{|}~]/g;
	var emailFormat =  /[.a-zA-Z]+@ue.edu.ph/g;
	//var emailWrong = /[.!#@%&'*_-+/=?()^`{|}~] + @[.!#@%&'*_-+/=?()^`{|}~] + .[.!#@%&'*_-+/=?()^`{|}~] + .[.!#@%&'*_-+/=?()^`{|}~]/g;
	var tel = /[.!#@%&'*/=?()^-_`{|}~A-Za-z]/g;
	var userFormat = /[A-Za-z_-]/g;
	var wrongFormat = /[0-9.!#@%&'-_*+/=?()^`{|}~]/g;
	
	//replacing "-" in date
	var newUserBirthday = userBirthdayInput.replace(/-/,"");
	
	
	
		//lastname
		if(lastNameInput.match(numbers) ){
			setErrorFor(lastName, "Please enter Alphabet Characters ");
			return false;	
		}
		else{
			setSuccessFor(lastName);
		}
		
		if(lastNameInput == ""){
			setErrorFor(lastName, "Please fill out this field  ");
			return false;	
		}
		else{
			setSuccessFor(lastName);
		}
		
		
		//firstname
		if(firstNameInput.match(numbers)){
			setErrorFor(firstName, "Please enter Alphabet Characters ");
			return false;
		}
		else{
			setSuccessFor(firstName);
		}
		
		if(firstNameInput == ""){
			setErrorFor(firstName, "Please fill out this field  ");
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
			setErrorFor(studentNumber, "Please enter Numeric Characters ");
			return false;
		}
		else{
			setSuccessFor(studentNumber);
		}
		
		if(studentNumberInput == ""){
			setErrorFor(studentNumber, "Please fill out this field  ");
			return false;	
		}
		else{
			setSuccessFor(studentNumber);
		}
		
		if(studentNumberInput.length < 11){
			setErrorFor(studentNumber, "Must contain at least 11 characters");
			return false;	
		}
		else{
			setSuccessFor(studentNumber);
		}
		
		//yearLevel
		if(yearLevelInput == ""){
			setErrorFor(yearLevel, "Please select an item in the list");
			return false;
		}
		else{
			setSuccessFor(yearLevel);
		}
		
		//birthday
		if(userBirthdayInput == ""){
			setErrorFor(userBirthday, "Please fill out this field");
			return false;
		}
		else{
			setSuccessFor(userBirthday);
			//replacing "-" in date
			var newUserBirthday = userBirthdayInput.replace(/-/,"");
		}
		// validation of age
		if(newUserBirthday > "20021004" ){
			setErrorFor(userBirthday, "Ages 18 and above only")
			return false;
		}
		else{
			setSuccessFor(userBirthday);
		}
		
	
		
		//mobile number
		if(mobileNumberInput.match(tel)){
			setErrorFor(mobileNumber, "Please follow the format: +63 XXXXXXXXX");
			return false;
		}
		else{
			setSuccessFor(mobileNumber);
		}
		if(mobileNumberInput.length != 14){
			setErrorFor(mobileNumber, "Please follow the format: +63 XXXXXXXXX");
			return false;	
		}
		else{
			setSuccessFor(mobileNumber);
		}
		
		//email
		if(emailInput == ""){
			setErrorFor(emailAddress, "Please fill out this field  ");
			return false;	
		}
		else{
			setSuccessFor(emailAddress);
		}
		
		//email2
		if(emailFormat.test(emailInput) == false){
			setErrorFor(emailAddress, "Please enter proper email ");
			return false;
		}
		else{
			setSuccessFor(emailAddress);
		}
		
		
		//username
		if(userNameInput == ""){
			setErrorFor(userName, "Please fill out this field  ");
			return false;	
		}
		else{
			setSuccessFor(userName);
		}
		//userName2
		if(userNameInput.match(wrongFormat)){
			setErrorFor(userName, "Please enter proper username ");
			return false;
		}
		else{
			setSuccessFor(userName);
		}
		
		if(userNameInput.length < 8){
			setErrorFor(userName, "Must contain at least 8 or more characters");
			return false;	
		}
		else{
			setSuccessFor(userName);
		}
		
		//password
		if(userPasswordInput.match(numbers)){
			setErrorFor(userPassword, "Please enter Alphabet Characters ");
			return false;
		}
		else{
			setSuccessFor(userPassword);
		}
		
		if(userPasswordInput == ""){
			setErrorFor(userPassword, "Please fill out this field  ");
			return false;	
		}
		else{
			setSuccessFor(userPassword);
		}
		
		if(userPasswordInput.length < 8 ){
			setErrorFor(userPassword, "Must contain at least 8 or more characters");
			return false;	
		}
		else{
			setSuccessFor(userPassword);
		}
		
		//checkbox
		if(document.form.box.checked == false){
			setErrorFor(box, "You must agree to the terms first");
			return false;
		}
		else{
			setSuccessFor(box);
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