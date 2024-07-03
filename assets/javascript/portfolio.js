$(document).ready(function () {
    var data = [
        {
            name: "crypto-verse",
            tags: ["React", "Node", "TypeScript", "MongoDB", "API", "HTML", "SASS"],
            description: "A crypto app that pulls the latest data from the Coin Gecko API. Complete with user auth, R3F, and more.",
            app: "https://crypto-net-ten.vercel.app/",
            gith: "https://github.com/ryan2625/crypto-net",
            image: "./assets/individual-proj-images/cryptoVerse.webp"
        },
        {
            name: "Sales-Sphere",
            tags: ["React", "HTML", "CSS"],
            description: "Fully functional ecommerce app with many different products and features.",
            app: "https://simply-ecom.vercel.app/",
            gith: "https://github.com/ryan2625/simply-ecom",
            image: "./assets/individual-proj-images/salesSphere.webp"
        },
        {
            name: "Nighthawk Fitness",
            tags: ["React", "HTML", "CSS", "API"],
            description: "Fitness app with a custom database of workout plans and exercises. Created during my time at Augustana College.",
            app: "https://fitness-dev-2.web.app/",
            gith: "https://github.com/AugustanaCSC490Spring23/Nighthawk-Fitness",
            image: "./assets/individual-proj-images/nighthawk.webp"
        },
        {
            name: "Parser.io",
            tags: ["Python", "jQuery", "HTML", "CSS"],
            description: "Originally designed to be an online phrase searcher using regex, this project's main purpose is to show off different exciting UI features. ",
            app: "https://parser-io.vercel.app/",
            gith: "https://github.com/ryan2625/regex-repo-searcher",
            image: "./assets/individual-proj-images/parserio.webp"
        },
        {
            name: "404 Finder",
            tags: ["Python"],
            description: "A web crawler designed to efficiently search for broken links given a list of URLs. Can be configured to follow a sitemap as well.",
            app: "None",
            gith: "https://github.com/ryan2625/crawler",
            image: "./assets/individual-proj-images/crawler.webp"
        },
        {
            name: "First Portfolio",
            tags: ["React", "HTML", "CSS"],
            description: "My first portfolio website trying out different ideas and designs.",
            app: "https://ryan-dev.vercel.app/",
            gith: "https://github.com/ryan2625/personalWebsite",
            image: "./assets/individual-proj-images/personal.webp"
        },
        {
            name: "Trademark-Crawler",
            tags: ["Python"],
            description: "A Python web scraper that will find individuals using certain trademarks.",
            app: "None",
            gith: "https://github.com/ryan2625/Trademark-Crawler",
            image: "./assets/individual-proj-images/crawler.webp"
        },
        {
            name: "EncoreTix",
            tags: ["React Native", "Expo Go", "CSS", "HTML", "Node", "API"],
            description: "A React Native app that integrates the Discovery API to show the latest concerts based on the user's search criteria. ",
            app: "None",
            gith: "https://github.com/ryan2625/EncoreTix",
            image: "./assets/individual-proj-images/encore.webp"
        },
        {
            name: "NLU Flavor App",
            tags: ["React", "MongoDB", "Node", "Express", "CSS", "API", "HTML"],
            description: "This app displays many different types of 'flavors' and allows the user to add reviews and filter items by search term.",
            app: "https://mern-flavor-site.onrender.com/",
            gith: "https://github.com/ryan2625/NLU-flavor-app",
            image: "./assets/individual-proj-images/flavors.webp"
        },
        {
            name: "Folder-Relocator",
            tags: ["Batchfile"],
            description: "Custom batch scripts used to setup repositories, IIS, and grant permissions to users.",
            app: "None",
            gith: "https://github.com/ryan2625/Folder-Relocator",
            image: "./assets/individual-proj-images/cmd.webp"
        },
        {
            name: "SQL-call-finder",
            tags: ["Python", "SQL", "C#", ".NET"],
            description: "A Python script to search repositories and find all occurences of an SQL call or an SQL controller in ASP.NET.",
            app: "None",
            gith: "https://github.com/ryan2625/SQL-call-finder",
            image: "./assets/individual-proj-images/crawler.webp"
        },
        {
            name: ".NOTED",
            tags: [".NET", "C#", "CSS"],
            description: "A simple app to test server side rendering in the .NET ecosystem. ",
            app: "None",
            gith: "https://github.com/ryan2625/.NET-noted",
            image: "./assets/individual-proj-images/asp.webp"
        },
        {
            name: "IREM",
            tags: [".NET", "C#", "CSS", "HTML", "SQL", "CMS"],
            description: "At my job, I've worked on the functionality and UI of this website (backend, analyitcs, SEO, etc).",
            app: "https://www.irem.org/",
            gith: "None",
            image: "./assets/individual-proj-images/irem.webp"
        },
        {
            name: "HTML Email Development",
            tags: ["HTML", "CSS", "Litmus"],
            description: "A collection of a few of my HTML emails that took different email clients and best practices into consideration. Tested emails with Litmus.",
            app: "https://html-email-development.vercel.app/",
            gith: "https://github.com/ryan2625/HTML-email-development",
            image: "./assets/individual-proj-images/htmlemail.webp"
        },
        {
            name: "Nexus Cars",
            tags: ["HTML", "CSS", "React"],
            description: "A dealership's website showcasing different models of vehicles.",
            app: "https://nexus-cars.vercel.app/",
            gith: "https://github.com/ryan2625/nexus-Cars",
            image: "./assets/individual-proj-images/nexus.webp"
        },
        {
            name: "ryan-dev.com",
            tags: ["jQuery", "HTML", "CSS"],
            description: "My current personal website made with jQuery and CSS.",
            app: "https://ryan-dev.com/",
            gith: "https://github.com/ryan2625/domain-deployment",
            image: "./assets/individual-proj-images/ryandev.webp"
        },
        {
            name: "Cross-City Boxing",
            tags: ["HTML", "CSS", "React"],
            description: "A responsive and small website created with React.",
            app: "https://cross-city-boxing.vercel.app/",
            gith: "https://github.com/ryan2625/cross-city-boxing",
            image: "./assets/individual-proj-images/boxing.webp"
        },
        {
            name: "Schedulizer",
            tags: ["Java", "CSS"],
            description: "An fully functional course scheduling app that helps student's visualize their upcoming classes.",
            app: "None",
            gith: "https://github.com/ryan2625/schedule-visualizer",
            image: "./assets/individual-proj-images/schedulizer.webp"
        },
        {
            name: "Superclustering Methods for Optical Trajectories",
            tags: ["Research"],
            description: "A study of supervised clustering methods for optical mouse trajectory data from the Tap Strap 2.",
            app: "./assets/images/380_Tapstrap.pdf",
            gith: "https://github.com/ryan2625/Extensibility",
            image: "./assets/individual-proj-images/tapstrap.webp"
        },
        {
            name: "An Analysis on Network Attacks",
            tags: ["Research"],
            description: "A comprehensive study on the detection and prevention of network attacks such as DDOS, XSS, and Man in the Middle attacks.",
            app: "./assets/images/335_Comprehensive_Study.pdf",
            gith: "None",
            image: "./assets/individual-proj-images/prevention.webp"
        },
        {
            name: "Security Vulnerabilities in WiFi Protocols",
            tags: ["Research"],
            description: "Exploring the vulnerabilities of different WiFi protocols (WEP/WPA/WPA2.",
            app: "./assets/images/336_WiFiHacking.pdf",
            gith: "None",
            image: "./assets/individual-proj-images/WiFivuln.webp"
        },
    ]

    function handleRender(data1) {
        data1.forEach(item => {
            const project = $(`
            <div class="proj">
                <div class="img-cont">
                    <div class="circ1"></div>
                    <div class="circ2"></div>
                    <div class="circ3"></div>
                    <h3>${item.name}</h3>
                    <img src="${item.image}" alt="Main Image"  loading="lazy"/>
                </div>
                <div class="desc">
                    <div class="ps">
                        <p class="notag">${item.description}</p>
                        <div class="barriers"></div>
                        <p class="tag">Tags: ${item.tags.join(", ")}</p>
                        <div class="barriers"></div>
                        <div class="btnz"></div>
                    </div>
                </div>
                <img class="image-bot" src="./assets/images/g21.jpg" alt="Bottom Image" loading="lazy">
            </div>
        `);

            if (item.app !== "None") {
                project.find('.btnz').append(`<a href="${item.app}">Live App</a>`);
            }

            if (item.gith !== "None") {
                project.find('.btnz').append(`<a href="${item.gith}">Github</a>`);
            }

            $('.proj-grid').append(project);
        });
        handleCirc()
    }

    handleRender(data)

    function renderTags() {
        ["React", "CSS", "Research", "jQuery", "API", "Python", "TypeScript", "React Native", "Batchfile", "Node", "HTML", "MongoDB", "SQL", ".NET", "C#", "Java", "SASS"].forEach(item => {
            var option = $('<option></option>').attr('value', `${item}`).text(`${item}`);
            $("#Tags").append(option)
        })
    }
    
    renderTags()

    function handleCirc() {
        var elements = $('.proj')
        var prev = 0
        var count = 0
        for (var i = 0; i < elements.length; i++) {
            var el = $(elements[i])
            var elel = el.offset()
            if (elel.top != prev) {
                prev = elel.top
                count++
            }
            if (count % 2 == 0) {
                var el1 = el.find('.circ1')
                el1.removeClass("circ1")
                el1.addClass("circ1a")
                var el2 = el.find('.circ2')
                el2.removeClass("circ2")
                el2.addClass("circ2a")
                var el3 = el.find('.circ3')
                el3.removeClass("circ3")
                el3.addClass("circ3a")
            } else {
                var el1 = el.find('.circ1a')
                el1.removeClass("circ1a")
                el1.addClass("circ1")
                var el2 = el.find('.circ2a')
                el2.removeClass("circ2a")
                el2.addClass(".circ2")
                var el3 = el.find('.circ3a')
                el3.removeClass("circ3a")
                el3.addClass("circ3")
            }
        }
    }
    $(window).on("resize", handleCirc)

    $("select").on("change", function () {
        var filter = this.value
        var dc = JSON.parse(JSON.stringify(data));
        dc = dc.filter((item) =>
            item.tags.indexOf(filter) !== -1
        )
        $(".proj-grid").html("")
        if (filter === "None") {
            handleRender(data)
        } else {
            handleRender(dc)
        }
    })
})