$(function(){
    var source, template;
    source   = $('#photo-zoom').html();
    template = Handlebars.compile(source);

    function attachPhotoZoom() {
        if ($('.photo-zoom').length > 0) {
            $('.photo-zoom').remove();
        } else {
            $('body').append(template({
                image : $('.photo_wrapper img').attr('src')
            }));
        }
    }

    $('body').keydown(function(e) {
        if (e.keyCode === 32 && $('.photo_wrapper').length > 0) {
            e.preventDefault();
            attachPhotoZoom();
        }
    });

    $('.photo_wrapper img').on('click', function(){
        attachPhotoZoom();
    });

    $(document).on('click', '.photo-zoom', function(){
        attachPhotoZoom();
    });
});
