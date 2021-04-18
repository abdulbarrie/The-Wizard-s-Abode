/*Sorry, I couldn't exactly figure out how to allow the page
 to submit when the right information (valid username/password, 
matching password) was entered.*/


function CheckUsernameStart(characterInput) {
    var beginningUsername = /^[A-Za-z][A-Za-z0-9]+$/;
    if(characterInput.value.match(beginningUsername)) {
        document.getElementById('submit').onclick = function(){
        document.getElementById('char-message').style.color = 'green';
        document.getElementById('char-message').innerHTML = 'Valid first character.';
        return true;
        }
    } else if (!characterInput.value.match(beginningUsername)) {
        document.getElementById('submit').addEventListener("click", function(event) {
            event.preventDefault();
            document.getElementById('char-message').style.color = 'red';
            document.getElementById('char-message').innerHTML = 'Error: Username must begin with an alphanumeric character.';
            return false;
        }); 
    }
}

    function CheckProperUsername(usernameInput) {
        var usernameCharacters =  /^[A-Za-z]\w{2,20}$/;
        if(usernameInput.value.match(usernameCharacters)) {
            document.getElementById('submit').onclick = function(){
                document.getElementById('uname-message').style.color = 'green';
                document.getElementById('uname-message').innerHTML = 'Good username!';
                return true;
            }
        } else {
            document.getElementById('submit').addEventListener("click", function(event) {
                event.preventDefault();
                document.getElementById('uname-message').style.color = 'red';
                document.getElementById('uname-message').innerHTML = 'Error: Username must contain at least 3 alphanumeric characters.';
                return false;
        });
    }
}




function CheckPassword(passwordInput) { 
    var passwordCharacters = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
    if (passwordInput.value.match(passwordCharacters)) {
        document.getElementById('submit').onclick = function(){
        document.getElementById('message3').style.color = 'green';
        document.getElementById('message3').innerHTML = 'Valid Password';
        return true;
        }
    } else { 
        document.getElementById('submit').addEventListener("click", function(event) {
            event.preventDefault();
            document.getElementById('message3').style.color = 'red';
            document.getElementById('message3').innerHTML = 'Error: Password must be at least 8 characters and contain 1 letter, 1 number and a symbol.';
            return false;
        });
    }
}

function PasswordMatching() {
    var passwordCharacters = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmpassword").value;
    if (passwordCharacters == confirmPassword) {
        document.getElementById('submit').onclick = function(){
        document.getElementById('message4').style.color = 'green';
        document.getElementById('message4').innerHTML = 'Passwords Match';
        return true;
        }
        } else {
        document.getElementById('submit').addEventListener("click", function(event) {
            event.preventDefault();
            document.getElementById('message4').style.color = 'red';
            document.getElementById('message4').innerHTML = 'Error: Passwords do not match.';
            return false;
        });
    }
}



