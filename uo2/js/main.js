$(function (){
    
    // start profileImgLen
    var currentImgProfile=1;
    var profileImgs=$('.uo-about .uo-holder .uo-imgs');
    var profileImgsLen=profileImgs.children('li').length;
    var profileImgsDots=$('.uo-about .uo-holder .uo-dots');
    for(var i=0;i<profileImgsLen;i++)
    {
        var li="<li data-target="+(i+1)+"></li>";
        if(i==0)
            li="<li class='uo-active' data-target="+(i+1)+"></li>";
        profileImgsDots.append(li);
    }
    profileImgsDots.children('li').click(function ()
    {
        $(this).addClass('uo-active').siblings().removeClass('uo-active');
        var target=$(this).data('target');
        profileImgs.children('li:nth-child('+target+')').addClass('uo-active')
                .siblings().removeClass('uo-active');
    });
    setInterval(function (){
        if(currentImgProfile<profileImgsLen)
            currentImgProfile++;
        else
            currentImgProfile=1;
        profileImgs.children('li:nth-child('+currentImgProfile+')').addClass('uo-active')
                .siblings().removeClass('uo-active');
        profileImgsDots.children('li:nth-child('+currentImgProfile+')').addClass('uo-active')
                .siblings().removeClass('uo-active');
    },5000)
    // end profileImgLen
    
    
    
    // start on scroll //
     $(window).on("scroll",function (){

         //  start uo-nav
         if($(this).scrollTop()>200)
             $('.uo-nav').addClass('uo-scrolled');
         else
             $('.uo-nav').removeClass('uo-scrolled');
         // end uo-nav


         //  start uo-go-top
         if ($(this).scrollTop() > 100) {
             $('.uo-go-top').fadeIn();
         } else {
             $('.uo-go-top').fadeOut();
         }
         //  end uo-go-top
     });
    // end on scroll //
    
    // start uo-menu click   //
    $('.uo-menu-icon').click(function ()
    {
        $('.uo-nav').toggleClass('uo-open');
    });
    // end uo-menu click   //
    
    
    
    // start uo-projects filter    //
            $('.uo-projects .uo-filter li').click(function ()
            {
                $(this).addClass('uo-active').siblings().removeClass('uo-active');
            });
    
    // end uo-projects filter    //
    
    
    
    //     start theme-colors click   
        $('.uo-colors-icon').click(function () {
            $(this).toggleClass('uo-open');
        });
        $('.uo-colors-icon li').click(function () {
            $(this).removeClass('uo-open');
            $('#uo-website').removeClass().addClass($(this).data('target'));
        });
    //     start theme-colors click



    //   start uo-go-top click function
    $('.uo-go-top').click(function () {
        $('html, body').animate({scrollTop : 0},800);
        return false;
    });
    //   end uo-go-top click function



    // start on loading the window
    $(window).load(function () {
        // fade-in the website
        $('#uo-web-loader').fadeOut();
        $('#uo-web-content').removeClass('hidden');

        // start initialize AOS
        AOS.init({
            duration: 1000,
            offset: 0
        });
        // end initialize AOS
    });
    // end on loading the window


    
});
var containerEl = document.querySelector('.uo-mix-container');

var mixer = mixitup(containerEl);