let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/blue-hair.png') {
      myImage.setAttribute ('src','images/green-dress.png');
    } else {
      myImage.setAttribute ('src','images/blue-hair.png');
    }
}
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
function setUserName() {
  let myName = prompt('Please enter your name here.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Welcome to my page, ' + myName;
}
if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'Welcome to my page, ' + storedName;
}
myButton.onclick = function() {
  setUserName();
}