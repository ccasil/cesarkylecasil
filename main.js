(function ($) {
    $(document).ready(function () {
        var scroll = $(window).scrollTop();
        scroll = scroll + $(window).height() - 50;

        $(function () {
            $(window).scroll(function () {

                if ($(this).scrollTop() > 150) {
                    $('.top').addClass('solid');
                } else {
                    $('.top').removeClass('solid');
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

function copyToClipboard(element) {
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val($(element).text()).select();
    document.execCommand("copy");
    $temp.remove();
    alert("email copied to clipboard!");
}