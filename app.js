$(document).ready(function(){
    $("#learn-more").hide()
    $("#sign-up").hide()

    $("#learn").click(function(){
        $("#learn-more").slideDown('slow');
    });

    $("#sign-me-up").click(function(){
        $("#sign-up").slideDown('slow');
    });

    $(".submit").click(function(){
        $("input[name='Email']").val("");
        $("input[name='Pass']").val("");
        alert("Thanks for signing up! You should receive a confirmation email soon!");
    });
});