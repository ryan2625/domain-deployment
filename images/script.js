import { data } from "./data.js";

$(document).ready(function() {

    data.forEach((element, index) => {
        var img = $('<img>').attr('src', element.image).attr("loading", "lazy")
        var individual = $('<div>').addClass('individual').addClass("hidden");
        var divider = $('<div>').addClass('portfolio-divider');
        var desc = $('<div>').addClass('descriptions');
        var titles = $('<div>').addClass('titles');
        var h1 = $('<h1>').text(element.title);
        var h2 = $('<h2>').text(element.tech);
        var p = $('<p>').text(element.description);
        var buttons = $('<div>').addClass('buttons');
        var a1 = $('<a>').attr('href', element.link).text('Live App').attr("target", "_blank");
        var a2 = $('<a>').attr('href', element.github).text('Github').attr("target", "_blank");
        individual.attr('id', index)
        individual.append(img)
        individual.append(desc)

        desc.append(titles)
        desc.append(p)
        desc.append(buttons)

        titles.append(h1)
        titles.append(h2)

        buttons.append(a1)
        buttons.append(a2)

        $(".portfolio-display").append(individual);
        $(".portfolio-display").append(divider)

    });

    var img2 = $('<img>').attr('src', "./images/dumbbell.svg")
    var img3 = $('<img>').attr('src', "./images/glove.svg")
    var img4 = $('<img>').attr('src', "./images/car.svg")

    var div1 = $('<div>').attr('id', 'blob');
    var div2 = $('<div>').attr('id', 'blob2');
    var div3 = $('<div>').attr('id', 'blob4');

    $("#0").append(div1.append(img2))
    $("#1").append(div2.append(img3))
    $("#2").append(div3.append(img4))

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

    const navElements = document.querySelectorAll(".observer");
    
    setTimeout(() => {
        $(".loading").addClass("none");
        console.log("hello");
        $("html").css("overflow-y", "scroll");
    }, 2200);

  });