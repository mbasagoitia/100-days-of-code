//get current date and display it in the title
let date = new Date();
let day = date.getDate();
let longMonth = date.toLocaleString('en-us', { month: 'long' });
let year = date.getFullYear();

let fullDate = `${longMonth} ${day}, ${year}`;

const dateDisplay = document.querySelector(".date");
dateDisplay.innerText = fullDate;  

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

//set checkmark background on empty squares
const emptyBox = document.querySelectorAll(".empty-space");

emptyBox.addEventListener("click", function () {
    emptyBox.forEach(element => element.addEventListener("click", function () {
        element.classList.add("check-background");
    }))
})

//calculate total practice time
const totalHours = document.querySelector("#practice-time-hours");
const totalMins = document.querySelector("#practice-time-minutes");

let totalPracticeTime;

totalHours.addEventListener("input", function () {
    if (!totalHours.value) {
        totalPracticeTime = parseInt(totalMins.value);
        //console.log(totalPracticeTime);
    } else if (!totalMins.value) {
        totalPracticeTime = parseInt(totalHours.value)*60;
        //console.log(totalPracticeTime);
    } else {
    totalPracticeTime = parseInt(totalHours.value)*60 + parseInt(totalMins.value);
    //console.log(totalPracticeTime);
    }
})

totalMins.addEventListener("input", function () {
    if (!totalHours.value) {
        totalPracticeTime = parseInt(totalMins.value);
        //console.log(totalPracticeTime);
    } else if (!totalMins.value) {
        totalPracticeTime = parseInt(totalHours.value)*60;
        //console.log(totalPracticeTime);
    } else {
    totalPracticeTime = parseInt(totalHours.value)*60 + parseInt(totalMins.value);
    //console.log(totalPracticeTime);
    }
})

//get warmup time

const warmup = document.querySelector("#warmup-input");
let warmupTime;

warmup.addEventListener("input", function () {
    warmupTime = parseInt(warmup.value);
    //console.log(warmupTime);
})