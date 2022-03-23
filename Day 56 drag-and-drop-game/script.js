$(document).ready(function(){
    $("img,.img-caption").hover(function() {
        $(this).parent().find(".img-caption").toggleClass("hidden");
    })
    $(".img-caption").hover(function () {
        $(this).parent().find("img").toggleClass("transparent");
    })
    
})