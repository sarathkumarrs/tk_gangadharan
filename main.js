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
    }$
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
    $(".carousel-2").owlCarousel({
        loop: true,
        autoplay: false,
        center: true,
        nav: true,
        items:1
    });
});



(function ($) {
    var slide = function (ele, options) {
        var $ele = $(ele);
        var setting = {
            speed: 300,
            interval: 2000,
        };
        $.extend(true, setting, options);
        var statesmain = [
            { $zIndex: 1, width: 120, height: 180, top: 69, left: 134, $opacity: 0.2 },
            { $zIndex: 2, width: 130, height: 220, top: 59, left: 0, $opacity: 0.4 },
            { $zIndex: 3, width: 170, height: 268, top: 35, left: 110, $opacity: 0.7 },
            { $zIndex: 4, width: 224, height: 344, top: 0, left: 263, $opacity: 1 },
            { $zIndex: 3, width: 170, height: 268, top: 35, left: 470, $opacity: 0.7 },
            { $zIndex: 2, width: 130, height: 220, top: 59, left: 620, $opacity: 0.4 },
            { $zIndex: 1, width: 120, height: 180, top: 69, left: 500, $opacity: 0.2 }
        ];
        if ($(window).width() < 500) {
            states = statesmain.filter(function (state) {
                return state.$zIndex > 2;
            });
        }
        else{
            states = statesmain;
        }

        var $lis = $ele.find('li');
        var timer = null;

        $ele.find('.hi-next').on('click', function () {
            next();
        });
        $ele.find('.hi-prev').on('click', function () {
            states.push(states.shift());
            move();
        });
        $ele.on('mouseenter', function () {
            clearInterval(timer);
            timer = null;
        }).on('mouseleave', function () {
            autoPlay();
        });

        move();
        autoPlay();

        function move() {
            $lis.each(function (index, element) {
                var state = states[index];
                $(element).css('zIndex', state.$zIndex).finish().animate(state, setting.speed).find('img').css('opacity', state.$opacity);
            });
        }

        function next() {
            states.unshift(states.pop());
            move();
        }

        function autoPlay() {
            timer = setInterval(next, setting.interval);
        }
    }
    $.fn.hiSlide = function (options) {
        $(this).each(function (index, ele) {
            slide(ele, options);
        });
        return this;
    }
})(jQuery);
$('.slide').hiSlide();

function showContent(contentType) {
    const contentSections = document.querySelectorAll('main div');
    contentSections.forEach(section => {
        if (section.id === `${contentType}Content`) {
            section.classList.remove('hidden-1');
        } else {
            section.classList.add('hidden-1');
        }
    });

    const headings = document.querySelectorAll('h1');
    headings.forEach(heading => {
      if (heading.id === `${contentType}Heading`) {
        heading.classList.add('big-heading');
      } else {
        heading.classList.remove('big-heading');
      }
    });
}

// // Function to display the popup and set its content
// function showPopup(content) {
//     var popup = document.getElementById('popup');
//     var popupContent = document.getElementById('popup-content');
    
//     popupContent.innerHTML = content;
//     popup.style.display = 'block';
//   }
  
//   // Function to hide the popup
//   function closePopup() {
//     var popup = document.getElementById('popup');
//     popup.style.display = 'none';
//   }
  

document.addEventListener('DOMContentLoaded', function() {
    const contentDivs = document.querySelectorAll('.books-detail');
    const modals = document.querySelectorAll('.modal');
    const closeButtons = document.querySelectorAll('.close-button');

    contentDivs.forEach(content => {
        content.addEventListener('click', () => {
            const modal = document.querySelector(content.getAttribute('data-modal-target'));
            modal.style.display = 'block';
        });
    });

    closeButtons.forEach(button => {
        button.addEventListener('click', () => {
            const modal = button.closest('.modal');
            modal.style.display = 'none';
        });
    });
});
    // function closePopup() {
    // var popup = document.getElementById('popup');
    // popup.style.display = 'none';
    // }

