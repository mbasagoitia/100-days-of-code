$(document).ready(function(){

    $("#button").click(function(){
        const getNewPhoto = async function () {
            const res = await fetch(
                `https://api.unsplash.com/search/photos?query=${$("#searchbar").val()}&client_id=ym4WDstZ94HOSUUObxZBmX5b6P2lAgs3ma34iqIWFAM`
                );
            const images = await res.json();
            console.log(images);
        };
        
        function changeImage () {
            
            let randomIndex = Math.floor(Math.random()*images.results.length);
            let randomImage = images.results[randomIndex];
            let imageAddress = randomImage.urls.full;
            $("#slide").css("src", imageAddress);
        }
        
        changeImage();
    });
    
})