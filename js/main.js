var slideIndex = 1;
var timeOut;
var imgArr = ["https://farm6.staticflickr.com/5347/31069776240_1ab02ab41a_c.jpg","https://farm2.staticflickr.com/1642/23938752402_d9bb553f56_c.jpg","https://farm1.staticflickr.com/282/31667672364_b47a965a2c_c.jpg","https://farm1.staticflickr.com/382/32206118601_e66f207594_c.jpg"]
showSlides(slideIndex);

var menu = document.querySelector(".hamburger");
menu.addEventListener("click",function(){
	this.classList.toggle("open");
});

var triggers = document.querySelectorAll('.list');
const bg  = document.querySelector('.dropdown-bg');
const nav  = document.querySelector('.nav-menu');
resize();
window.addEventListener("resize", resize);

function resize(){
    var mq = window.matchMedia( "(max-width: 1000px)" );
    if (mq.matches) {
    // window width is at least 1000px
        triggers.forEach(trigger => {
            trigger.removeEventListener('mouseenter', handleEnter);
            trigger.removeEventListener('mouseleave', handleLeave);
        });
    } else {
    // window width is less than 1000px
        triggers.forEach(trigger => {
            trigger.addEventListener('mouseenter', handleEnter);
            trigger.addEventListener('mouseleave', handleLeave);
        });
    }
}

var navBar = document.getElementById("nav-bar");
var slideShow = document.getElementById("slide");
window.addEventListener("scroll",function(e){
    e.preventDefault();
    var windowScroll = this.scrollY;
    var slideHeight = slideShow.offsetHeight;
    console.log(windowScroll);
    console.log(slideHeight);
    if(windowScroll >= slideHeight) {
        navBar.style.setProperty("background","rgba(0, 0, 0, 0.6)");
    }else {
        navBar.style.setProperty("background","transparent");
    }

})

function showSlides(index){
    var slides = document.querySelectorAll(".mySlides");
    var dots = document.querySelectorAll(".dot");

    if(index > slides.length){ slideIndex = 1; } 
    if(index < 1){ slideIndex = slides.length; } 

    slides.forEach(slide => slide.style.display = "none");
    dots.forEach(dot => dot.classList.remove("active"));
    
    slides[slideIndex-1].style.display = "block";
    slides[slideIndex-1].style.backgroundImage = "url("+imgArr[slideIndex-1]+")";
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

function handleEnter(){
    this.classList.add('trigger-enter');
    setTimeout(() => this.classList.contains('trigger-enter') && this.classList.add('trigger-enter-active'), 150);
    bg.classList.add('open');    

    const liWidth = this.getBoundingClientRect();
    const dropdown = this.querySelector('.dropdown');
	const dropdownCoords = dropdown.getBoundingClientRect();
    const navCoords = nav.getBoundingClientRect();
    const coords = {
		width: liWidth.width,
		height: dropdownCoords.height - 15,
        top: dropdownCoords.top - navCoords.top,
		left: dropdownCoords.left
    };
    dropdown.style.setProperty('width', `${coords.width}px`);
    bg.style.setProperty('width', `${coords.width}px`);
    bg.style.setProperty('height', `${coords.height}px`);
    bg.style.setProperty('transform', `translate(${coords.left}px, ${coords.top}px)`);
}

function handleLeave(){
    this.classList.remove('trigger-enter', 'trigger-enter-active');
    bg.classList.remove('open');
}

$(".img-scroll").on("click",function(){
    var slideHeight = slideShow.offsetHeight;
    $('html, body').animate({ scrollTop: slideHeight }, 600);
})

// $(function(){
//     console.log("test");
//     var len = 300; // 超過50個字以"..."取代
//     $(".test").each(function(i){
//         if($(this).text().length>len){
//             $(this).attr("title",$(this).text());
//             var text=$(this).text().substring(0,len-1)+"...";
//             $(this).text(text);
//         }
//     });
// });
