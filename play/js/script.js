$(document).ready(function() {

    var inner_width = window.innerWidth;
    if (inner_width <= 500) {
        $("#gameArea").css("height", inner_width);
        $("#gameArea").css("left", "0px");
        //  $("#game_logo").css("display", "none");
        //  $("#footer_line").css("display", "none");
        //  $("#footer_text").css("width", "70%");
        //    $("#footer_t").css("list-style-type", "circle");

    }
});