$(document).ready(() => {
    const thisyear = new Date().getFullYear();
        const element = document.getElementById("year");
        if (element) {
            element.innerHTML = thisyear;
        }
});