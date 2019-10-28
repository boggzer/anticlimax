/**
 * Add JSDoc
 */
$('.welcome-btn-con, .welcome-btn').click(function() {
    $('.welcome-btn-con, .welcome-btn').fadeOut
    (300, function() 
    { $(this).remove(); }
    );
});