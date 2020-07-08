//document ready
$(document).ready(function() {
      alert("document ready occurred!");
});

//window ready
$(window).load(function() {
      alert("window load occurred!");
});

//only mobile screen
if (window.matchMedia('(max-width: 767px)').matches) {
        //...
    } else {
        //...
    }

//////// or you can add this line also for mobile use onlt=y
if($(window).width() >= 1024){
  // do your stuff
}

///Mobile device click event work for add class
jQuery('.anima-smart-layers-pointers').on('touchstart', function (e) {
  if (e.type == 'touchstart') {
  console.log('clicked');
    jQuery('#overlay-tv').addClass('anima-animate-appear');
  } 
  return false;
});