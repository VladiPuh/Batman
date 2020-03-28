$(document).ready(function () {
    let tabsItem = $('.tabs-item');
    let more = $('.more');
    let content = $('.content');
    
    tabsItem.on('click', function(event) {
        event.preventDefault();
        let activeContent = $(this).attr('href');
        $('.visible').toggleClass('visible');
        $(activeContent).toggleClass('visible');
        $('.tabs-item-activ').toggleClass('tabs-item-activ');
        $(this).toggleClass('tabs-item-activ');
    });
    more.on('click', function() { 
        $('.content').toggleClass('on', 'content'); 
        $('body, html').animate({scrollTop: $(content).position().top}, 600); 
        });
    
});