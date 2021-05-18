/*Sorry, I couldn't exactly figure out how to allow the page
 to submit when the right information (valid username/password, 
matching password) was entered.
EDIT: I actually got it to work. These next few blocks/functions
of code is for my Form Validation, for when a user registers 
a new account.*/


function searchBar() {
    var x = document.getElementById("WA-dropdownsearchbar");
    if (x.style.display == "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

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



/*These next few functions are for my Image Validation for 
when a user posts a new image. */


var titleInput = document.getElementById("posttitle");
var descriptionInput = document.getElementById("description");


function ImageValidation() {
    if (!CheckTitle() || !CheckDescription()){
        return false;
    } else {
        return true;
  }
}

function CheckTitle() {
    var actualTitle = /^[A-Za-z][A-Za-z0-9]+$/;
    if (titleInput.value.match(actualTitle)) {
        document.getElementById('title-message').style.color = 'green';
        document.getElementById('title-message').innerHTML = 'Decent title';
        return true;
    } else if (!titleInput.value.match(actualTitle)) {    
        document.getElementById('title-message').style.color = 'red';
        document.getElementById('title-message').innerHTML = 'Error: Must enter a title for your post.';
        return false;
    }
}


function CheckDescription() {
    var actualDescription = /^[A-Za-z][A-Za-z0-9]+$/;
    if (descriptionInput.value.match(actualDescription)) {
        document.getElementById('description-message').style.color = 'green';
        document.getElementById('description-message').innerHTML = 'Decent title';
        return true;
    } else if (!descriptionInput.value.match(actualDescription)) {    
        document.getElementById('description-message').style.color = 'red';
        document.getElementById('description-message').innerHTML = 'Error: Must enter a description for your post.';
        return false;
    }
}

/*This function is for setting the opacity and time for the 
Flash Message which pops up to show users an alert.*/
function setFlashMessageFadeOut(flashMessageElement) {
    setTimeout(() => {
        let currentOpacity = 1.0;
        let timer = setInterval(() => {
            if (currentOpacity < 0.05) {
                clearInterval(timer);
                flashMessageElement.remove();
            }
            currentOpacity = currentOpacity - .05;
            flashMessageElement.style.opacity = currentOpacity;
        }, 50);
    }, 4000);
}

/*These next few blocks of code are for the front end of searching for
posts for the website.*/

function addFlashFromFrontEnd(message) {
   let flashMessageDiv = document.createElement('div');
   let innerFlashDiv = document.createElement('div');
   let innerTextNode = document.createTextNode(message);
   innerFlashDiv.appendChild(innerTextNode);
   flashMessageDiv.appendChild(innerFlashDiv);
   flashMessageDiv.setAttribute('id', 'flash-message');
   innerFlashDiv.setAttribute('class', 'alert alert-info');
   document.getElementsByTagName('body')[0].appendChild(flashMessageDiv);
   setFlashMessageFadeOut(flashMessageDiv);
}

function createCard(postData){
    return `<div id="post-${postData.id}" class="HomepagePhotos">
    <img class="HomepagePhotos-image" src="${postData.thumbnail}" alt="Missing Image">
    <div class="HomepagePhotos-body">
        <p class="HomepagePhotos-title">${postData.title}</p>
        <p class="HomepagePhotos-description">${postData.description}</p>
        <a href="/post/${postData.id}" class="HomepagePhotos-postdetails">Post Details</a>
    </div>
</div>`;
}


function executeSearch() {
    let searchTerm = document.getElementById('theabode-search').value;
    if (!searchTerm) {
        addFlashFromFrontEnd('Your search term seems to have drunk an invisibility potion...')
        return;
    }
    let mainContent = document.getElementById('imageposts');
    let searchURL = `/posts/search?search=${searchTerm}`;
    fetch(searchURL)
    .then((data) => {
        return data.json();
    })
    .then((data_json) => {
        let newMainContentHTML ='';
        data_json.results.forEach((row) => {
            newMainContentHTML += createCard(row);
        });
        mainContent.innerHTML = newMainContentHTML;
        if(data_json.message) {
            addFlashFromFrontEnd(data_json.message);
        }
    })
    .catch((err) => console.log(err));
}

let flashElement = document.getElementById('flash-message');
if (flashElement) {
    setFlashMessageFadeOut(flashElement);
}

let searchButton = document.getElementById('theabode-search');
searchButton.addEventListener("keyup", ({key}) => {
    if (key === "Enter") {
        executeSearch();
   }
})



/**This is where my functions to change the theme of my website will be.
 * As stated, I made four glowing orbs along with four background images
 * that will display when a user clicks one of the orbs. If the user 
 * chooses Orb 1 (red and orange), the theme will change to my red and
 * orange background image. If the user chooses Orb 2 (green and yellow),
 * the theme will change to my green and yellow background image and so on.
 */

function backgroundOrb1() {
    document.body.style.backgroundImage = "url('https://na.finalfantasyxvi.com/assets/images/na/kv/kv_pc.jpg')";
 }

 function backgroundOrb2() {
    document.body.style.backgroundImage = "url('The\ Wizard\'s\ Abode\ Background\ Image\ \(Newest\ Version\ 1\).png')";
 }

 function backgroundOrb3() {
    document.body.style.backgroundImage = "url('/fonts/The\ Wizard\'s\ Abode\ Background\ Image\ \(Newest\ Version\ 2\).png')";
 }

 function backgroundOrb4() {
    document.body.style.backgroundImage = "url('/fonts/The\ Wizard\'s\ Abode\ Background\ Image\ \(Newest\ Version\ 1\).png')";
 }


 
