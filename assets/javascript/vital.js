
$(document).ready(function () {
    setTimeout(() => {
        $(".loading").addClass("none");
        console.log("Hello fellow developers =)");
        $("html").css("overflow-y", "scroll");
    }, 1400);

    fetch("../assets/javascript/paths.json")
       .then(response => response.json())
       .then(paths => (
          document.getElementById("svg8").setAttribute("d", paths.path8),   
          document.getElementById("svg9").setAttribute("d", paths.path9),   
          document.getElementById("svg10").setAttribute("d", paths.path10)));
});