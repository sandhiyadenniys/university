
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


// slider for news

var newsIndicator1 = document.getElementById('newsIndicator1');
var newsIndicator2 = document.getElementById('newsIndicator2');
var newsPc = document.getElementById('newsPc');
var newsSp = document.getElementById('newsSp');

newsIndicator2.addEventListener('click' , function(){
    newsSp.classList.remove('active');
    newsSp.style.display = 'none';
    newsPc.classList.add('active');
    newsPc.style.display = 'block';
    newsIndicator1.classList.remove('active');
    newsIndicator2.classList.add('active');
})
newsIndicator1.addEventListener('click' , function() {
    newsPc.classList.remove('active');
    newsPc.style.display = 'none';
    newsSp.classList.add('active');
    newsSp.style.display = 'block';
    newsIndicator1.classList.add('active');
    newsIndicator2.classList.remove('active');
})
