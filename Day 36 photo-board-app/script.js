$(document).ready(function () {
    //when a small image is clicked, fill large image with its photo
    $(".small-image").click(function () {
        let source = $(this).attr("src");
        $(".large-image[src='#']").first().attr("src", source);
    })
    //reset photos
    $("#reset-photos-button").click(function() {
        $(".large-image").attr("src", "#");
    })
    //create new blank small image
    function createSmallImage () {

        let newImage = $(document.createElement("img"));
        newImage.attr("src", "#");
        newImage.attr("class", "small-image");
        let newWrapper = $(document.createElement("div"));
        newWrapper.attr("class", "small-image-wrapper");
        let newBorder = $(document.createElement("div"));
        newBorder.attr("class", "small-image-border");
        
        newBorder.appendTo(".image-slider");
        newWrapper.appendTo(newBorder);
        newImage.appendTo(newWrapper);
    }
    createSmallImage();
    createSmallImage();
})

