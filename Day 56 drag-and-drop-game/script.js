const instruments = [
   {item: "violin", answer: "string", src: "violin.jpg"},
   {item: "viola", answer: "string", src: "viola.jpg"},
   /*{item: "cello", answer: "string", src: "cello.jpg"},
   {item: "double bass", answer: "string" , src: "bass.jpg"},
   {item: "trumpet", answer: "brass", src: "trumpet.jpg"},
   {item: "trombone", answer: "brass", src: "trombone.jpg"},
   {item: "tuba", answer: "brass", src: "tuba.jpg"},
   {item: "euphonium", answer: "brass", src: "euphonium.jpg"},
   {item: "flute", answer: "woodwind", src: "flute.jpg"},
   {item: "oboe", answer: "woodwind", src: "oboe.jpg"},
   {item: "clarinet", answer: "woodwind", src: "clarinet.jpg"},
   {item: "bassoon", answer: "woodwind", src: "bassoon.jpg"},
   {item: "saxophone", answer: "woodwind", src: "saxophone.jpg"},
   {item: "piano", answer: "keyboard", src: "piano.jpg"},
   {item: "harpsichord", answer: "keyboard", src: "harpsichord.jpg"},
   {item: "celesta", answer: "keyboard", src: "celesta.jpg"},
   {item: "clavichord", answer: "keyboard", src: "clavichord.jpg"},
   {item: "snare drum", answer: "percussion", src: "snare.jpg"},
   {item: "timpani", answer: "percussion", src: "timpani.jpg"},
   {item: "bongos", answer: "percussion", src: "bongos.jpg"},
   {item: "triangle", answer: "percussion", src: "triangle.jpg"}*/
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

    //create cards with correct name and source and add to cards area
    shuffleCards(instruments);
    instruments.forEach(el => {
        const newImg = document.createElement("img");
        newImg.src = `img/instruments/${el.src}`;
        const newTitle = document.createElement("p");
        newTitle.innerText = el.item;
        const newCard = document.createElement("div");
        $(newCard).addClass("challenge-card");
        $(newCard).addClass("ui-front");
        $(newCard).addClass(el.answer);
        $(newTitle).appendTo($(newCard));
        $(newImg).appendTo($(newCard));
        $(newCard).appendTo($("#instrument-family-game .draggable-cards-area"));
        $(newCard).draggable();
    })

    $("#strings").droppable({
        accept: ".string",
        drop: function(event, ui) {
            event.preventDefault();
            ui.draggable.hide(1000);
        }
    });
})