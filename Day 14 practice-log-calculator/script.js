//get current date and display it in the title

let date = new Date();
let day = date.getDate();
let longMonth = date.toLocaleString('en-us', { month: 'long' });
let year = date.getFullYear();

let fullDate = `${longMonth} ${day}, ${year}`;

const dateDisplay = document.querySelector(".date");
dateDisplay.innerText = fullDate;  

//greet user based upon time of day
const greeting = document.querySelector("#greeting");
let hour = date.getHours();
let time;

if (hour >= 0 && hour < 12) {
    time = "morning";
} else if (hour >= 12 && hour < 16) {
    time = "afternoon";
} else if (16 <= hour <= 23) {
    time = "evening";
}

greeting.innerText = `Good ${time}! How long do you have to practice today?`;

//hide form/show chart

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
const check = document.querySelectorAll(".fa-check");

check.forEach(element => {
    element.addEventListener("click", function () {
        this.classList.toggle("visible");
    })
})



//calculate total practice time
const totalHours = document.querySelector("#practice-time-hours");
const totalMins = document.querySelector("#practice-time-minutes");

let totalPracticeTime = 0;
function setTotalPracticeTime () {
    if (!totalHours.value) {
        totalPracticeTime = parseInt(totalMins.value);
    } else if (!totalMins.value) {
        totalPracticeTime = parseInt(totalHours.value)*60;
    } else if (parseInt(totalHours.value) > 24) {
        alert("Please choose a time frame that is less than 24 hours");
        totalHours.value = "";
    }
    else if (parseInt(totalMins.value) > 59) {
        alert("Please choose a time frame that is less than 1 hour");
        totalMins.value = "";
    }
    else {
    totalPracticeTime = parseInt(totalHours.value)*60 + parseInt(totalMins.value);
    }
}

//set warmup time

const warmup = document.querySelector("#warmup-input");
const warmupTimeChart = document.querySelector("#warmup-time-chart");
let warmupTime = 0;

function setWarmupTime () {
    warmupTime = 0;
    if (warmup.value) {
        warmupTime = parseInt(warmup.value);
    }
    else {
        warmupTimeChart.classList.add("hidden");
    }
    if (warmupTime > 59) {
        alert("Please choose a warm up time that is less than one hour");
        warmupTimeChart.classList.add("hidden");
        warmup.value = "";
    } 
    else if (warmupTime === 1) {
        warmupTimeChart.classList.remove("hidden");
        warmupTimeChart.innerText = `Warm up for 1 minute`;
    }
    else if (warmupTime === 0) {
        warmupTimeChart.classList.add("hidden");
    }
    else {
        warmupTimeChart.classList.remove("hidden");
        warmupTimeChart.innerText = `Warm up for ${warmupTime} minutes`;
    }
}
    
//populate chart based upon form responses
const solo1Input = document.querySelector("#solo-1");
const solo1Output = document.querySelector("#solo-1-chart");
const solo2Input = document.querySelector("#solo-2");
const solo2Output = document.querySelector("#solo-2-chart");
const solo3Input = document.querySelector("#solo-3");
const solo3Output = document.querySelector("#solo-3-chart");
const chamber1Input = document.querySelector("#chamber-1");
const chamber1Output = document.querySelector("#chamber-1-chart");
const chamber2Input = document.querySelector("#chamber-2");
const chamber2Output = document.querySelector("#chamber-2-chart");
const chamber3Input = document.querySelector("#chamber-3");
const chamber3Output = document.querySelector("#chamber-3-chart");
const ens1Input = document.querySelector("#ens-1");
const ens1Output = document.querySelector("#ens-1-chart");
const ens2Input = document.querySelector("#ens-2");
const ens2Output = document.querySelector("#ens-2-chart");
const ens3Input = document.querySelector("#ens-3");
const ens3Output = document.querySelector("#ens-3-chart");
const other1Input = document.querySelector("#other-1");
const other1Output = document.querySelector("#other-1-chart");
const other2Input = document.querySelector("#other-2");
const other2Output = document.querySelector("#other-2-chart");
const other3Input = document.querySelector("#other-3");
const other3Output = document.querySelector("#other-3-chart");

