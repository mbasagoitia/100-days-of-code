const selectOne = document.querySelector("#select-bar-1");
const selectTwo = document.querySelector("#select-bar-2");
const output = document.querySelector("#output");

function changeOutput () {
    switch (parseInt(selectTwo.value) - parseInt(selectOne.value)) {
        case 0:
            output.value = "Perfect unison/Octave";
            break;
        case 1 || -11:
            output.value = "Minor second";
            break; 
        case 2 || -10:
            output.value = "Major second";
            break;   
        case 3 || -9:
            output.value = "Minor third";
            break;   
        case 4 || -8:
            output.value = "Major third";
            break;   
        case 5 || -7:
            output.value = "Perfect fourth";
            break;   
        case 6 || -6:
            output.value = "Tritone";
            break;   
        case 7 || -5:
            output.value = "Perfect fifth";
            break;   
        case 8 || -4:
            output.value = "Minor Sixth";
            break;   
        case 9 || -3:
            output.value = "Major sixth";
            break;   
        case 10 || -2:
            output.value = "Minor seventh";
            break;   
        case 11 || -1:
            output.value = "Major seventh";
            break;   
      }
}



  