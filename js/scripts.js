$(document).ready(function () {
    $(".img1").click(function () {
        $(".img1").hide();
        $(".design").toggle();
    });
    $(".design").click(function () {
        $(".img1").toggle();
        $(".design").hide();
    });
    $(".img2").click(function () {
        $(".img2").hide();
        $(".development").toggle();
    });
    $(".development").click(function () {
        $(".img2").toggle();
        $(".development").hide();
    });
    $(".img3").click(function () {
        $(".img3").hide();
        $(".product").toggle();
    });
    $(".product").click(function () {
        $(".img3").toggle();
        $(".product").hide();
    });
    $("#submit1").click(function () {
        alert("your message has been received")
       
    });
});

$(document).ready(function () {

    $('.show').hover(function () {
        $(this).animate({ opacity: '1' });
    },
        function () {
            $(this).animate({ opacity: '0' });
        });
});