function populateChart() {
    solo1Output.innerText = solo1Input.value;
    solo2Output.innerText = solo2Input.value;
    solo3Output.innerText = solo3Input.value;
    chamber1Output.innerText = chamber1Input.value;
    chamber2Output.innerText = chamber2Input.value;
    chamber3Output.innerText = chamber3Input.value;
    ens1Output.innerText = ens1Input.value;
    ens2Output.innerText = ens2Input.value;
    ens3Output.innerText = ens3Input.value;
    other1Output.innerText = other1Input.value;
    other2Output.innerText = other2Input.value;
    other3Output.innerText = other3Input.value;
}

//calculate percentages of practice time

const soloPercent = document.querySelector("#solo-percent-input");
const soloTitle = document.querySelector("#solo-row");
let soloPracticeTime = 0;
const chamberPercent = document.querySelector("#chamber-percent-input");
const chamberTitle = document.querySelector("#chamber-title");
let chamberPracticeTime = 0;
const ensPercent = document.querySelector("#ens-percent-input");
const ensTitle = document.querySelector("#ens-title");
let ensPracticeTime = 0;
const otherPercent = document.querySelector("#other-percent-input");
const otherTitle = document.querySelector("#other-title");
let otherPracticeTime = 0;

function calculatePercentages () {
    soloPracticeTime = 0;
    let repPracticeTime = totalPracticeTime - warmupTime;
    if (soloPercent.value) {
        soloPracticeTime = parseInt(soloPercent.value)*repPracticeTime/100;
    }
    if (soloPracticeTime > 179) {
        let leftoverMinutes = soloPracticeTime - 120;
        soloTitle.innerText = `Solo Pieces (3 hours ${leftoverMinutes} minutes)`;
    }
    else if (soloPracticeTime > 119) {
        let leftoverMinutes = soloPracticeTime - 120;
        soloTitle.innerText = `Solo Pieces (2 hours ${leftoverMinutes} minutes)`;
    }
    else if (soloPracticeTime > 59) {
        let leftoverMinutes = soloPracticeTime - 60;
        soloTitle.innerText = `Solo Pieces (1 hour ${leftoverMinutes} minutes)`;
    } else {
        soloTitle.innerText = `Solo Pieces (${soloPracticeTime} minutes)`;
    }

    chamberPracticeTime = 0;
    if (chamberPercent.value) {
        chamberPracticeTime = parseInt(chamberPercent.value)*repPracticeTime/100;;
    }
    if (chamberPracticeTime > 179) {
        let leftoverMinutes = chamberPracticeTime - 120;
        chamberTitle.innerText = `Chamber Music (3 hours ${leftoverMinutes} minutes)`;
    }
    else if (chamberPracticeTime > 119) {
        let leftoverMinutes = chamberPracticeTime - 120;
        chamberTitle.innerText = `Chamber Music (2 hours ${leftoverMinutes} minutes)`;
    }
    else if (chamberPracticeTime > 59) {
        let leftoverMinutes = chamberPracticeTime - 60;
        chamberTitle.innerText = `Chamber Music (1 hour ${leftoverMinutes} minutes)`;
    } else {
    chamberTitle.innerText = `Chamber Music (${chamberPracticeTime} minutes)`;
    }

    ensPracticeTime = 0;
    if (ensPercent.value) {
        ensPracticeTime = parseInt(ensPercent.value)*repPracticeTime/100;;
    }
    if (ensPracticeTime > 179) {
        let leftoverMinutes = ensPracticeTime - 120;
        ensTitle.innerText = `Ensemble Music (3 hours ${leftoverMinutes} minutes)`;
    }
    else if (ensPracticeTime > 119) {
        let leftoverMinutes = ensPracticeTime - 120;
        ensTitle.innerText = `Ensemble Music (2 hours ${leftoverMinutes} minutes)`;
    }
    else if (ensPracticeTime > 59) {
        let leftoverMinutes = ensPracticeTime - 60;
        ensTitle.innerText = `Ensemble Music (1 hour ${leftoverMinutes} minutes)`;
    } else {
    ensTitle.innerText = `Ensemble Music (${ensPracticeTime} minutes)`;
    }

    otherPracticeTime = 0;
    if (otherPercent.value) {
        otherPracticeTime = parseInt(otherPercent.value)*repPracticeTime/100;;
    }
    if (otherPracticeTime > 179) {
        let leftoverMinutes = otherPracticeTime - 120;
        otherTitle.innerText = `Other Music (3 hours ${leftoverMinutes} minutes)`;
    }
    else if (otherPracticeTime > 119) {
        let leftoverMinutes = otherPracticeTime - 120;
        otherTitle.innerText = `Other Music (2 hours ${leftoverMinutes} minutes)`;
    }
    else if (otherPracticeTime > 59) {
        let leftoverMinutes = otherPracticeTime - 60;
        otherTitle.innerText = `Other Music (1 hour ${leftoverMinutes} minutes)`;
    } else {
        otherTitle.innerText = `Other Music (${otherPracticeTime} minutes)`;
    }
}

