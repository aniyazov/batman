$(document).ready(function () {
    let menuItem = $('.menu-item');
    
    menuItem.on('click', function(event){
        event.preventDefault();
        let activeContent = $(this).attr('href');
        $('.visiable').toggleClass('visiable');
        $(activeContent).toggleClass('visiable');
        $('.item-choosen').toggleClass('item-choosen');
        $(this).toggleClass('item-choosen')
    })
});