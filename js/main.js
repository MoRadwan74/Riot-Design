$(function () {
   
    'use strict';
    
    $(window).on('scroll', function () {
       
        if ($(window).scrollTop() > 100) {
            
            $('#main_nav').addClass('navbar-scroll');
            
        } else {
            
            $('#main_nav').removeClass('navbar-scroll');
        }
        
    });
});