var sk = document.getElementById('scroll');

sk.addEventListener('mousewheel', function(e){
    e.preventDefault();
   sk.scrollLeft+=e.wheelDelta*0.4;
})