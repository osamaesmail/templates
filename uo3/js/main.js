
'use strict';

// start declaration variables


// scroll_Top
var scroll_Top;

// nav
var nav;

// sections length
var sections_len;


// skills bars items length
var skill_bars_len;

// skill bars reached
var skill_reached;

// portfolio items
var uo_grid_item;

// end declaration

// start ready function =========================================================================================
$(function () {

// start initialization ======

    // scroll_Top
    scroll_Top=0;

// nav
    nav=$('nav');

// sections length
    sections_len=$('.uo-section').length;


// skills bars items length
    skill_bars_len=$('.uo-skills-item').length;

// skill bars reached
    skill_reached=false;

// portfolio items
    uo_grid_item=$('.uo-grid-item');

// end initializing variables ========

    // start calling initialization methods
    changeHeightRelatedToWidth(uo_grid_item,.6);
    // end calling initialization methods


    // start on scroll window ===============================
    $(window).on("scroll",function () {
        onscroll();
    });
    // end on scroll window ========================


    // start on resize window ======================
    $(window).on("resize",function () {

        // start portfolio grid item responsive
        changeHeightRelatedToWidth(uo_grid_item,.6)
        // end portfolio grid item responsive

    });
    // start on resize window =======================



    // start uo-menu-icon click
    $('.uo-menu-icon').on('click',function () {
        $(this).parents('nav').toggleClass('uo-open');
    });
    // end uo-menu-icon click


    // start odd and even svg
    $('.uo-odd-sections .uo-section:nth-child(even) svg polygon').attr('fill','url(.gradient)');
    $('.uo-even-sections .uo-section:nth-child(odd) svg polygon').attr('fill','url(.gradient)');
    // end odd and even svg




    // start uo-links li click
    $('.uo-links li').on('click',function () {
        $(this).addClass('uo-active').siblings().removeClass('uo-active');
        setTimeout(function () {
            AOS.refresh();
        },1000);
    });

        // start additional action for nav links
        $('nav .uo-links li').on('click',function () {
            $('html, body').animate({
                scrollTop: $( $(this).data('target') ).offset().top
            }, 500);
            return false;
        });
        // end additional action for nav links

    // end uo-links li click




    // start uo-contact form
    $("#uo-contact-form").on('submit',function(event){
        // cancels the form submission
        event.preventDefault();
        submitContactForm();
    });
    // end uo-contact form



});
// end ready function =========================================================================================




// start on load window ================
$(window).on("load",function () {
    $('.uo-template-content').css({display:"block"});
    $('.uo-template-loader').fadeOut(function () {



        // change height for portfolio
        changeHeightRelatedToWidth($('.uo-grid-item'),.6);

        // start portfolio mixItUp run
        try{
            var mixer = mixitup('.uo-grid');
        }catch (e){}
        // end portfolio mixItUp run



        // initialize AOS function
        try{
            AOS.init({
                duration: 1000
            });
        }catch (e){}
        // onscroll function
        onscroll();


        // start run owl carousel
        try{
            $('#uo-testimonials-slider').owlCarousel({
                loop:true,
                autoplay:true,
                smartSpeed:1000,
                items:1
            });
        }catch (e){}
        // end run owl carousel

    });
    // end fadeout uo-template function


});
// end on load window ==============




// start functions

// start function to change the height of elements depending to its width
var changeHeightRelatedToWidth = function(item, val)
{
    item.height(item.width()*val);
}
// end function to change the height of elements depending to its width



// start function for on scroll window ===================
var onscroll=function () {

    try {

        scroll_Top = $(window).scrollTop();

        //  start nav
        if (scroll_Top >= 100)
            $('nav').addClass('uo-scrolled');
        else
            $('nav').removeClass('uo-scrolled');
        //  end nav


        // start change nav links active on scroll
        for (var i = sections_len; i > 0; i--) {
            if (scroll_Top >= $('.uo-section:nth-child(' + i + ')').offset().top - 300) {
                var id = $('.uo-section:nth-child(' + i + ')').attr('id');
                $('nav .uo-links li[data-target="#' + id + '"]').addClass('uo-active')
                    .siblings().removeClass('uo-active');
                i = 0;
            }
        }
        // start change nav links active on scroll


        // start increase skills percentage on scroll
        if (!skill_reached && scroll_Top >= $('#uo-skills .uo-skills-bars').offset().top - 300) {
            skill_reached = true;

            $('.uo-skills-item').each(function () {
                $(this).height($(this).data('percent') + "%");
            });
        }
        // end increase skills percentage on scroll


        // start countTo statistics
        $('#uo-about .uo-stat-number span').each(function () {
            if (scroll_Top >= $(this).offset().top - 500) {
                $(this).countTo();
            }
        });
        // end countTo statistics
    }
    catch(e){}

}
// end function for on scroll window ===================

// end functions




function submitContactForm() {

    //var formData=new FormData($('#uo-contact-form')[0]);


    //var formData=$('#uo-contact-form').serializeArray();

    var n=$('#form-name').val();
    var e=$('#form-email').val();
    var msg=$('#form-message').val();

    var formData={name:n,email:e,message:msg};

    console.log(formData);

    $.ajax({
        type: "POST",
        url: "mail.php",
        data: formData,
        success : function(text){
            if (text == "1"){
                $('#uo-contact-form .uo-message').text('Thank You! Your message has been sent.')
                    .removeClass('uo-error').addClass('uo-success');
            }
            else
            {
                $('#uo-contact-form .uo-message').text('Oops! An error occured and your message could not be sent.')
                    .removeClass('uo-success').addClass('uo-error');
            }
        },
        error:function () {
            $('#uo-contact-form .uo-message').text('Oops! An error occured and your message could not be sent.')
                .removeClass('uo-success').addClass('uo-error');
        }
    });
}
