// Normal program flows
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');
var myImage = document.querySelector('img');
myHeading.textContent = 'Hello world!';

var iceCream = 'chocolate';
if (iceCream === 'chocolate') {
  alert('Yay, I love chocolate ice cream!');    
} else {
  alert('Awwww, but chocolate is my favorite...');    
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Mozilla is cool, ' + storedName;
}

// Functions
function multiply(num1, num2) {
  var result = num1 * num2;
  return result;
}
function setUserName() {
  var myName = prompt('Please enter your name.');
  myHeading.textContent = 'Mozilla is cool, ' + myName;
  localStorage.setItem('name', myName); // Save it to local variable 'name'
}

// Events
// document.querySelector('html').onclick = function() {
    // alert('Ouch! Stop poking me!');
// }
myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/firefox-icon.png') {
      myImage.setAttribute ('src','images/firefox2.png');
    } else {
      myImage.setAttribute ('src','images/firefox-icon.png');
    }
}
myButton.onclick = function() {
  setUserName();
}