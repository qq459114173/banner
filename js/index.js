$(function () {
    var xml = new XML();
    xml.sideShow();
    xml.photoShow();
    xml.topScroll()
});
var XML = function () {};
XML.prototype = {
    sideShow: function () {
        var swiper = new Swiper("#sideshow .swiper-container", {
            loop: true,
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },
            spaceBetween: 30,
            effect: "fade",
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
        })
    },
    photoShow: function () {
        var swiper = new Swiper("#photo .swiper-container", {
            slidesPerView: 3,
            spaceBetween: 30,
            slidesPerGroup: 3,
            loop: true,
            loopFillGroupWithBlank: true,
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
        })
    },
    topScroll: function () {
        var obox = document.getElementById("top"),
            scroll = 0,
            begin = 0;
        end = 0;
        timer = null;
        window.onscroll = function () {
            scroll = document.documentElement.scrollTop;
            obox.style.display = "block";
            begin = scroll;
            obox.onclick = function () {
                clearInterval(timer);
                timer = setInterval(function () {
                    begin = begin + (end - begin) / 8;
                    window.scrollTo(0, begin);
                    if (Math.floor(begin) === end) {
                        clearInterval(timer)
                    }
                }, 50)
            }
        }
    },
};