var sk = document.getElementById('scroll');

sk.addEventListener('mousewheel', function (e) {
    e.preventDefault();
    sk.scrollLeft += e.wheelDelta * 0.4;
})

window.addEventListener('scroll', function () {
    let header = document.querySelector('header');

    header.classList.toggle('scrolling-active', window.scrollY > 0);
})