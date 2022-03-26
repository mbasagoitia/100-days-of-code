const instruments = [
   {item: "violin", answer: "string", src: "#"},
   {item: "viola", answer: "string"},
   {item: "cello", answer: "string"},
   {item: "double bass", answer: "string"},
   {item: "trumpet", answer: "brass"},
   {item: "trombone", answer: "brass"},
   {item: "tuba", answer: "brass"},
   {item: "euphonium", answer: "brass"},
   {item: "flute", answer: "woodwind"},
   {item: "oboe", answer: "woodwind"},
   {item: "clarinet", answer: "woodwind"},
   {item: "bassoon", answer: "woodwind"},
   {item: "saxophone", answer: "woodwind"},
   {item: "piano", answer: "keyboard"},
   {item: "harpsichord", answer: "keyboard"},
   {item: "celesta", answer: "keyboard"},
   {item: "clavichord", answer: "keyboard"},
   {item: "snare drum", answer: "percussion"},
   {item: "timpani", answer: "percussion"},
   {item: "bongos", answer: "percussion"},
   {item: "triangle", answer: "percussion"},
]

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
        //create cards with a class based upon their answer for the droppable to accept
    })

    $(".challenge-card").draggable();

    /* $(".target-card(specify which one)").droppable({
        accept:
    }); */
})