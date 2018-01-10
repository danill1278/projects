
  $("div.toggle_btnt").click(function() {
    $("div.menu").toggleClass("toggle_slide");
    $("div.lay").toggleClass("bt-lay");
    $("div.gallary_img").toggleClass("middle-lay");
    $("li.midlle_marge").toggleClass("midlle_marg_new");
  });

 $(document).ready(function(){
    $("#menu").on("click","a", function (event) {
    	$("div.menu").toggleClass("toggle_slide");
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 800);
    });
});