//hide/show table rows based upon presence of information

const soloRow1 = document.querySelector("#solo-1-row");
const soloRow2 = document.querySelector("#solo-2-row");
const soloRow3 = document.querySelector("#solo-3-row");

const chamberRow1 = document.querySelector("#chamber-row");
const chamberRow2 = document.querySelector("#chamber-2-row");
const chamberRow3 = document.querySelector("#chamber-3-row");

const ensRow1 = document.querySelector("#ens-row");
const ensRow2 = document.querySelector("#ens-2-row");
const ensRow3 = document.querySelector("#ens-3-row");

const otherRow1 = document.querySelector("#other-row");
const otherRow2 = document.querySelector("#other-2-row");
const otherRow3 = document.querySelector("#other-3-row");

function resetChart () {
    soloTitle.classList.remove("invisible");
    soloTitle.classList.remove("hidden");
    soloRow1.classList.remove("hidden");
    soloRow2.classList.remove("hidden");
    soloRow3.classList.remove("hidden");
    chamberTitle.classList.remove("invisible");
    chamberTitle.classList.remove("hidden");
    chamberRow1.classList.remove("hidden");
    chamberRow2.classList.remove("hidden");
    chamberRow3.classList.remove("hidden");
    ensTitle.classList.remove("invisible");
    ensTitle.classList.remove("hidden");
    ensRow1.classList.remove("hidden");
    ensRow2.classList.remove("hidden");
    ensRow3.classList.remove("hidden");
    otherTitle.classList.remove("invisible");
    otherTitle.classList.remove("hidden");
    otherRow1.classList.remove("hidden");
    otherRow2.classList.remove("hidden");
    otherRow3.classList.remove("hidden");
}

function fillChart () {
    resetChart();
    if (!solo1Input.value) {
        soloRow1.classList.add("hidden");
    }

    if (!solo2Input.value) {
        soloRow2.classList.add("hidden");
    }

    if (!solo3Input.value) {
        soloRow3.classList.add("hidden");
    }

    if (!soloPercent.value) {
        soloTitle.classList.add("invisible");
        soloRow1.classList.add("hidden");
        soloRow2.classList.add("hidden");
        soloRow3.classList.add("hidden");
    }

    if (!chamber1Input.value) {
        chamberRow1.classList.add("hidden");
    }

    if (!chamber2Input.value) {
        chamberRow2.classList.add("hidden");
    }

    if (!chamber3Input.value) {
        chamberRow3.classList.add("hidden");
    }

    if (!chamberPercent.value) {
        chamberTitle.classList.add("hidden");
        chamberRow1.classList.add("hidden");
        chamberRow2.classList.add("hidden");
        chamberRow3.classList.add("hidden");
    }

    if (!ens1Input.value) {
        ensRow1.classList.add("hidden");
    }

    if (!ens2Input.value) {
        ensRow2.classList.add("hidden");
    }

    if (!ens3Input.value) {
        ensRow3.classList.add("hidden");
    }

    if (!ensPercent.value) {
        ensTitle.classList.add("hidden");
        ensRow1.classList.add("hidden");
        ensRow2.classList.add("hidden");
        ensRow3.classList.add("hidden");
    }

    if (!other1Input.value) {
        otherRow1.classList.add("hidden");
    }

    if (!other2Input.value) {
        otherRow2.classList.add("hidden");
    }

    if (!other3Input.value) {
        otherRow3.classList.add("hidden");
    }

    if (!otherPercent.value) {
        otherTitle.classList.add("hidden");
        otherRow1.classList.add("hidden");
        otherRow2.classList.add("hidden");
        otherRow3.classList.add("hidden");
    }
}

