$(document).ready(function () {
    //when a small image is clicked, fill large image with its photo
    $(".image-slider").on("click", ".small-image", function () {
        $(".large-image[src='#']").first().removeAttr("style");
        let source = $(this).attr("src");
        $(".large-image[src='#']").first().attr("src", source);       
    })
    //reset photos
    $("#reset-photos-button").click(function() {
        $(".large-image").attr("src", "#");
    })
//get random image from unsplash

$("#add-image-button").on("click", function (){
    getNewPhoto();
});

const getNewPhoto = async function () {
    const res = await fetch(
     `https://api.unsplash.com/search/photos?query=${$("#searchbar").val()}&client_id=ym4WDstZ94HOSUUObxZBmX5b6P2lAgs3ma34iqIWFAM`
    );
    const images = await res.json();
    console.log(images);
    generateRandomImage(images);
  };

function generateRandomImage(images) {
    let randomIndex = Math.floor(Math.random()*images.results.length);
    let randomImage = images.results[randomIndex];
    let imageAddress = randomImage.urls.full;   
    let newImage = $(document.createElement("img"));
    $(newImage).attr("src", imageAddress);
    $(newImage).attr("class", "small-image");
    let newWrapper = $(document.createElement("div"));
    $(newWrapper).attr("class", "small-image-wrapper");
    let newBorder = $(document.createElement("div"));
    $(newBorder).attr("class", "small-image-border");
    $(newBorder).appendTo(".image-slider");
    $(newWrapper).appendTo(newBorder);
    $(newImage).appendTo(newWrapper);
    }

    //create photo display
    $("#create-display-button").on("click", function(){
        //hide main area buttons and just change buttons
        $(".title").hide();
        $(".button-area").hide();
        $(".image-slider").hide();
        $(".lights-bg-wrapper").css({
            "background-image": "url('https://images.unsplash.com/photo-1516034037053-83125f4a9840?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZmFpcnklMjBsaWdodHN8ZW58MHx8MHx8&w=1000&q=80')",
            "width": "100vw",
            "height": "130vh",
            "align-self": "center",
            "display": "flex"
        });
        for (let i=1; i<=7; i++) {
            $(`.card-template:nth-of-type(${i})`).addClass(`hanging-style-${i}`);
        }
        $(".clip").show().css("display", "flex");
        $(".large-image").addClass("hanging-pic");
    })
})
