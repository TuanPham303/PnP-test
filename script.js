setTimeout(function(){
  fade();
  runStripe();
}, 4000)

function fade(){
  document.getElementsByClassName('order')[0].style.opacity = '1';
  document.getElementsByClassName('site-title')[0].style.opacity = '1';
  document.getElementsByClassName('menu')[0].style.opacity = '1';
  document.getElementsByClassName('intro')[0].style.opacity = '1';
}

function runStripe(){
  var stripes = document.getElementsByClassName('stripe');
  for(stripe of stripes){
    stripe.classList.add('stripe-path');
  }
}

var mX, mY, distance,
$element  = $('#letter-svg');

function calculateDistance(elem, mouseX, mouseY) {
  return Math.floor(Math.sqrt(Math.pow(mouseX - (elem.offset().left+(elem.width()/2)), 2) + Math.pow(mouseY - (elem.offset().top+(elem.height()/2)), 2)));
}
$(document).mousemove(function(e) {  
  mX = e.pageX;
  mY = e.pageY;
  distance = calculateDistance($element, mX, mY);
  if((1000 - distance)/1000 > 0.5){
    $element.css('filter', `drop-shadow(rgba(255, 255, 255, ${(1000 - distance)/1000}) 0px 0px 6px) drop-shadow(rgba(255, 255, 255, ${(1000 - distance)/1000}) 0px 0px 6px) drop-shadow(rgba(255, 255, 255, ${(1000 - distance)/1000}) 0px 0px 6px)`);  
  } else {
    $element.css('filter', `drop-shadow(rgba(255, 255, 255, 0) 0px 0px 6px) drop-shadow(rgba(255, 255, 255, 0) 0px 0px 6px) drop-shadow(rgba(255, 255, 255, 0) 0px 0px 6px)`); 
  }
}); 