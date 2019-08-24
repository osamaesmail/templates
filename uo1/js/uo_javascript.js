$(function ()
{
    
    check_slider_arrows();
    chek_shuffle_api();
    $('li.uo-active').parents('li').addClass('uo-active');
    
    
    
    
    
    $('.uo-nav li,.uo-cats li').click(function ()
    {
        $(this).addClass('uo-active').siblings().removeClass('uo-active');
    });
    
    $('.uo-nav .uo-menu-icon').click(function ()
    {        
        $(this).toggleClass('uo-open');
        $('.uo-nav ul').removeClass('uo-open');
    });
    
    $('.uo-nav ul li a').click(function ()
    {
        $(this).parent('li').siblings().children('ul').removeClass('uo-open');
        $(this).toggleClass('uo-open').next('ul').toggleClass('uo-open');
    });
    
    $('.uo-slider .uo-down').click(function (){
        if(!$(this).nextAll('.uo-slider-contnt').children('.uo-member:first-child()').hasClass('uo-first'))
        {
            $(this).nextAll('.uo-slider-contnt').children('.uo-member.uo-first')
                    .removeClass('uo-first').prev().addClass('uo-first');
            check_slider_arrows();
        }
    });
    
    $('.uo-slider .uo-up').click(function (){
        if(!$(this).nextAll('.uo-slider-contnt').children('.uo-member:nth-last-child(3)').hasClass('uo-first'))
        {
            $(this).nextAll('.uo-slider-contnt').children('.uo-member.uo-first')
                    .removeClass('uo-first').next().addClass('uo-first');
            check_slider_arrows();
        }
    });
    
    
    // shuffle api
        
        $('.works .uo-cats li').click(function ()
        {
            var works=$(this).parents('.works');
            var target=$(this).data('target');
            works.find('.uo-item').removeClass('uo-visible');

            setTimeout(function ()
            {
                works.find('.uo-item.'+target).removeClass('uo-hide');
                works.find('.uo-item').not('.'+target).addClass('uo-hide');
                setTimeout(function ()
                {
                    works.find('.uo-item.'+target).addClass('uo-visible');

                },20);

            },300);
        });
        
        
        // after window loading
        $(window).load(function (){
            $('.uo-loader-container.uo-main-loader').removeClass('uo-active');
            
            new WOW().init();
        });
        
});

var check_slider_arrows=function ()
{
    $('.uo-slider').each(function (){
        if(!$(this).find('.uo-member.uo-first')
            .next().next().next().hasClass('uo-member'))
        {
            $(this).find('.uo-up').addClass('move-arrow-up');
        }
        else{
            $(this).find('.uo-up').removeClass('move-arrow-up');
        }
        if(!$(this).find('.uo-member.uo-first')
            .prev().hasClass('uo-member'))
        {
            $(this).find('.uo-down').addClass('move-arrow-down');
        }
        else{
            $(this).find('.uo-down').removeClass('move-arrow-down');
        }
    });
}


var chek_shuffle_api=function ()
{
    $('.works').each(function ()
    {
        var works=$(this);
        var target=$(this).find('.uo-cats .uo-active').data('target');
        works.find('.uo-item').removeClass('uo-visible');

        setTimeout(function ()
        {
            works.find('.uo-item.'+target).removeClass('uo-hide');
            works.find('.uo-item').not('.'+target).addClass('uo-hide');
            setTimeout(function ()
            {
                works.find('.uo-item.'+target).addClass('uo-visible');

            },20);

        },300);
    });
}

