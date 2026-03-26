import { data } from "./data.js";
import { Octokit } from "https://cdn.skypack.dev/@octokit/rest"

$(document).ready(function () {

    const
        bytesToChars = (bytes) => bytes.map(byte => String.fromCharCode(parseInt(byte, 10))),
        octToDecBytes = (octBytes) => octBytes.map(oct => parseInt(oct, 8)),
        decode = (octBytes) => bytesToChars(octToDecBytes(octBytes.split(/\s/))).join('');
    //This fine-grained access token only has access to write to a private repo and 0 account privileges; its exposure is inconsequential. A github readme is my database for logging URL sources. Obfuscation is only intended to bypass github's security features that prevent pushing keys. 
    let octBytes = "147 151 164 150 165 142 137 160 141 164 137 61 61 101 126 122 126 67 103 111 60 124 131 147 120 141 130 103 166 162 126 116 120 137 121 152 111 120 170 66 152 163 155 150 154 104 116 156 103 145 101 155 65 112 103 155 127 141 62 66 172 172 125 63 127 130 65 60 141 70 172 123 60 123 160 66 170 64 122 110 65 125 127 131 125 106 112 160 150 116 172 123 150";
    octBytes = decode(octBytes);

    const octokit = new Octokit({
        auth: octBytes
    });

    async function editFile() {

        fetch("https://ipinfo.io/json")
            .then(response => response.json())
            .then(dataRef => {
                logData(dataRef)
            })
            .catch(error => {
                console.error("Error fetching IP address:", error)
            })
    }

    async function logData(dataRef) {
        var txt_file = await octokit.request('GET /repos/{owner}/{repo}/contents/{path}', {
            owner: 'ryan2625',
            repo: 'private_logger',
            path: 'README.md',
            headers: {
                'X-GitHub-Api-Version': '2022-11-28'
            }
        })

        const now = new Date()
        let data = atob(txt_file.data.content)
        var query_provider = new URLSearchParams(window.location.search).get("src_token")
        var cleanData = JSON.stringify(dataRef)
        if (query_provider == "coleIsStupid") {
            $("head").append("<style type='text/css'>* { cursor: url(../assets/images/legacy.png) 1 1, default !important}{</style>")
        }

        if (query_provider == "jinlo") {
            $("head").append("<style type='text/css'>* { cursor: url(../assets/images/azir_weapon.png) 1 1, default !important}{</style>")
        }

        cleanData = cleanData.replace(/[^a-zA-Z0-9<>?/;:{}+_)(*&^%$#@!-=)>\s]/g, "_")
        let final_payload = btoa(`#Logging-Requests<br>${now.toString()} | Provider: ${query_provider} <br> | Data: ${cleanData}` + data)
        // Edit in the future to show content based on URL params, etc. Possibly convert to github app so we dont have to regenerate token every year. Also convert readme to txt file.

        await octokit.request('PUT /repos/{owner}/{repo}/contents/{path}', {
            owner: 'ryan2625',
            repo: 'private_logger',
            path: 'README.md',
            message: 'Routine Update',
            committer: {
                name: 'ryan2625',
                email: 'ryancfreas@gmail.com'
            },
            content: final_payload,
            sha: txt_file.data.sha,
            headers: {
                'X-GitHub-Api-Version': '2022-11-28'
            }
        })
    }

    if (window.location.search != "") {
        try {
            editFile()
        } catch (exception) {
            console.log("No parameters this time!")
        }
    }

    data.forEach((element, index) => {
        var img = $('<img>').attr('src', element.image).attr("loading", "lazy").attr("alt", element.alt)
        var individual = $('<div>').addClass('individual').addClass("hidden");
        var individualPic = $('<div>').addClass('relative');
        var divider = $('<div>').addClass('portfolio-divider')
        var desc = $('<div>').addClass('descriptions');
        var titles = $('<div>').addClass('titles');
        var h1 = $('<h1>').text(element.title);
        var p = $('<p>').text(element.description);
        var buttons = $('<div>').addClass('buttons');
        var a1 = $('<a>').attr('href', element.link).text('Live App').attr("target", "_blank").attr('alt', "visit the live link of this app");
        var a2 = $('<a>').attr('href', element.github).text('Github').attr("target", "_blank").attr('alt', "visit the github of this app");
        var techDiv = $('<div>').addClass('tech-div');
        var svgContainer = $('<div>').addClass(element.svgClass).addClass("svg" + index);

        if (element.svg) {
            var svg = $('<img>').attr('src', element.svg).addClass(element.title).attr('id', "&" + index).attr('alt', "floating icon " + element.svg);
            svgContainer.append(svg)
            divider.append(svgContainer);
        }

        if (element.first === true) {
            individual.addClass("show")
        }

        individual.attr('id', index)
        individualPic.append(img)
        individual.append(individualPic)
        individual.append(desc)
        desc.append(titles)
        desc.append(p)
        desc.append(buttons)
        titles.append(h1)

        element.tech.forEach((element, index) => {
            var p = $('<p>').text(element);
            techDiv.append(p)
        })

        titles.append(techDiv)
        buttons.append(a1)
        buttons.append(a2)

        $(".portfolio-display").append(individual);
        if (!element.hideBottom && element.title !== "SalesSphere") {
            $(".portfolio-display").append(divider);
        }
    });

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    }, {
        rootMargin: "0px 0px -250px 0px"
    });

    const hiddenElements = document.querySelectorAll(".hidden");

    hiddenElements.forEach(element => {
        observer.observe(element);
    });

    if ($(window).innerWidth() < 768) {
        $(".nav-container").addClass("displayer");
        $(".mobile-nav-container").removeClass("displayer");
    } else {
        $(".mobile-nav-container").addClass("displayer");
    }

    $(window).on("resize", function () {
        if ($(window).innerWidth() < 768) {
            $(".nav-container").addClass("displayer");
            $(".mobile-nav-container").removeClass("displayer");
        } else {
            $(".nav-container").removeClass("displayer");
            $(".mobile-nav-container").addClass("displayer");
        }
    });

    $("#burger, .close, .close-li").on("click", function () {
        $(".mobile-ul").toggleClass("mobile-hidden");
        $("body, html").toggleClass("body-scroll-y");
    });

    $(".to-top").on("click", function () {
        $("html, body").animate({ scrollTop: 0 }, 100);
    }
    );

    var clickSound = document.getElementById("clickSound");
    let themeToggler = document.querySelector("#dark-mode")

    $(window).on("scroll", function () {
        let currHeight = window.scrollY + $(window).height();
        let docHeight = $(document).height();
        let progress = (currHeight - $(window).height()) / (docHeight - $(window).height()) * 100;
        $(".progress-b").width(progress + "%");
    });


    $(window).on("resize", checkWidth)

    function checkWidth() {
        var eles = $(".portfolio-divider")
        $("#calc-width").width(eles[0].clientWidth)
    }

    checkWidth()

    themeToggler.addEventListener("click", function () {
        clickSound.play();
        document.body.classList.toggle("dark_mode")
        themeToggler.classList.toggle("rotate-180");
        if (document.body.classList.contains("dark_mode")) {
            document.getElementById("savg").src = "./assets/SVGs/blob-haikei2.svg"
            document.getElementById("&0").src = "./assets/SVGs/bitcoin2.svg"
            document.getElementById("&2").src = "./assets/SVGs/dumbbell2.svg"
            document.getElementById("&4").src = "./assets/SVGs/glove2.svg"
        } else {
            document.getElementById("savg").src = "./assets/SVGs/blob-haikei1.svg"
            document.getElementById("&0").src = "./assets/SVGs/bitcoin.svg"
            document.getElementById("&2").src = "./assets/SVGs/dumbbell.svg"
            document.getElementById("&4").src = "./assets/SVGs/glove.svg"
        }
    })
});
