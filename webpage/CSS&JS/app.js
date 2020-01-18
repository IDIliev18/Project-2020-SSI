var scrl = document.querySelector('.scrl');
var scrlLinks = document.querySelector('.nav-links');
var scrlLines = document.querySelector('.scrl');
var navBar = document.querySelector('nav');
var gallery = document.querySelectorAll('.gallery img');
var navLinks = document.querySelectorAll('.nav-links a');


window.addEventListener('scroll', function () {
    for (var x = 0; x < gallery.length; x++) {
        if (gallery[x].getBoundingClientRect().top < 700) {
            gallery[x].classList.add('reveal-img');
        }
    }

});


if(window.outerWidth > 800){
    window.addEventListener('scroll', function () {
        if (window.pageYOffset > 70) {
            navBar.classList.add('nav-animation');
        } else {
            navBar.classList.remove('nav-animation');
        }
    
    });
}

scrl.addEventListener('click', scrlNavigation);




function scrlNavigation() {
    scrlLinks.classList.toggle('scrl-animation');
    scrl.getElementsByTagName('div')[0].classList.toggle('line1-animate');
    scrl.getElementsByTagName('div')[1].classList.toggle('line2-animate');
    scrl.getElementsByTagName('div')[2].classList.toggle('line3-animate');

}