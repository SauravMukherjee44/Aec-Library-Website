jQuery('#EnquireNow').on('submit', function (e) {
    jQuery('#Alert').html('');
    jQuery('#submit').html('Please wait...');
    jQuery('#submit').attr('disabled', true);
    jQuery.ajax({
        url: 'send.php',
        type: 'post',
        data: jQuery('#EnquireNow').serialize(),
        success: function (result) {
            jQuery('#Alert').html(result);
            jQuery('#submit').html('Success 👍');
            jQuery('#submit').attr('disabled', false);
            jQuery('#EnquireNow')[0].reset();
        }
    });
    e.preventDefault();
});