$(document).ready(function(){
    $("#learn-more").hide()
    $("#sign-up").hide()
    $("#learn").click(function(){
        $("#learn-more").slideDown('slow');
    });
    $("#sign-me-up").click(function(){
        $("#sign-up").slideDown('slow');
    });
});