$(document).ready(function(){
    justToggleSlide();
});


function justToggleSlide(){

    // $('.toggle-block:firs-child').addClass('active');
    // $('.toggle-block:first-child').find('.toggle-able').slideToggle();

    $('.msgDrops_button').click(function(){
        // $('.toggle-able').slideToggle();
        // $('.toggle-block').toggleClass('active');

        $(this).closest('.msgDrops_list').toggleClass('active');
        $(this).closest('.msgDrops_list').find('.textDrops_button').stop().slideToggle();

    });
}