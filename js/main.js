// $(document).ready(() => {
//     $(window).scroll(() => {
//         $('.hideme').each((i, element) => {
//             const bottom_of_object = $(element).offset().top + $(element).outerHeight();
//             const bottom_of_window = $(window).scrollTop() + $(window).height();
//             if (bottom_of_window > bottom_of_object - 100) {
//                 $(element).animate({
//                     'opacity': '1'
//                 }, 300);
//             }
//         });
//     });

//     $("a").on('click', function (event) {
//         if (this.hash !== "") {
//             event.preventDefault();
//             const hash = this.hash;
//             $('html, body').animate({
//                 scrollTop: $(hash).offset().top
//             }, 400, () => {
//                 window.location.hash = hash;
//             });
//         }
//     });

//     $('.flip-card').on('click', () => {
//         $(this).toggleClass('flipped');
//     });

// });

const thisyear = new Date().getFullYear();
["year", "year0", "year1"].forEach(id => {
    const element = document.getElementById(id);
    if (element) {
        element.innerHTML = thisyear;
    }
});

// function copyToClipboard(element) {
//     const $temp = $("<input>");
//     $("body").append($temp);
//     $temp.val($(element).text()).select();
//     document.execCommand("copy");
//     $temp.remove();
// }
