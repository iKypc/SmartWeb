$(document).ready(function(){
    $('.header__burger').click(function(event){
        $('.header__burger,.header__top_wrap_nav').toggleClass('active');
        $('body').toggleClass('lock');
    });
});