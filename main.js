(function ($) {
    $(document).ready(function () {

        $(".navbar").hide();

        var scroll = $(window).scrollTop();
        scroll = scroll + $(window).height() - 50;
        // $('html, body').animate({
        //     scrollTop: scroll
        // }, 1500);

        $(function () {
            $(window).scroll(function () {
                if ($(this).scrollTop() > 200) {
                    $('.navbar').fadeIn('slow');
                } else {
                    $('.navbar').fadeOut();
                }
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