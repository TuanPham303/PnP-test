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