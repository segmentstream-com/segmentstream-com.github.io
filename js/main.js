$(document).ready(function() {

    $('#navigation').css("min-height", $('#content').height() + 19);

    $('#content').click(function(event) { 
        if($(document).width() < 961 && $('#navigation').is(":visible")) {
            $('#navigation').hide();
            $('#menu-toggle').toggleClass("active");
        }    
    });    

    $(".nav-header.events").click(function() {
        $(this).toggleClass("active");
        $(".drop-menu.events").toggle();
    });

    $(".nav-header.analyst").click(function() {
        $(this).toggleClass("active");
        $(".drop-menu.analyst").toggle();
    });

    $(".nav-header.developer").click(function() {
        $(this).toggleClass("active");
        $(".drop-menu.developer").toggle();
    });  
    
    $(".nav-header.integrations").click(function() {
        $(this).toggleClass("active");
        $(".drop-menu.integrations").toggle();
    });   

    $(".nav-header.digitaldata").click(function() {
        $(this).toggleClass("active");
        $(".drop-menu.digitaldata").toggle();
    }); 

    $("#menu-toggle").click(function() {
        $(this).toggleClass("active");
        $("#navigation").toggle(300);    
    });

    $(".button-questionaire").click(function() {
        $(".questionaire").find(".step1").hide();        
        $(".questionaire").find(".step2").show();
    });    

    $('#myBtn').click(function() {
        $("html, body").animate({ scrollTop: 0 }, "fast");
    });    

    $(window).scroll(function() {
        if($(window).scrollTop() > 120) {
            //$('#myBtn').css('bottom', '30px')
            $('#myBtn').stop();
            $("#myBtn").animate({bottom: "30px"},"fast");
        } else {
            //$('#myBtn').css('bottom', '-50px')
            $('#myBtn').stop();
            $("#myBtn").animate({bottom: "-100px"},"fast");
        }
    });        

})