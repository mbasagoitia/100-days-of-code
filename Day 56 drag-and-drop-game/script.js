const instruments = [
   {item: "Violin", answer: "string", src: "violin.jpg"},
   {item: "Viola", answer: "string", src: "viola.jpg"},
   {item: "Cello", answer: "string", src: "cello.jpg"},
   {item: "Double Bass", answer: "string" , src: "bass.jpg"},
   {item: "Trumpet", answer: "brass", src: "trumpet.jpg"},
   {item: "Trombone", answer: "brass", src: "trombone.jpg"},
   {item: "Tuba", answer: "brass", src: "tuba.jpg"},
   {item: "Euphonium", answer: "brass", src: "euphonium.jpg"},
   {item: "Flute", answer: "woodwind", src: "flute.jpg"},
   {item: "Oboe", answer: "woodwind", src: "oboe.jpg"},
   {item: "Clarinet", answer: "woodwind", src: "clarinet.jpg"},
   {item: "Bassoon", answer: "woodwind", src: "bassoon.jpg"},
   {item: "Saxophone", answer: "woodwind", src: "saxophone.jpg"},
   {item: "Piano", answer: "keyboard", src: "piano.jpg"},
   {item: "Harpsichord", answer: "keyboard", src: "harpsichord.jpg"},
   {item: "Celesta", answer: "keyboard", src: "celesta.jpg"},
   {item: "Clavichord", answer: "keyboard", src: "clavichord.jpg"},
   {item: "Snare Drum", answer: "percussion", src: "snare.jpg"},
   {item: "Timpani", answer: "percussion", src: "timpani.jpg"},
   {item: "Bongos", answer: "percussion", src: "bongos.jpg"},
   {item: "Triangle", answer: "percussion", src: "triangle.jpg"}
]

function shuffleCards (array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}
$(document).ready(function(){
    $("img,.img-caption").hover(function() {
        $(this).parent().find(".img-caption").toggleClass("hidden");
        $(this).parent().find(".img-caption").toggleClass("inline");
    })
    $(".img-caption").hover(function () {
        $(this).parent().find("img").toggleClass("transparent");
    })
    $(".img-wrapper").click(function(){
        $("#choose-game-page").hide();
    })


    const draggableCardsArea = document.querySelector(".draggable-cards-area");
    //create cards with correct name and source and add to cards area
    shuffleCards(instruments);
    let i = 0;
    function createNewCard (array) {
        let newImg = document.createElement("img");
        newImg.src = `img/instruments/${array[i].src}`;
        let newTitle = document.createElement("p");
        newTitle.innerText = array[i].item;
        let newCard = document.createElement("div");
        $(newCard).addClass("challenge-card");
        $(newCard).addClass("ui-front");
        $(newCard).addClass(array[i].answer);
        $(newTitle).appendTo($(newCard));
        $(newImg).appendTo($(newCard));
        $(newCard).appendTo($("#instrument-family-game .draggable-cards-area"));
        $(newCard).draggable();
        $(newCard).mousedown(function(){
            $(this).css("z-index", 1000);
            createNewCard(instruments);
        })
        i++;
    }

    createNewCard(instruments);
    createNewCard(instruments);

//I think to solve this problem we need to create a copy of the original array, and with 
//each drop event, delete one item from the copy array. When it is empty, trigger game end.


    $("#strings").droppable({
        accept: ".string",
        drop: function(event, ui) {
            event.preventDefault();
            ui.draggable.hide(1000);
        }
    });

    $("#keyboards").droppable({
        accept: ".keyboard",
        drop: function(event, ui) {
            event.preventDefault();
            ui.draggable.hide(1000);
        }
    });

    $("#percussion").droppable({
        accept: ".percussion",
        drop: function(event, ui) {
            event.preventDefault();
            ui.draggable.hide(1000);
        }
    });

    $("#woodwinds").droppable({
        accept: ".woodwind",
        drop: function(event, ui) {
            event.preventDefault();
            ui.draggable.hide(1000);
        }
    });

    $("#brass").droppable({
        accept: ".brass",
        drop: function(event, ui) {
            event.preventDefault();
            ui.draggable.hide(1000);
        }
    });

})