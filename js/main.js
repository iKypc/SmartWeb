$(document).ready(function(){
    $('.header__burger').click(function(event){
        $('.header__burger,.header__top_wrap_nav').toggleClass('active');
        $('body').toggleClass('lock');
    });

    $('a[href^="#"]').click(function(){
        var target = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(target).offset().top
        }, 500);
    });


});

// window.addEventListener('scroll', () => {
//     let scrollDistance = window.scrollY;

//     console.log(scrollDistance)

//     document.querySelectorAll('.section').forEach((el, i) => {
//         if (el.offsetTop = document.querySelector('.nav').clientHeight <= scrollDistance) {
//             document.querySelectorAll('.nav a').forEach((el) => {
//                 if (el.classList.contains('active')) {
//                     el.classList.remove('active');
//                 }
//             });
//             document.querySelectorAll('.nav')[i].querySelector('a').classList.add('active');
//         }
//     })
// })

// $(document).ready(function() {
//     $('#fullpage').fullpage({
//         anchors: ['block1', 'block2', 'block3', 'block4', 'block5'],
//         menu: '#menu',
//         css3: true,
//         scrollingSpeed: 9000
//     });
// });