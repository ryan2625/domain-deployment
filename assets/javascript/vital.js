$(document).ready(function () {
    setTimeout(() => {
        $(".loading").addClass("none");
        console.log("Hello fellow developers =)");
        $("html").css("overflow-y", "scroll");
    }, 1800);
});