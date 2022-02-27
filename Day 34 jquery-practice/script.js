//playing with jQuery selectors and events

$(document).ready(function () {
    //when you hover over each card, the text changes to a lighter color
    $(".card").hover(function () {
        $(this).children("p").addClass("light-text");
    }, function () {
        $(this).children("p").removeClass("light-text");
    })
    //when you click each card, it disappears
    $(".card").click(function () {
        $(this).addClass("invisible");
    })
    //when you click the button, it shows all hidden cards
    $("button").click(function () {
        $(".card").removeClass("invisible");
    })
})

