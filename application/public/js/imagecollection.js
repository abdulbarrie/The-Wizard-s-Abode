function fadeOut(event) {
    /*Sorry, couldn't figure out how to implement this function.*/ 
}


/*I was able to print all images with 4 rows without any text or titles,
but I couldn't figure out how to place the titles below each image.*/ 
function newPhotoTile(data, containerDiv) {
    document.body.onload = newPhotoTile;
    let div = document.createElement('div');
    let img = document.createElement('img');
    let description = document.createElement('figcaption');
    img.src = data.url;
    description.innerText = data.title;
    img.width = "200"
    img.height = "200";
    containerDiv.appendChild(img);
    containerDiv.appendChild(description);
    return div;
}


let mainDiv = document.getElementById("HomepagePhotos");
if (mainDiv){
    let fetchURL = "https://jsonplaceholder.typicode.com/albums/2/photos"
    fetch(fetchURL)
    .then((data) => data.json())
    .then((photos) => {
        let innerHTML = "";
        photos.forEach((photo) => {
            newPhotoTile(photo, mainDiv);
        });
        document.getElementById("number-of-photos").innerHTML= `There are ${photos.length} photos on the page.`;
    })
}