
var selettore = $(".header-left, main, footer, li:not(.icon-item)")

$(".fa-th").click(showDropdown);

selettore.click(hideDropdown);

function showDropdown () {
    $(".dropdown").toggleClass("visible")
}

function hideDropdown () {
    $(".dropdown").removeClass("visible")
}
