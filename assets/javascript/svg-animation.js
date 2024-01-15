$(document).ready(function () {
    fetch("./paths.json")
        .then(response => response.json())
        .then(paths => (
            document.getElementById("transform1").setAttribute("d", paths.path1),
            document.getElementById("transform2").setAttribute("d", paths.path2),
            document.getElementById("svg5").setAttribute("d", paths.path5),
            document.getElementById("svg6").setAttribute("d", paths.path6),
            document.getElementById("svg7").setAttribute("d", paths.path7),
            document.getElementById("svg8").setAttribute("d", paths.path8),
            document.getElementById("svg9").setAttribute("d", paths.path9),
            document.getElementById("svg10").setAttribute("d", paths.path10),
            KUTE.fromTo(
                '#transform1',
                { path: '#transform1' },
                { path: '#transform2' },
                { repeat: 999, duration: 3000, yoyo: true }
            ).start()
        ))

    fetch("./paths.json")
        .then(response => response.json())
        .then(paths => (
            document.getElementById("transform3").setAttribute("d", paths.path3),
            document.getElementById("transform4").setAttribute("d", paths.path4),
            KUTE.fromTo(
                '#transform3',
                { path: '#transform3' },
                { path: '#transform4' },
                { repeat: 999, duration: 3000, yoyo: true }
            ).start()
        ))
});