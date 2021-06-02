(function ($) {
    $(document).ready(function () {
        $(function () {
            $(window).scroll(function () {
                $('.hideme').each(function (i) {
                    var bottom_of_object = $(this).offset().top + $(this).outerHeight();
                    var bottom_of_window = $(window).scrollTop() + $(window).height();
                    if (bottom_of_window > bottom_of_object - 100) {
                        $(this).animate({
                            'opacity': '1'
                        }, 300);
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
                }, 400, function () {
                    window.location.hash = hash;
                });
            }
        });
        const thisyear = new Date().getFullYear();
        if (document.getElementById("year")) {
            document.getElementById("year").innerHTML = thisyear;
        }
        if (document.getElementById("year0")) {
            document.getElementById("year0").innerHTML = thisyear;
        }
        if (document.getElementById("year1")) {
            document.getElementById("year1").innerHTML = thisyear;
        }
    });
}(jQuery));

function copyToClipboard(element) {
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val($(element).text()).select();
    document.execCommand("copy");
    $temp.remove();
}