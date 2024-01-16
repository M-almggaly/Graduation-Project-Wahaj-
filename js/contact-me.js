$(document).ready(function() {

    $("#contact-form [type='submit']").click(function(e) {
        e.preventDefault();

        /*--
        Author: Mohamed Taha
        Facebook URL: https://www.facebook.com/mohamed.taha138
        Author URL: http://www.computerwgraphic.blogspot.com
        License: Free
        --*/
        var user_email      = $('input[name=email-address]').val();
        var user_message    = $('textarea[name=message]').val();

        /*--
        Author: Mohamed Taha
        Facebook URL: https://www.facebook.com/mohamed.taha138
        Author URL: http://www.computerwgraphic.blogspot.com
        License: Free
        --*/
        post_data = {'userEmail':user_email, 'userMessage':user_message};

        $.post('php/contact-me.php', post_data, function(response){

            if(response.type == 'error') {

                output = '<div class="error-message"><p>'+response.text+'</p></div>';

            } else {

                output = '<div class="success-message"><p>'+response.text+'</p></div>';

                $('#contact-form input').val('');
                $('#contact-form textarea').val('');

            }

            $("#answer").hide().html(output).fadeIn();

        }, 'json');

    });

    $("#contact-form input, #contact-form textarea").keyup(function() {
        $("#answer").fadeOut();
    });

});
