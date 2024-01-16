/*--
Author: Mohamed Taha
Facebook URL: https://www.facebook.com/mohamed.taha138
Author URL: http://www.computerwgraphic.blogspot.com
License: Free
--*/

$(document).ready(function(){
    "use strict";

    $(window).load(function(){

        $(".right-part").addClass("animated-middle fadeIn").removeClass("opacity-0");

        $('.timer').countTo({
            from: 999,
            to: 404,
            speed: 2000,

            onComplete: function() {

                $(".timer").addClass("alert-text animated-quick tada");

            }
        });

    });

    (function() {

        var dlgtrigger = document.querySelector( '[data-dialog]' ),
            somedialog = document.getElementById( dlgtrigger.getAttribute( 'data-dialog' ) ),
            dlg = new DialogFx( somedialog );

        dlgtrigger.addEventListener( 'click', dlg.toggle.bind(dlg) );

    })();

});
