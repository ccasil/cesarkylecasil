(function ($) {
    $(document).ready(function () {

        var scroll = $(window).scrollTop();
        scroll = scroll + $(window).height() - 50;
        
        // $('html, body').animate({
        //     scrollTop: scroll
        // }, 1500);

        $(function () {
            $(window).scroll(function () {
                if ($(this).scrollTop() > 150) {
                    $('.navbar').addClass('solid');
                } else {
                    $('.navbar').removeClass('solid');
                }
                /* Check the location of each desired element */
                $('.hideme').each(function (i) {

                    var bottom_of_object = $(this).offset().top + $(this).outerHeight();
                    var bottom_of_window = $(window).scrollTop() + $(window).height();

                    /* If the object is completely visible in the window, fade it in */
                    if (bottom_of_window > bottom_of_object - 75) {

                        $(this).animate({ 'opacity': '1' }, 400);

                    }

                }); 
            });
        });

        // Add smooth scrolling to all links
        $("a").on('click', function (event) {
            if (this.hash !== "") {
                // Prevent default anchor click behavior
                event.preventDefault();
                // Store hash
                var hash = this.hash;
                $('html, body').animate({
                    scrollTop: $(hash).offset().top
                }, 800, function () {
                    window.location.hash = hash;
                });
            }
        });
    });
}(jQuery));