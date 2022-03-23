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
    $(".challenge-card").draggable();

    $(".target-card").droppable();
})