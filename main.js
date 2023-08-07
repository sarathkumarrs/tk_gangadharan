var test = document.getElementById('open');


var icon = document.getElementById('mobilemenu')
var hiddenBox = document.getElementById('hidden-div')

icon.addEventListener('click',(event)=>{
    hiddenBox.classList.toggle('hidden')
    event.stopPropagation();
})
hiddenBox.addEventListener('click',(event)=>{
    event.stopPropagation();
})
document.addEventListener('click',()=>{
    if(hiddenBox.classList.contains('hidden')){
        hiddenBox.classList.remove('hidden')
    }
})

$(document).ready(function () {
    $(".carousel-1").owlCarousel({
        loop: true,
        autoplay: false,
        center: true,
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 5
            },
            900: {
                items: 3
            },
            800: {
                items: 2
            }
        }
    });
});
