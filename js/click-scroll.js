//jquery-click-scroll
//by syamsul'isul' Arifin

var sectionArray = [1,2,3,4,5];

$.each(sectionArray, function(index, value){
     $(document).scroll(function(){
         var offsetSection = $('#' + 'section_' + value).offset().top;
         var docScroll = $(document).scrollTop();
         var docScroll1 = docScroll + 1;
         
        
         if ( docScroll1 >= offsetSection ){
             $('a').removeClass('active');
             $('a:link').addClass('inactive');  
             $('a').eq(index+1).addClass('active');
             $('a:link').eq(index+1).removeClass('inactive');
         }
         
     });
    
    $('a').eq(index+1).click(function(e){
        var offsetClick = $('#' + 'section_' + value).offset().top;
        e.preventDefault();
        $('html, body').animate({
            'scrollTop':offsetClick
        }, 300)
        
        
    });
 
    
});

$(document).ready(function(){
    $('a:link').addClass('inactive');    
    $('a').eq(0).addClass('active');
    $('a:link').eq(0).removeClass('inactive');
    


});
