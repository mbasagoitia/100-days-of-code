const form = document.querySelector(".form-content-wrapper");
const button = document.querySelector(".hide-button");
const chart = document.querySelector(".chart-content-wrapper");

const showChart = function() {
    form.classList.add("hidden");
    chart.classList.remove("hidden");
};

