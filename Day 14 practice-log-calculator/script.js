//hide form/show chart button

const form = document.querySelector(".form-content-wrapper");
const button = document.querySelector("#show-chart-button");
const chart = document.querySelector(".chart-content-wrapper");

function showChart () {
    form.classList.add("hidden");
    chart.classList.remove("hidden");
};

function showForm () {
    form.classList.remove("hidden");
    chart.classList.add("hidden");
}

//get current date and display it in the title
let date = new Date();
let day = date.getDate();
let longMonth = date.toLocaleString('en-us', { month: 'long' });
let year = date.getFullYear();

let fullDate = `${longMonth} ${day}, ${year}`;

const dateDisplay = document.querySelector(".date");
dateDisplay.innerText = fullDate;   