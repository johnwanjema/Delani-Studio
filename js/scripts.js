$(document).ready(function () {
    $(".img1").click(function () {
        $(".d").toggle();
        $(".design").toggle();
    });
    $(".img2").click(function () {
        $(".d1").toggle();
        $(".development").toggle();
    });
    $(".img3").click(function () {
        $(".d2").toggle();
        $(".product").toggle();
    });    
});


$(document).ready(function(){
  
    $('.show').hover(function () {
      $(this).animate({opacity:'1'});
      },
      function () {
      $(this).animate({opacity:'0'});
  });
  });