//if the box is checked, show all pieces to practice in random order, also known as the "interleaved practicing" method

//keep the math the same for each category, but do not show titles (solo music, chamber music, etc.)
//calculate practice time for each individual piece rather than by category

let soloPieceCount;
let chamberPieceCount;
let ensPieceCount;
let otherPieceCount;

function populateRandomizedChart () {
//time not calculating properly
    soloTitle.classList.add("invisible");
    chamberTitle.classList.add("hidden");
    ensTitle.classList.add("hidden");
    otherTitle.classList.add("hidden");    

    soloPieceCount = 0;
    chamberPieceCount = 0;
    ensPieceCount = 0;
    otherPieceCount = 0;

    if (solo1Input.value) {
        soloPieceCount++;
    }
    if (solo2Input.value) {
        soloPieceCount++;
    }
    if (solo3Input.value) {
        soloPieceCount++;
    }
    let indSoloPracticeTime = soloPracticeTime/soloPieceCount;
    if (solo1Input.value) {
        solo1Output.innerText = `${solo1Input.value}: ${indSoloPracticeTime} minutes`;
    }
    if (solo2Input.value) {
        solo2Output.innerText = `${solo2Input.value}: ${indSoloPracticeTime} minutes`;
    }
    if (solo3Input.value) {
        solo3Output.innerText = `${solo3Input.value}: ${indSoloPracticeTime} minutes`;
    }

    if (chamber1Input.value) {
        chamberPieceCount++;
    }
    if (chamber2Input.value) {
        chamberPieceCount++;
    }
    if (chamber3Input.value) {
        chamberPieceCount++;
    }

    let indChamberPracticeTime = chamberPracticeTime/chamberPieceCount;

    if (chamber1Input.value) {
        chamber1Output.innerText = `${chamber1Input.value}: ${indChamberPracticeTime} minutes`;
    }
    if (chamber2Input.value) {
        chamber2Output.innerText = `${chamber2Input.value}: ${indChamberPracticeTime} minutes`;
    }
    if (chamber3Input.value) {
    chamber3Output.innerText = `${chamber3Input.value}: ${indChamberPracticeTime} minutes`;
    }

    if (ens1Input.value) {
        ensPieceCount++;
    }
    if (ens2Input.value) {
        ensPieceCount++;
    }
    if (ens3Input.value) {
        ensPieceCount++;
    }

    let indEnsPracticeTime = ensPracticeTime/ensPieceCount;

    if (ens1Input.value) {
        ens1Output.innerText = `${ens1Input.value}: ${indEnsPracticeTime} minutes`;
    }
    if (ens2Input.value) {
        ens2Output.innerText = `${ens2Input.value}: ${indEnsPracticeTime} minutes`;
    }
    if (ens3Input.value) {
        ens3Output.innerText = `${ens3Input.value}: ${indEnsPracticeTime} minutes`;
    }
    

    if (other1Input.value) {
        otherPieceCount++;
    }
    if (other2Input.value) {
        otherPieceCount++;
    }
    if (other3Input.value) {
        otherPieceCount++;
    }

    let indOtherPracticeTime = otherPracticeTime/otherPieceCount;
    other1Output.innerText = `${other1Input.value}: ${indOtherPracticeTime} minutes`;
    other2Output.innerText = `${other2Input.value}: ${indOtherPracticeTime} minutes`;
    other3Output.innerText = `${other3Input.value}: ${indOtherPracticeTime} minutes`;
}

