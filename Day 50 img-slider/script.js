$(document).ready(function(){

    $("#button").click(function(){
        getNewPhotos(); 
    });
    
    let images;

    const getNewPhotos = async function () {
        const res = await fetch(
            `https://api.unsplash.com/search/photos?query=${$("#searchbar").val()}&client_id=ym4WDstZ94HOSUUObxZBmX5b6P2lAgs3ma34iqIWFAM`
            );
        const imagesObj = await res.json();
        images = imagesObj.results;
        //console.log(imagesObj.results[0].urls.full);
        let i = 0;
        function changeImage () {
            document.slide.src = images[i].urls.full;
            //console.log(images[i].urls.full);
            if (i < images.length - 1){
                i++;
            } else {
                i = 0;
            }
            setTimeout(changeImage, 3000);
        }
        changeImage();
    };    
})

