$(document).ready(function() {
  $(".fa-search").click(function () { 
      var searchBox = $('.input-box');
      if (searchBox.css('opacity') === '0') {
        searchBox.css({
            'opacity': '1',
          });
      } else {
        searchBox.css({
            'opacity': '0',
          });
      }
      
  });



  
});
$(document).ready(function() {
  const left = document.querySelector('.left');
  const right = document.querySelector('.right');
  
  const slider = document.querySelector('.slider');
  
  const indicatorParent = document.querySelector('.control ul'); 
  const indicators = document.querySelectorAll('.control li');
  index = 0;
  
  indicators.forEach((indicator, i) => {
    indicator.addEventListener('click', () => {
      document.querySelector('.control .selected').classList.remove('selected');
      indicator.classList.add('selected');
      slider.style.transform = 'translateX(' + (i) * -25 + '%)';  
      index = i;
      
    });
  });
  
  left.addEventListener('click', function() {
    index = (index > 0) ? index -1 : 0;
    document.querySelector('.control .selected').classList.remove('selected');
    indicatorParent.children[index].classList.add('selected');
    slider.style.transform = 'translateX(' + (index) * -25 + '%)';
  });
  
  right.addEventListener('click', function() {
    index = (index < 4 - 1) ? index+1 : 3;
    document.querySelector('.control .selected').classList.remove('selected');
    indicatorParent.children[index].classList.add('selected');
    slider.style.transform = 'translateX(' + (index) * -25 + '%)';
  });
  
});

$(document).ready(function() {
  const leftTwo = document.querySelector('.leftTwo');
  const rightTwo = document.querySelector('.rightTwo');
  
  const sliderTwo = document.querySelector('.sliderTwo');
  
  const indicatorParent = document.querySelector('.controlTwo ul'); 
  const indicators = document.querySelectorAll('.controlTwo li');
  index = 0;
  
  indicators.forEach((indicator, i) => {
    indicator.addEventListener('click', () => {
      document.querySelector('.controlTwo .selectedTwo').classList.remove('selectedTwo');
      indicator.classList.add('selectedTwo');
      sliderTwo.style.transform = 'translateX(' + (i) * -25 + '%)';  
      index = i;
      
    });
  });
  
  leftTwo.addEventListener('click', function() {
    index = (index > 0) ? index -1 : 0;
    document.querySelector('.controlTwo .selectedTwo').classList.remove('selectedTwo');
    indicatorParent.children[index].classList.add('selectedTwo');
    sliderTwo.style.transform = 'translateX(' + (index) * -25 + '%)';
  });
  
  rightTwo.addEventListener('click', function() {
    index = (index < 4 - 1) ? index+1 : 3;
    document.querySelector('.controlTwo .selectedTwo').classList.remove('selectedTwo');
    indicatorParent.children[index].classList.add('selectedTwo');
    sliderTwo.style.transform = 'translateX(' + (index) * -25 + '%)';
  });
  
});
  
  