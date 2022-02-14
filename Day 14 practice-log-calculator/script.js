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

//set checkmark background on empty squares when clicked

const checkBox = document.querySelectorAll(".empty-space");
checkBox.forEach(element => {
    element.addEventListener("click", function () {
        element.classList.toggle("check-background");
    })
})

//calculate total practice time
const totalHours = document.querySelector("#practice-time-hours");
const totalMins = document.querySelector("#practice-time-minutes");

let totalPracticeTime;
let totalPracticeTimeArray = [];

totalHours.addEventListener("input", function () {
    if (!totalHours.value) {
        totalPracticeTime = parseInt(totalMins.value);
        totalPracticeTimeArray.push(totalPracticeTime);
        console.log(totalPracticeTimeArray);
    } else if (!totalMins.value) {
        totalPracticeTime = parseInt(totalHours.value)*60;
        totalPracticeTimeArray.push(totalPracticeTime);
        console.log(totalPracticeTimeArray);
    } else if (parseInt(totalHours.value) > 24) {
        alert("Please choose a time frame that is less than 24 hours");
        totalHours.value = "";
    }
    else {
    totalPracticeTime = parseInt(totalHours.value)*60 + parseInt(totalMins.value);
    totalPracticeTimeArray.push(totalPracticeTime);
    console.log(totalPracticeTimeArray);
    }
})

totalMins.addEventListener("input", function () {
    if (!totalHours.value) {
        totalPracticeTime = parseInt(totalMins.value);
        totalPracticeTimeArray.push(totalPracticeTime);
        console.log(totalPracticeTimeArray);
    } else if (!totalMins.value) {
        totalPracticeTime = parseInt(totalHours.value)*60;
        totalPracticeTimeArray.push(totalPracticeTime);
        console.log(totalPracticeTimeArray);
    } else if (parseInt(totalMins.value) > 59) {
        alert("Please choose a time frame that is less than 1 hour");
        totalMins.value = "";
    }
    else {
    totalPracticeTime = parseInt(totalHours.value)*60 + parseInt(totalMins.value);
    totalPracticeTimeArray.push(totalPracticeTime);
    console.log(typeof(totalPracticeTimeArray[1]));
    }
})

//set warmup time

const warmup = document.querySelector("#warmup-input");
const warmupTimeChart = document.querySelector("#warmup-time-chart");
let warmupTime;
let warmupTimeArray = [];

warmup.addEventListener("input", function () {
    warmupTime = parseInt(warmup.value);
    if (!warmupTime) {
        warmupTimeChart.classList.add("hidden");
    }
    else if (warmupTime > 59) {
        alert("Please choose a warm up time that is less than one hour");
        warmupTimeChart.classList.add("hidden");
        warmup.value = "";
    } 
    else if (warmupTime === 1) {
        warmupTimeChart.classList.remove("hidden");
        warmupTimeChart.innerText = `Warm up for 1 minute`;
        warmupTimeArray.push(warmupTime);
        console.log(warmupTimeArray);
    }
    else {
    warmupTimeChart.classList.remove("hidden");
    warmupTimeChart.innerText = `Warm up for ${warmupTime} minutes`;
    warmupTimeArray.push(warmupTime);
    console.log(typeof(warmupTimeArray[0]));
    }
});


//fill chart out based upon form responses
const solo1Input = document.querySelector("#solo-1");
const solo1Output = document.querySelector("#solo-1-chart");

solo1Input.addEventListener("input", function () {
    solo1Output.innerText = solo1Input.value;
})

const solo2Input = document.querySelector("#solo-2");
const solo2Output = document.querySelector("#solo-2-chart");

solo2Input.addEventListener("input", function () {
    solo2Output.innerText = solo2Input.value;
})

const solo3Input = document.querySelector("#solo-3");
const solo3Output = document.querySelector("#solo-3-chart");

solo3Input.addEventListener("input", function () {
    solo3Output.innerText = solo3Input.value;
})

const chamber1Input = document.querySelector("#chamber-1");
const chamber1Output = document.querySelector("#chamber-1-chart");

chamber1Input.addEventListener("input", function () {
    chamber1Output.innerText = chamber1Input.value;
})

const chamber2Input = document.querySelector("#chamber-2");
const chamber2Output = document.querySelector("#chamber-2-chart");

chamber2Input.addEventListener("input", function () {
    chamber2Output.innerText = chamber2Input.value;
})

const chamber3Input = document.querySelector("#chamber-3");
const chamber3Output = document.querySelector("#chamber-3-chart");

