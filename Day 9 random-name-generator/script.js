//variables for name input, name list, name button, generate button, and random name output
const nameInput = document.querySelector("#name-input");
const addNameButton = document.querySelector("#add-name");
const nameList = document.querySelector("#name-list");
const generateButton = document.querySelector("#generate-button");
const nameOutput = document.querySelector("#output");

//when user clicks button, add name to name list
//addNameButton.addEventListener("click", addToList(nameInput.value)); why isn't this working???
//max 27 names will fit on the list, how do I do this

function addToList(name) {
    let newName = document.createElement("li");
    newName.classList.add("list-item");
    let text = document.createTextNode(name);
    newName.appendChild(text);
    nameList.appendChild(newName);
    clearInput(); 
}

function clearInput() {
    nameInput.value="";
}
