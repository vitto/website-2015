$(function(){
    var fired = false;
    $('body').keydown(function(e) {
        if (fired) {
            return;
        }
        if (e.keyCode === 37 && $('.previous-post').length > 0) {
            fired = true;
            document.location.href = $('.previous-post').attr('href');
        } else if (e.keyCode === 39 && $('.next-post').length > 0) {
            fired = true;
            document.location.href = $('.next-post').attr('href');
        } else if (e.keyCode === 38 && $('.category-posts').length > 0) {
            fired = true;
            document.location.href = $('.category-posts').attr('href');
        }
    });
});
