$(document).ready(function () {
    $("#big").click(function () {
        $(this).animate({
            height: "200px",
            width: "200px"
        }, 1000).animate({
            height: "150px",
            width: "150px"
        }, 1000);
    });
    $("#small").click(function () {
        $(this).animate({
            height: "100px",
            width: "100px"
        }, 1000).animate({
            height: "150px",
            width: "150px"
        }, 1000);
    });
    $("#hide").click(function () {
        $(this).animate({
            opacity: 0
        }, 1000).animate({
            opacity: 1
        }, 1000);
    });
});