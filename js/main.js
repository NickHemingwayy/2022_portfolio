AOS.init({
 // offset: 320,
  duration: 800
});
setTimeout(function(){ $('.landing-title').removeClass('animate'); }, 11000);

setInterval(function () {
  setTimeout(function(){ $('.landing-title').removeClass('animate'); }, 11000);
  $('.landing-title').addClass('animate');
}, 12000);

var scroll;
$(document).ready(function() {
  let headerHeight = $('header').height();

    $(window).scroll(function() {

      scroll  = $(window).scrollTop() ;
      let aboutTop = $('#about').offset().top;
      let skillsTop = $('#skills').offset().top;
      let workTop = $('#work').offset().top;
      let contactTop = $('#contact').offset().top;

      let scrollWPad = scroll + $(window).height()/1.8 ;
      if($(window).width()> 991){                              //Handles desktop section status indicator
        if(scrollWPad > aboutTop && scrollWPad < skillsTop){
          $('.scroll-status span').removeClass();
          $('.scroll-status span').addClass('about');
          $('.scroll-status').addClass('show');
        }else if(scrollWPad > skillsTop && scrollWPad < workTop){
          $('.scroll-status span').removeClass();
          $('.scroll-status span').addClass('skills');
          $('.scroll-status').addClass('show');
        }else if(scrollWPad > workTop && scrollWPad < contactTop ){
          $('.scroll-status span').removeClass();
          $('.scroll-status span').addClass('work');
          $('.scroll-status').addClass('show');
        }else if( scrollWPad > contactTop ){
          $('.scroll-status span').removeClass();
          $('.scroll-status span').addClass('contact');
          $('.scroll-status').addClass('show');
        }else{
          $('.scroll-status').removeClass('show');
        }
      }

      if(scroll> headerHeight + $(window).height()/5){
        
        $('header').addClass('header-colored');
      }else{
        $('header').removeClass('header-colored');
      }
      


      //Handles intro fade behind mountains
      $('.landing-content').css('filter','brightness('+ scale(scroll, 0, 500, 1, 0) +')');
      $('.landing-content').css('transform','scale('+ scale(scroll, 0, 600, 1, 0.9) +')');
    })
  })



function scale (number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}