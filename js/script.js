const imgElement = document.querySelector("img");

const img1URL = "img/logo.png";
const img2URL = "img/alatoo_img.jpeg";

function changePhoto(event){
    let current = imgElement.getAttribute("src");
    if(current == img1URL){
        imgElement.setAttribute("src",img2URL);
    } else {
        imgElement.setAttribute("src", img1URL)
    }
}

imgElement.onclick = changePhoto;

const buttonElement = document.querySelector('button');
const myHeading = document.querySelector("h1");

function satHello(event) {
    var userName = prompt("Enter name: ");
    myHeading.textContent = "Welcome, " + userName + "!";
}

buttonElement.onclick = satHello;