chamber3Input.addEventListener("input", function () {
    chamber3Output.innerText = chamber3Input.value;
})

const ens1Input = document.querySelector("#ens-1");
const ens1Output = document.querySelector("#ens-1-chart");

ens1Input.addEventListener("input", function () {
    ens1Output.innerText = ens1Input.value;
})

const ens2Input = document.querySelector("#ens-2");
const ens2Output = document.querySelector("#ens-2-chart");

ens2Input.addEventListener("input", function () {
    ens2Output.innerText = ens2Input.value;
})

const ens3Input = document.querySelector("#ens-3");
const ens3Output = document.querySelector("#ens-3-chart");

ens3Input.addEventListener("input", function () {
    ens3Output.innerText = ens3Input.value;
})

const other1Input = document.querySelector("#other-1");
const other1Output = document.querySelector("#other-1-chart");

other1Input.addEventListener("input", function () {
    other1Output.innerText = other1Input.value;
})

const other2Input = document.querySelector("#other-2");
const other2Output = document.querySelector("#other-2-chart");

other2Input.addEventListener("input", function () {
    other2Output.innerText = other2Input.value;
})

const other3Input = document.querySelector("#other-3");
const other3Output = document.querySelector("#other-3-chart");

other3Input.addEventListener("input", function () {
    other3Output.innerText = other3Input.value;
})

//calculate percentages of practice time

const soloPercent = document.querySelector("#solo-percent-input");
const soloTitle = document.querySelector("#solo-row");
soloPercent.addEventListener("input", function () {
    let repPracticeTime = totalPracticeTimeArray[totalPracticeTimeArray.length-1] - warmupTimeArray[warmupTimeArray.length-1];
    console.log(repPracticeTime);
    let soloPracticeTime = parseInt(soloPercent.value)*repPracticeTime/100;
    if (!soloPercent.value || soloPercent.value === 0) {
        soloPracticeTime = 0;
    }
    console.log(soloPracticeTime);
    soloTitle.innerText = `Solo Pieces (${soloPracticeTime} minutes)`;
})

const chamberPercent = document.querySelector("#chamber-percent-input");
const chamberTitle = document.querySelector("#chamber-title");
chamberPercent.addEventListener("input", function () {
    let repPracticeTime = totalPracticeTimeArray[totalPracticeTimeArray.length-1] - warmupTimeArray[warmupTimeArray.length-1];
    console.log(repPracticeTime);
    let chamberPracticeTime = parseInt(chamberPercent.value)*repPracticeTime/100;
    if (!chamberPercent.value || chamberPercent.value === 0) {
        chamberPracticeTime = 0;
    }
    console.log(chamberPracticeTime);
    chamberTitle.innerText = `Chamber Music (${chamberPracticeTime} minutes)`;
})

const ensPercent = document.querySelector("#ens-percent-input");
const ensTitle = document.querySelector("#ens-title");
ensPercent.addEventListener("input", function () {
    let repPracticeTime = totalPracticeTimeArray[totalPracticeTimeArray.length-1] - warmupTimeArray[warmupTimeArray.length-1];
    console.log(repPracticeTime);
    let ensPracticeTime = parseInt(ensPercent.value)*repPracticeTime/100;
    if (!ensPercent.value || ensPercent.value === 0) {
        ensPracticeTime = 0;
    }
    console.log(ensPracticeTime);
    ensTitle.innerText = `Ensemble Music (${ensPracticeTime} minutes)`;
})

const otherPercent = document.querySelector("#other-percent-input");
const otherTitle = document.querySelector("#other-title");
otherPercent.addEventListener("input", function () {
    let repPracticeTime = totalPracticeTimeArray[totalPracticeTimeArray.length-1] - warmupTimeArray[warmupTimeArray.length-1];
    console.log(repPracticeTime);
    let otherPracticeTime = parseInt(otherPercent.value)*repPracticeTime/100;
    if (!otherPercent.value || otherPercent.value === 0) {
        otherPracticeTime = 0;
    }
    console.log(otherPracticeTime);
    otherTitle.innerText = `Other Music (${otherPracticeTime} minutes)`;
})




//put this on the final button
if (!totalHours.value && !totalMins.value) {
    //alert("You must enter your total practice time");
}
else if (parseInt(soloPercent.value) + parseInt(chamberPercent.value) + parseInt(ensPercent.value) + parseInt(otherPercent.value) !== 100) {
    alert("Your total practice time allotment must equal 100%");
}