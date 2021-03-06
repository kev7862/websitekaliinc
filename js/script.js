$(document).ready(function(){

// Typewriter effect section.
var TxtType = function(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 500;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    };

    TxtType.prototype.tick = function() {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];

        if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

        var that = this;
        var delta = 200 - Math.random() * 100;

        if (this.isDeleting) { delta /= 2; }

        if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
        }

        setTimeout(function() {
        that.tick();
        }, delta);
    };

    window.onload = function() {
        var elements = document.getElementsByClassName('typewrite');
        for (var i=0; i<elements.length; i++) {
            var toRotate = elements[i].getAttribute('data-type');
            var period = elements[i].getAttribute('data-period');
            if (toRotate) {
              new TxtType(elements[i], JSON.parse(toRotate), period);
            }
        }
       // INJECT CSS
        var css = document.createElement("style");
        css.type = "text/css";
        css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #000; color: #000}";

        document.body.appendChild(css);

    };



    // greensock
    // Hover
var build = document.getElementsByClassName('build');
    navbarResponsive = document.getElementById('navbarResponsive');
    lamba = document.getElementsByClassName('lamba');
    progress = document.getElementsByClassName('progress');



//Easing
TweenMax.to(build, 1, {y: 20, ease:Bounce.easeOut, delay:1.5});
TweenMax.from(navbarResponsive, 1, {x: 200, autoAlpha:1});

// ScrollMagic
var controller = new ScrollMagic.Controller();



// Loop through each ".pro" projects container
$('.pro').each(function(){

  //build a scene
  var ourScene = new ScrollMagic.Scene({
  triggerElement: this, reverse: false
  })

  .setClassToggle(this, 'fade-in')
  .addTo(controller);

});
// End of Loop



//popover Buttons
// popovers Initialization
$(function () {
$('[data-toggle="popover"]').popover()
})



// ===== Scroll to Top ====
$(window).scroll(function () {
       if ($(this).scrollTop() > 50) {
           $('#back-to-top').fadeIn();
       } else {
           $('#back-to-top').fadeOut();
       }
   });
   // scroll body to 0px on click
   $('#back-to-top').click(function () {
       $('#back-to-top').tooltip('hide');
       $('body,html').animate({
           scrollTop: 0
       }, 800);
       return false;
   });

   $('#back-to-top').tooltip('show');




});
