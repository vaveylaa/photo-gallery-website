const randomImages = document.querySelectorAll('.random-image');

randomImages.forEach((randomImage, index) => {
  fetch(`https://source.unsplash.com/random/400x400/?sig=${index}`)
    .then(response => {
      randomImage.src = response.url;
    });
});


const randomImages2 = document.querySelectorAll('.random-image-2');

randomImages2.forEach((randomImage, index) => {
  fetch(`https://source.unsplash.com/random/200x400/?sig=${index}`)
    .then(response => {
      randomImage.src = response.url;
    });
});

const randomImages3 = document.querySelectorAll('.random-image-3');

randomImages3.forEach((randomImage, index) => {
  fetch(`https://source.unsplash.com/random/600x400/?sig=${index}`)
    .then(response => {
      randomImage.src = response.url;
    });
});

const randomImages4 = document.querySelectorAll('.random-image-4');

randomImages4.forEach((randomImage, index) => {
  fetch(`https://source.unsplash.com/random/1200x400/?sig=${index}`)
    .then(response => {
      randomImage.src = response.url;
    });
});



// loading ekranı

 setTimeout(function(){
   $("#loading").addClass("animated fadeOut");
   setTimeout(function(){
     $("#loading").removeClass("animated fadeOut");
     $("#loading").css("display","none");
   },800);
 },3550);


