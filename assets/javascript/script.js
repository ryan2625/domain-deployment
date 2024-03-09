import { data } from "./data.js";

$(document).ready(function () {

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
        var a1 = $('<a>').attr('href', element.link).text('Live App').attr("target", "_blank");
        var a2 = $('<a>').attr('href', element.github).text('Github').attr("target", "_blank");
        var techDiv = $('<div>').addClass('tech-div');
        var svgContainer = $('<div>').addClass(element.svgClass).addClass("svg" + index);

        if (element.svg) {
            var svg = $('<img>').attr('src', element.svg).addClass(element.title).attr('id', "&" + index);


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
        if (!element.hideBottom) {
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

    $("#burger").on("click", function () {
        $(".mobile-ul").toggleClass("mobile-hidden");
    });

    $(".close, .close-li").on("click", function () {
        $(".mobile-ul").toggleClass("mobile-hidden");
    });

    $(".close, .close-li").on("click", function () {
        $(".mobile-ul").toggleClass("mobile-hidden");
    });

    $(".close, .close-li").on("click", function () {
        $(".mobile-ul").toggleClass("mobile-hidden");
    });

    $(".to-top").on("click", function () {
        $("html, body").animate({ scrollTop: 0 }, 100);
    }
    );
    var clickSound = document.getElementById("clickSound");
    let themeToggler = document.querySelector("#dark-mode")
    themeToggler.addEventListener("click", function () {
        clickSound.play(); 
        document.body.classList.toggle("dark_mode")
        themeToggler.classList.toggle("rotate-180");
        if (document.body.classList.contains("dark_mode")) {
            document.getElementById("&0").src = "./assets/SVGs/bitcoin2.svg"
            document.getElementById("&2").src = "./assets/SVGs/dumbbell2.svg"
            document.getElementById("&4").src = "./assets/SVGs/glove2.svg"
            document.getElementById("&-1").src = "./assets/SVGs/blob-haikei2.svg"
        } else {
            document.getElementById("&0").src = "./assets/SVGs/bitcoin.svg"
            document.getElementById("&2").src = "./assets/SVGs/dumbbell.svg"
            document.getElementById("&4").src = "./assets/SVGs/glove.svg"
            document.getElementById("&-1").src = "./assets/SVGs/blob-haikei1.svg"
        }
    })
});