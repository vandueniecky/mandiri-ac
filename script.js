// paralax jumbotron
$ (window).scroll(function(){

    // navbar transparant to color on scrollTop
    $('nav').toggleClass('scrolled', $(this).scrollTop() > 700);

});


// click trigger
$('.scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
});

$('button.navbar-toggler').click(function() {
    $('.navbar').addClass('scrolled');
});