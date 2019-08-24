"use strict";

// start general variables ------------------

// nav links length
var nav_link_len;

// second text index of home current index that visible right now
var home_second_text_index=0;

// second text itself of home current text that visible right now
var home_second_text='';

// end general variables --------------------

$(function () {


    // start general initializing variables

    // nav links length
    nav_link_len=$('nav .links li').length;

    // end general variables initializing




    // strat on window resize ------------------
    $(window).on('resize',function () {

        // start squared shapes style
        $('.square').each(function () {
            changeHeightRelatedToWidth($(this),1);
        });
        // end squared shapes style

        // start portfolio items size
        $('#portfolio .item').each(function () {
            changeHeightRelatedToWidth($(this),.6)
        });
        // end portfolio items size

    });
    // end on window resize --------------------


    // start on scroll window ------------------
    $(window).on('scroll',function () {

        // start nav style with on scroll
        if($(this).scrollTop()>200)
            $('nav').addClass('scrolled');
        else
            $('nav').removeClass('scrolled');
        // end nav style with on scroll

        // start active links on scroll
        select_active_link();
        // end active links on scroll

    });
    // end on scroll window --------------------


    // start menu icon click
    $('.menu-icon').on('click',function () {
        $('nav').toggleClass('open');
    });
    // end menu icon click


    // start on links li click
    $('.links li').on('click',function () {
        $(this).addClass('active').siblings().removeClass('active');
        $('html, body').animate({
            scrollTop: $($(this).data('target')).offset().top-50
        }, 500);
    });
    // end on links li click

    // start on down arrow click
    $('.down-arrow').on('click',function () {
        $('nav .links li:nth-of-type(2)').click();
    });
    // end on down arrow click


    // start on portfolio li click
    $('#portfolio li').on('click',function () {
        $(this).addClass('active').siblings().removeClass('active');
    });
    // end on portfolio li click



    // start run mixitup
    var mixer = mixitup('.uo-grid');
    // start run mixitup

});
// end ready function -----------------------------------------------------------





// start general functions---------------------------------------------------------------

// start function to change the height related to width
var changeHeightRelatedToWidth = function(item, val)
{
    item.height(item.width()*val);
}
// end function to change the height related to width


// start function active links on scroll
function select_active_link() {

    if($(window).scrollTop() + $(window).height() >= $(document).height()-200)
    {
        $('nav .links li:last-of-type').addClass('active').siblings().removeClass('active');
        return;
    }

    var scroll_top=$(window).scrollTop();

    for(var i=nav_link_len;i>0;i--)
    {
        if(scroll_top>=$('section:nth-child(' + i + ')').offset().top - 300)
        {
            var id=$('section:nth-child(' + i + ')').attr('id');
            $('nav .links li[data-target="#' + id + '"]').addClass('active')
                .siblings().removeClass('active');
            return;
        }
    }

}
// end function active links on scroll

// start general functions---------------------------------------------------------------



// start window on load ---------------------------------------------------------------
$(window).on('load',function () {


    $('#template').css({display:'block'});
    $('#loader').fadeOut();

    // start init -----------------------

    // start set app title
    $('title').html(data.app_title);
    // end set app title

    // start home text second part animation
    setInterval(function () {
        if(home_second_text==''&&home.second_text_part2!='')
        {
            home.second_text_part2 = home.second_text_part2.substr(1);
        }
        else if(home_second_text=='')
        {
            home_second_text=data.home.second_text_part2[home_second_text_index];
            if(data.home.second_text_part2.length-1>home_second_text_index)
                home_second_text_index++;
            else
                home_second_text_index=0;
        }
        else{
            home.second_text_part2+=home_second_text[0];
            home_second_text= home_second_text.substring(1);
        }

    },data.home.second_part_speed);
    // end home text second part animation


    // start scrolled nav or not
    if($(this).scrollTop()>200)
        $('nav').addClass('scrolled');
    else
        $('nav').removeClass('scrolled');
    // end on scrolled nav or not

    // start squared shapes style
    $('.square').each(function () {
        changeHeightRelatedToWidth($(this),1);
    });
    // end squared shapes style

    // start portfolio items size
    $('#portfolio .item').each(function () {
        changeHeightRelatedToWidth($(this),.6)
    });
    // end portfolio items size

    // start active links on scroll
    select_active_link();
    // end active links on scroll

    // end init -------------------------

});
// end window on load ---------------------------------------------------------------
