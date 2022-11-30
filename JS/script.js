var navbtn = document.getElementById('nav-button');
var navmenu = document.querySelector('.navmenu');
var navdesign = document.querySelector('.navdesign');

$(document).ready(function(){
    
  $('.rd-slider').slick({
    dots: true,
    arrows: false,
    infinite:true
  });
  $('.team-slider').slick({
    dots: true,
    arrows: false
  });
  $('.design-slider').slick({
    dots: true,
    arrows: false
  });
  
});
navbtn.onclick = function(){
  navmenu.classList.toggle('show');
  navdesign.classList.toggle('cross');
}