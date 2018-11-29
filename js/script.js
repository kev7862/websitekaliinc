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
        css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";

        document.body.appendChild(css);

    };

    // greensock
    // Hover
var nyumba = document.getElementsByClassName('nyumba');
    build = document.getElementsByClassName('build');
    writer = document.getElementsByClassName('writer');
    tl = new TimelineLite();
//Easing
tl
.to(nyumba, 1, {x: -50, autoAlpha: 1, ease:Power1.easeOut})
.from(build, 1, {y: -30, autoAlpha: 1.5, ease:Power1.easeOut})
.to(writer, 1, {y: 20, autoAlpha: 2, ease:Bounce.easeOut });

tl.pause();

$(".btnPlay").on("click", function(){
  tl.play();

  });

  $(".btnPause").on("click", function(){
    tl.pause();
});

$(".btnResume").on("click", function(){
  tl.resume();
});

$(".btnReverse").on("click", function(){
  tl.reverse();
});

$(".btnSpeedUp").on("click", function(){
  tl.timeScale(8);
});

$(".btnSlowDown").on("click", function(){
  tl.timeScale(0);
});


});


// SVG section
//var line1 = document.getElementsByClassName('line1');

//TweenMax.to(line1, 1, {drawSVG: "60%", color: "#000", ease:Bounce.easeOut});

//animating multiple objects
