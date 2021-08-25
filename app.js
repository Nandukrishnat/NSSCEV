var sk = document.getElementById('scroll');

ni.addEventListener('mousewheel', function(e){
    e.preventDefault();
   sk.scrollLeft+=e.wheelDelta*0.4;
})