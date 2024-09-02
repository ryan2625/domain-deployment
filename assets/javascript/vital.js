
$(document).ready(function () {

    fetch("../assets/javascript/paths.json")
        .then(response => response.json())
        .then(paths => (
            document.getElementById("svg8").setAttribute("d", paths.path8),
            document.getElementById("svg9").setAttribute("d", paths.path9),
            document.getElementById("svg10").setAttribute("d", paths.path10)));

    setTimeout(() => {
        $(".loading").addClass("none");
        $("html").css("overflow-y", "scroll");
    }, 1600);


    $("body").after('<script type="module" src="./assets/javascript/script.js"></script>')
});