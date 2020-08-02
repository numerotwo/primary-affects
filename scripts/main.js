let myImage = document.querySelector('img');

myImage.onclick = function() {
  let mySrc = myImage.getAttribute('src')
  if(mySrc === 'images/helmut1.jpg') {
    myImage.setAttribute('src', 'images/helmut2.jpg');
    } else {
      myImage.setAttribute('src', 'images/helmut1.jpg');
    }
  }

  let myButton = document.querySelector('button');
  let myHeading = document.querySelector('h1');

  function setUserName() {
    let myName = prompt('Please enter your name.');
    if (!myName) {
      setUserName();
    } else {
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'Welcome to Numero Two, ' + myName;
  }
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'Welcome to Numero Two, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}
