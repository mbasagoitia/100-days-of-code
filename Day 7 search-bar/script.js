const people = [
    { name:"john" },
    { name: "kim" },
    { name: "brian" },
    { name: "steve" },
    { name: "james" },
    { name: "alex" },
    { name: "jeff" },
    { name: "madison" },
    { name: "daniel" },
    { name: "casey" }
];

const list = document.querySelector("#list");
const search = document.querySelector("#searchbar");

function addToList(array) {
    clearList();
    for (let person of array) {
        const item = document.createElement("li");
        item.classList.add("list-item");
        const text = document.createTextNode(person.name);
        item.appendChild(text);
        list.appendChild(item);
    }
    if (group.length === 0) {
        setNoResults();
    }
}

function clearList() {
    while (list.firstChild) {
        list.removeChild(list.firstChild);
    }
}

function setNoResults() {
    const item = document.createElement("li");
    item.classList.add("list-item");
    const text = document.createTextNode("No results");
    item.appendChild(text);
    list.appendChild(item);
}

function getRelevancy(value, searchTerm) {
    if (value == searchTerm) {
        return 2;
    } else if (value.startsWith(term)) {
        return 1;
    } else if (value.includes(searchTerm)) {
        return 0;
    }
    else {
        return -1;
    }
}

search.addEventListener("input", (e) => {
    let value = e.target.value;
    if (value && value.trim().length > 0) {
        value = value.trim().toLowerCase();
        addToList(people.filter(person => {
            return person.name.includes(value);
        }).sort((personA, personB) => {
            return getRelevancy(personB.name, value) - getRelevancy(personA.name, value);
        }));
    } else {
        clearList();
    }
})


