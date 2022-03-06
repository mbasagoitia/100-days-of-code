$(document).ready(function () {
    //when a small image is clicked, fill large image with its photo
    $(".image-slider").on("click", ".small-image", function () {
        //console.log("clicked");
        let source = $(this).attr("src");
        $(".large-image[src='#']").first().attr("src", source);
    })
    //reset photos
    $("#reset-photos-button").click(function() {
        $(".large-image").attr("src", "#");
    })
    //create new blank small image


//get random image from unsplash
const getNewPhoto = async function () {
    const res = await fetch(
     "https://api.unsplash.com/search/photos?query=nature&client_id=ym4WDstZ94HOSUUObxZBmX5b6P2lAgs3ma34iqIWFAM"
    );
    const images = await res.json();
    console.log(images);
    generateRandomImage(images);
  };
  getNewPhoto();
  getNewPhoto();
  getNewPhoto();
  getNewPhoto();
  getNewPhoto();
  getNewPhoto();

function generateRandomImage(images) {
    let randomIndex = Math.floor(Math.random()*images.results.length);
    let randomImage = images.results[randomIndex];
    let imageAddress = randomImage.urls.full;   
    let newImage = $(document.createElement("img"));
    $(newImage).attr("src", imageAddress);
    console.log(imageAddress);
    //i think the problem is here
    $(newImage).attr("class", "small-image");
    let newWrapper = $(document.createElement("div"));
    $(newWrapper).attr("class", "small-image-wrapper");
    let newBorder = $(document.createElement("div"));
    $(newBorder).attr("class", "small-image-border");
    $(newBorder).appendTo(".image-slider");
    $(newWrapper).appendTo(newBorder);
    $(newImage).appendTo(newWrapper);

}

})
