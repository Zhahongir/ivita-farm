$(document).ready(function() { 

    $('[data-modal=formsBtn]').on('click', function() {
        $('#overlay').fadeIn();
    });
    $('.modal__close').on('click', function() {
        $('#overlay').fadeOut();
    });
});