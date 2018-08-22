(function ($) {
    $(document).ready(function () {
        var scroll = $(window).scrollTop();
        scroll = scroll + $(window).height() - 50;

        $(function () {
            $(window).scroll(function () {
                if ($(this).scrollTop() > 150) {
                    $('.navbar').addClass('solid');
                } else {
                    $('.navbar').removeClass('solid');
                }
                
                $('.hideme').each(function (i) {
                    var bottom_of_object = $(this).offset().top + $(this).outerHeight();
                    var bottom_of_window = $(window).scrollTop() + $(window).height();
                    if (bottom_of_window > bottom_of_object - 75) {
                        $(this).animate({ 'opacity': '1' }, 400);
                    }
                }); 
            });
        });

        $("a").on('click', function (event) {
            if (this.hash !== "") {
                event.preventDefault();
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