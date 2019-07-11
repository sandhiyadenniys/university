
// mobile navbar

var menuButton = document.getElementById('menu-button');
var mobileMenuList = document.getElementById('mobile-menu-list');

menuButton.addEventListener('click' , function(){
  mobileMenuList.classList.toggle('active');
})


// smooth scroll function

$(function() {
    $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//,'') === this.pathname.replace(/^\//,'') && location.hostname === this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
            $('html, body').animate({
            scrollTop: target.offset().top - 0 + 'px'
            }, 1000);
            return false;
        }
        }
    });
});



// scroll top Button

  var goToTop = document.getElementById('goToTop');

    document.addEventListener('scroll' , function() {
      if(scrollY > 200) {
        goToTop.classList.add('active');
      } else {
        goToTop.classList.remove('active');
      }
    })
