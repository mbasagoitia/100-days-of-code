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
    const fileInput = document.querySelector("#file");

    fileInput.addEventListener("change", function(e) {

    let newImage = new Image(100, 100);
  
    newImage.src = e.target.files[0];
    newImage.src = URL.createObjectURL(e.target.files[0]);
    console.log(newImage.src);
        
    $(newImage).attr("class", "small-image");
    let newWrapper = $(document.createElement("div"));
    $(newWrapper).attr("class", "small-image-wrapper");
    let newBorder = $(document.createElement("div"));
    $(newBorder).attr("class", "small-image-border");
    URL.revokeObjectURL(newImage.src);
    $(newBorder).appendTo(".image-slider");
    $(newWrapper).appendTo(newBorder);
    $(newImage).appendTo(newWrapper);
  });
  
})

/* function uploadImage() {
    let fileInput = document.querySelector("#file");
    let selectedFile = fileInput.files[0];
    let newImage = $(document.createElement("img"));
    newImage.attr("src", URL.createObjectURL(selectedFile));
    console.log(selectedFile);
    newImage.attr("class", "small-image");
    let newWrapper = $(document.createElement("div"));
    newWrapper.attr("class", "small-image-wrapper");
    let newBorder = $(document.createElement("div"));
    newBorder.attr("class", "small-image-border");
    newBorder.appendTo(".image-slider");
    newWrapper.appendTo(newBorder);
    newImage.appendTo(newWrapper);
} */

