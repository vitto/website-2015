$(function(){
    if ($.cookie('cookie_policy_saw')) {
        $('#cookie-policy').remove();
    } else {
        $('#cookie-policy').removeClass('cookie-policy--closed');
        $('.cookie-policy__close').on('click', function(){
            $('#cookie-policy').addClass('cookie-policy--closed');
            $.cookie('cookie_policy_saw', 'true', { path: '/' });
        });
    }
});
