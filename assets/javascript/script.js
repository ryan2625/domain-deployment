import { data } from "./data.js";
import { Octokit } from "https://cdn.skypack.dev/@octokit/rest"

$(document).ready(function () {

    //This fine-grained access token only has access to write to a private repo I don't care about and 0 account privileges; its exposure is not important. A github readme is my database for logging URL sources if you're wondering.
    const octokit = new Octokit({
        auth: atob("Z2l0aHViX3BhdF8xMUFWUlY3Q0kweTJ3NDlMM0J5NTF6X242QVZWNWx0Q0NJNGdpOG5xVVh6cFBrZjZabWZKSm43Y241aWJiTU84SHBBM0tRQkE0VG1GQUxhY3dw")
    });

    /*
        
        const now = new Date()
        let data = atob(txt_file.data.content)
        var query_provider = new URLSearchParams(window.location.search).get("src_token")
        data+= `<br> ${now.toString()} ${query_provider}` 
        let final_payload = btoa(data)
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
    if (window.location.search != ""){
        try {
            editFile()
        } catch (exception ){
            console.log("No parameters this time!")
        }
    }
*/

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
        if (!element.hideBottom && element.title !== "Parser.io") {
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
