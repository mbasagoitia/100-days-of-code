//variables for name input, name list, name button, generate button, and random name output
const nameInput = document.querySelector("#name-input");
const addNameButton = document.querySelector("#add-name");
const nameList = document.querySelector("#name-list");
const generateButton = document.querySelector("#generate-button");
const nameOutput = document.querySelector("#output");


//addNameButton.addEventListener("click", addToList(nameInput.value)); why isn't this working???

//array to hold the names that have been added to the list to access later
const nameArray = [];

//when user clicks button, add name to name list
function addToList(name) {
    if (nameArray.length > 24) {
        alert("Maximum number of names reached");
    } else {
    nameArray.push(name);
    let newName = document.createElement("li");
    newName.classList.add("list-item");
    let text = document.createTextNode(name);
    newName.appendChild(text);
    nameList.appendChild(newName);
    clearInput(); 
    //console.log(nameArray);
    }
}

function clearInput() {
    nameInput.value="";
}

//function to choose a random name from nameArray and display it in nameOutput
function displayRandomName() {
    if (nameArray.length === 0) {
        alert("You must add at least one name to the list");
    } else {
    let randomIndex = Math.floor(Math.random()*(nameArray.length));
    //console.log(randomIndex);
    nameOutput.textContent = nameArray[randomIndex];
    }
}