$(document).ready(function(){

    $('a').click(function(){
    //alert("i am click");
         var selected = $(this);
         $('a').removeClass('active');
         $(selected).addClass('active');
    });

    var $a = $('.a'),
    $b = $('.b'),
    $c = $('.c'),
    $home = $('.home'),
    $aboutme = $('.aboutme');
    $gallery = $('.gallery'),

    $a.click(function(){
        $home.fadeIn();
        $aboutme.fadeOut();
        $gallery.fadeOut();
    });
    $b.click(function(){
        $aboutme.fadeIn();
        $home.fadeOut();
        $gallery.fadeOut();
    });
    $c.click(function(){
        $gallery.fadeIn();
        $home.fadeOut();
        $aboutme.fadeOut();
    });
});
