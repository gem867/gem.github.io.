const myImage = document.querySelector("img");

myImage.onclick = () => {
    const mySrc = myImage.getAttribute("src");
    if (mySrc === "images/logo-name.png") {
        myImage.setAttribute ("src", "images/pink-bouquet.png");
    } else {
        myImage.setAttribute ("src", "images/logo-name.png");
    }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");


function setUserName() {
    const myName = prompt("Please enter your name.");
    if (!myName) {
      setUserName();
    } else {
      localStorage.setItem("name", myName);
      myHeading.textContent = `The flowers are very beautiful!, ${myName}`;
    }
  }

  
  
if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `The flowers are very beautiful!, ${storedName}`;
  }
  

myButton.onclick = () => {
    setUserName();
  };
  

