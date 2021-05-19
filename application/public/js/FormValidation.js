

/*This file is for all the validation for searching images, displaying
flash messages, and the code for my special feature for the website.
It originally contained my Form Validation for checking if a user
registers a new account with valid data, but I moved it to the
Registration.hbs file. I also did the same for posting a new image.*/


/*This function allows the user to click the search icon to make the
search bar appear.*/
function searchBar() {
    var x = document.getElementById("WA-dropdownsearchbar");
    if (x.style.display == "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
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
   innerFlashDiv.setAttribute('class', 'alert-info');
   document.getElementById('WA-flashmessagebetween').appendChild(flashMessageDiv);
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

// Default blue/purple image.
var orb1 = "url('http://localhost:3000/public/css/fonts/The%20Wizards%20Abode%20Background%20Image%20(Newest%20Version%201).png')";

// Green/yellow image.
var orb2 = "url('http://localhost:3000/public/css/fonts/The%20Wizards%20Abode%20Background%20Image%20(Newest%20Version%202).png')";

// Red/orange image.
var orb3 = "url('http://localhost:3000/public/css/fonts/The%20Wizards%20Abode%20Background%20Image%20(Newest%20Version%203).png')";

// Gray/black/white image.
var orb4 = "url('http://localhost:3000/public/css/fonts/The%20Wizards%20Abode%20Background%20Image%20(Newest%20Version%204).png')";


// This function sets a given theme to the background image.
function setTheme(themeName) {
    localStorage.setItem('theme', themeName);
    document.body.style.backgroundImage = themeName;
}

// "backgroundOrb1" will toggle between the default first theme and the green/yellow theme.
function backgroundOrb1() {
   if (localStorage.getItem('theme') === orb1 || orb3 || orb4) {
       setTheme(orb2);
   }
}

/* This function immediately sets the theme the user last chose. I placed it on all four 
"backgroundOrb" functions to ensure that they work for all themes.
*/
(function () {
    if (localStorage.getItem('theme') === orb1) {
        setTheme(orb1);
    } else if (localStorage.getItem('theme') === orb2) {
        setTheme(orb2);
    } else if (localStorage.getItem('theme') === orb3) {
        setTheme(orb3);
    } else if (localStorage.getItem('theme') == orb4) {
        setTheme(orb4);
    }

})();

// "backgroundOrb2" will toggle between the default first theme and the red/orange theme.
 function backgroundOrb2() {
    if (localStorage.getItem('theme') === orb1 || orb2 || orb4) {
       setTheme(orb3);
   } 
}

// Immediately invoked function to set the theme on initial load
(function () {
    if (localStorage.getItem('theme') === orb1) {
        setTheme(orb1);
    } else if (localStorage.getItem('theme') === orb2) {
        setTheme(orb2);
    } else if (localStorage.getItem('theme') === orb3) {
        setTheme(orb3);
    } else if (localStorage.getItem('theme') == orb4) {
        setTheme(orb4);
    }
})();

// "backgroundOrb3" will toggle between any other theme with the gray/black/white theme.
 function backgroundOrb3() {
    if (localStorage.getItem('theme') === orb1 || orb2 || orb3) {
        setTheme(orb4);
    }
 }

 // Immediately invoked function to set the theme on initial load
 (function () {
    if (localStorage.getItem('theme') === orb1) {
        setTheme(orb1);
    } else if (localStorage.getItem('theme') === orb2) {
        setTheme(orb2);
    } else if (localStorage.getItem('theme') === orb3) {
        setTheme(orb3);
    } else if (localStorage.getItem('theme') == orb4) {
        setTheme(orb4);
    }
 })();


// "backgroundOrb4()" will allow the user to revert to the original theme.
 function backgroundOrb4() {
    if (localStorage.getItem('theme') === orb2 || orb3 || orb4) {
       setTheme(orb1);
   } else {
       setTheme("url('http://localhost:3000/public/css/fonts/The%20Wizards%20Abode%20Background%20Image%20(Newest%20Version%201).png')");
   }
}
// Immediately invoked function to set the theme on initial load
(function () {
    if (localStorage.getItem('theme') === orb1) {
        setTheme(orb1);
    } else if (localStorage.getItem('theme') === orb2) {
        setTheme(orb2);
    } else if (localStorage.getItem('theme') === orb3) {
        setTheme(orb3);
    } else if (localStorage.getItem('theme') == orb4) {
        setTheme(orb4);
    }
})();


 
