/*Sorry, I couldn't exactly figure out how to allow the page
 to submit when the right information (valid username/password, 
matching password) was entered.*/



var usernameInput = document.getElementById("username");
var passwordInput = document.getElementById("password");
var confirmPassword = document.getElementById("confirmpassword");



function FormValidation() {
    if (!CheckUsername() || !CheckValidUsername() || !CheckPassword() || !MatchingPassword()){
        return false;
    } else {
        return true;
  }
}

function CheckUsername() {
    /*Check if the username starts with an alphanumeric character.*/
    var beginningUsername = /^[A-Za-z][A-Za-z0-9]+$/;
    if (usernameInput.value.match(beginningUsername)) {
        document.getElementById('char-message').style.color = 'green';
        document.getElementById('char-message').innerHTML = 'Valid first character.';
        return true;
    } else if (!usernameInput.value.match(beginningUsername)) {    
        document.getElementById('char-message').style.color = 'red';
        document.getElementById('char-message').innerHTML = 'Error: Username must begin with an alphanumeric character.';
        return false;
    }
}

function CheckValidUsername() {
    /*Check if the username contains at least three characters.*/
    var usernameCharacters = /^[A-Za-z]\w{2,20}$/;
    if (usernameInput.value.match(usernameCharacters)) {        
        document.getElementById('uname-message').style.color = 'green';
        document.getElementById('uname-message').innerHTML = 'Good username!';
        return true;
    } else if (!usernameInput.value.match(usernameCharacters)){   
        document.getElementById('uname-message').style.color = 'red';
        document.getElementById('uname-message').innerHTML = 'Error: Username must contain at least 3 alphanumeric characters.';
        return false;
        }
}


function CheckPassword() { 
    var passwordCharacters = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
    if (passwordInput.value.match(passwordCharacters)) {
        document.getElementById('pword-message').style.color = 'green';
        document.getElementById('pword-message').innerHTML = 'Valid Password';  
        return true;
    } else if (!passwordInput.value.match(passwordCharacters)){ 
        document.getElementById('pword-message').style.color = 'red'; 
        document.getElementById('pword-message').innerHTML = 'Error: Password must be at least 8 characters and contain 1 letter, 1 number and a symbol.';  
        return false;
    }
}

function MatchingPassword() {
    if (confirmPassword.value == passwordInput.value) {
        document.getElementById('match-message').style.color = 'green';
        document.getElementById('match-message').innerHTML = 'Passwords Match';
        return true;
    } else  {
        document.getElementById('match-message').style.color = 'red';
        document.getElementById('match-message').innerHTML = 'Error: Passwords do not match.';
        return false;
    }

}



