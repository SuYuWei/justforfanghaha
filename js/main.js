<<<<<<< HEAD
function threeFunc(){

    var arr = [];

    for(var i = 0; i < 3; i++){
        let j = i;
        arr.push(function(){           
            console.log(j);
        });
    }
    return arr;
}

var fs = threeFunc();

fs[0]();
fs[1]();
fs[2]();

function threeFunc(){

    var arr = [];

    for(var i = 0; i < 3; i++){
        arr.push(
            (function(j){
                return function(){
                    console.log(j);
                }
            }(i))
        );
    }
    return arr;
}

var fs1 = threeFunc();

fs1[0]();
fs1[1]();
fs1[2]();


=======
var slideIndex = 1;
var timeOut;
showSlides(slideIndex);

function showSlides(index){
    var slides = document.querySelectorAll(".mySlides");
    var dots = document.querySelectorAll(".dot");

    if(index > slides.length){ slideIndex = 1; } 
    if(index < 1){ slideIndex = slides.length; } 

    slides.forEach(slide => slide.style.display = "none");
    dots.forEach(dot => dot.classList.remove("active"));
    
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].classList.add("active");
    
    timeOut = setTimeout(function(){
        slideIndex += 1;
        showSlides(slideIndex);
    },4000);
}


function plusSlides(index){
    clearTimeout(timeOut);
    showSlides(slideIndex += index);
}

function currentSlide(index){
    clearTimeout(timeOut);
    showSlides(slideIndex = index);
}
>>>>>>> gh-pages
