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
    $d = $('.d'),
    $home = $('.home'),
    $aboutme = $('.aboutme');
    $gallery = $('.gallery'),
    $poster = $('.poster'),

    $a.click(function(){
        $home.fadeIn();
        $aboutme.fadeOut();
        $gallery.fadeOut();
        $poster.fadeOut();
    });
    $b.click(function(){
        $aboutme.fadeIn();
        $home.fadeOut();
        $gallery.fadeOut();
        $poster.fadeOut();
    });
    $c.click(function(){
        $gallery.fadeIn();
        $home.fadeOut();
        $aboutme.fadeOut();
        $poster.fadeOut();
    });
    $d.click(function(){
        $poster.fadeIn();
        $home.fadeOut();
        $aboutme.fadeOut();
        $gallery.fadeOut();
    });
    
});
