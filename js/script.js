document.addEventListener("DOMContentLoaded", function (event) {

    $(document).ready(function () {
        //określenie początkowej wysokości diva #rotate
        let height = ($("#about").position().top + $("#about").offset().top + $("#about").outerHeight(true)) * 0.6;
        $("#rotate").css("height", height + "px");

        let menu = $("#menuPrototype").position().top * 0.8;
        let cardsImg = $("#cards").position().top * 0.8;
        let workers = $("#team").position().top * 0.8;
        let about = $("#about").position().top * 0.6;
        let specialties = {
            IT: "IT - Proin sit amet faucibus tortor, tempor sagittis lectus.",
            Finanse: "Finanse - Nullam neque enim, viverra quis elit ac, accumsan suscipit augue.",
            Analiza: "Analiza - Fusce tincidunt, massa eget dictum condimentum, purus enim molestie leo, non bibendum ex eros scelerisque nisl.",
            Biznes: "Biznes - Mauris diam massa, accumsan a magna sagittis, volutpat volutpat metus.",
            Zarządzanie: "Zarządzanie - Sed malesuada sodales rutrum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at porttitor ex. Aenean tincidunt nec nulla id finibus.",
            HR: "HR - Phasellus eget eros accumsan, accumsan dui sit amet, convallis ligula.",
        };

        let hidden;

        //dodawanie animacji przy scrollu
        $(window).scroll(function () {
            if (window.scrollY >= menu) {
                $(".menu-item").css("animation-name", "increase");
                $(".menu-item").css("animation-duration", "1s");
            }

            if (window.scrollY >= cardsImg) {
                $(".cardSectionBackground").css("-webkit-animation", "grayImg 5s linear alternate both");
                $(".cardSectionBackground").css("animation", "grayImg 5s linear alternate both");
            }

            if (window.scrollY >= workers) { $("#team").addClass("bluring"); }

            if (window.scrollY >= about) {
                $(".imgsectionCompany").css("-webkit-animation", "rollingAppend 1.2s cubic-bezier(0.20, 1, 0.4, 1) backwards");
                $(".imgsectionCompany").css("animation", "rollingAppend 1.2s cubic-bezier(0.20, 1, 0.4, 1) backwards");
                $(".navbar").css("display", "flex");
            }

            if (window.scrollY < about) {
                $(".navbar").css("display", "none");

            }
        })

        //delikatne scrollowanie po do konkretnego miejsca
        $("#logoMenu").click(function () {
            window.scroll({ top: 0, left: 0, behavior: 'smooth' });
        });

        $("#arrowDown").click(function () {
            document.querySelector('#about').scrollIntoView({ behavior: 'smooth' });
        });

        $(".nav-item").click(function () {
            switch (this.id) {
                case "sectionsHref":
                    document.querySelector('#about').scrollIntoView({ behavior: 'smooth' });
                    break;
                case "aboutHref":
                    document.querySelector('#aboutUs').scrollIntoView({ behavior: 'smooth' });
                    break;
                case "specialtiesHref":
                    document.querySelector('#specialties').scrollIntoView({ behavior: 'smooth' });
                    break;
                case "teamHref":
                    document.querySelector('#teamH2').scrollIntoView({ behavior: 'smooth' });
                    break;
                case "contactHref":
                    document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' });
                    break;
                default:
                    document.querySelector('#about').scrollIntoView({ behavior: 'smooth' });
            }

        });

        //dynamiczne dopasowanie wysokości 
        $(window).resize(function () {
            let height = ($("#about").position().top + $("#about").offset().top + $("#about").outerHeight(true)) * 0.6;
            $("#rotate").css("height", height + "px");
        })

        //sprawdzanie poprawności maila
        $("#inputEmail").change(function () {
            let text = $("#inputEmail").val();
            let filter = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

            hidden = (property) => { $("#alerts").css("display", property); }
            let coloringEmail = (color) => { $("#inputEmail").css("background-color", color); }

            filter.test(text) ? (hidden("none"), coloringEmail("rgba(0, 128, 128, 0.4)")) : (hidden("block"), coloringEmail("rgbA(141, 14, 107, 0.4)"));
        });


        let element = document.createElement('h6');
        //klik w podmenu 
        $(".menu-itemA").click(function () {
            $("#menuPrototypeMore").html('');
            let clikedSpec = $(this)[0].innerHTML;
            let text = JSON.stringify(specialties[clikedSpec]);
            text = text.replace(/"/g,'');
            element.innerHTML = text;     
            $("#menuPrototypeMore").append(element);
        })

        $(".closeIcon").click(function(){
            console.log($(this)[0].offsetParent)
            $("#alerts").css("-webkit-animation", " downingOpacity 0.5s ease none");
            $("#alerts").css("animation", "downingOpacity 0.5s ease none");

            setTimeout(function(){
                hidden("none")
            }, 400)
        })
    });
});