const shuffleChart = document.querySelector(".practice-chart");
let rowsCollection = shuffleChart.querySelectorAll("tr");
 

function sortTable() {
    let rows = Array.from(rowsCollection)
      .slice(3);
    shuffleArray(rows);
  
    for (const row of rows) {
      shuffleChart.appendChild(row);
    }
  }

  function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  }

function unsortTable () {
    let rows = Array.from(rowsCollection);
    for (const row of rows) {
        shuffleChart.appendChild(row);
      }
  }
const randomizeOrderButton = document.querySelector("#randomize-order-box");

function createRandomizedChart () {
        //checking to make sure everything is filled out correctly

    if (!totalHours.value && !totalMins.value) {
        alert("You must enter your total practice time");
    }
    else if (soloPercent.value && (!solo1Input.value && !solo2Input.value && !solo3Input.value)) {
        alert("Please enter at least one solo piece to practice");
    }
    else if (chamberPercent.value && (!chamber1Input.value && !chamber2Input.value && !chamber3Input.value)) {
        alert("Please enter at least one chamber music piece to practice");
    }
    else if (ensPercent.value && (!ens1Input.value && !ens2Input.value && !ens3Input.value)) {
        alert("Please enter at least one ensemble music piece to practice");
    }
    else if (otherPercent.value && (!other1Input.value && !other2Input.value && !other3Input.value)) {
        alert("Please enter at least one piece of music in the Other category");
    }
    else if (!solo1Input.value && !solo2Input.value && !solo3Input.value && !chamber1Input.value
        && !chamber2Input.value && !chamber3Input.value && !ens1Input.value && !ens2Input.value && !ens3Input.value
        && !other1Input.value && !other2Input.value && !other3Input.value) {
            alert("You must enter at least one piece to practice");
        }
    else {
        //reset to factory settings
    setTotalPracticeTime();
    setWarmupTime();
    fillChart();
    soloTitle.classList.add("invisible");
    sortTable();
    calculatePercentages();
    if (soloPracticeTime + chamberPracticeTime + ensPracticeTime + otherPracticeTime + warmupTime !== totalPracticeTime) {
        alert("Your total practice time allotment must equal 100%");
    } 
    else {
        populateRandomizedChart();
    showChart();
    }
}
}


//put this on the button
function createChart () { 
    //if check changes, doesn't update chart
    //checking to make sure everything is filled out correctly
    if (!totalHours.value && !totalMins.value) {
        alert("You must enter your total practice time");
    }
    else if (soloPercent.value && (!solo1Input.value && !solo2Input.value && !solo3Input.value)) {
        alert("Please enter at least one solo piece to practice");
    }
    else if (chamberPercent.value && (!chamber1Input.value && !chamber2Input.value && !chamber3Input.value)) {
        alert("Please enter at least one chamber music piece to practice");
    }
    else if (ensPercent.value && (!ens1Input.value && !ens2Input.value && !ens3Input.value)) {
        alert("Please enter at least one ensemble music piece to practice");
    }
    else if (otherPercent.value && (!other1Input.value && !other2Input.value && !other3Input.value)) {
        alert("Please enter at least one piece of music in the Other category");
    }
    else if (!solo1Input.value && !solo2Input.value && !solo3Input.value && !chamber1Input.value
        && !chamber2Input.value && !chamber3Input.value && !ens1Input.value && !ens2Input.value && !ens3Input.value
        && !other1Input.value && !other2Input.value && !other3Input.value) {
            alert("You must enter at least one piece to practice");
        }
    else if (randomizeOrderButton.checked) {
        createRandomizedChart();
    }        
    else {
        unsortTable();
        setTotalPracticeTime();
        setWarmupTime();
        populateChart();
        fillChart();
        calculatePercentages();
        if (soloPracticeTime + chamberPracticeTime + ensPracticeTime + otherPracticeTime + warmupTime !== totalPracticeTime) {
            alert("Your total practice time allotment must equal 100%");
        } 
         else {
        showChart();
        }
    }
}



