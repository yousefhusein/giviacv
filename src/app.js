import Aos from "aos"

$(function () {
    $("body").removeClass("loading")
    $(".preloader").remove()

    $(window).on("scroll", (event) => {
        const $backToTop = $("#back-to-top")
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            if (!$backToTop.hasClass("show")) {
                $backToTop.addClass("show")
            }
        } else {
            $backToTop.removeClass("show")
        }
    })

    $("#back-to-top-btn").on("click", () => {
        window.scroll({ top: 0, behavior: "smooth" })
    })

    Aos.init({ delay: 100 })

    $(".testimonials-carousel").owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 15000,
        autoplayHoverPause: true,
        margin: 15,
        responsive: {
            0: {
                items: 1,
            },
            1280: {
                items: 2,
            },
        },
    })

    $(".clients-carousel").owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 15000,
        autoplayHoverPause: true,
        margin: 15,
        responsive: {
            0: {
                items: 2,
            },
            720: {
                items: 3,
            },
            1280: {
                items: 4,
            },
        },
    })

    $('[data-role="show-modal"]').on("click", function () {
        const modalId = $(this).attr("data-target")
        $(`#${modalId}`).addClass("show")
    })

    $('[data-role="hide-modal"]').on("click", function () {
        const modalId = $(this).attr("data-target")
        const $modal = $(`#${modalId}`)

        if ($modal.hasClass("modal")) {
            $modal.removeClass("show")
        }
    })

    $(".project-previews").owlCarousel({
        items: 1,
        margin: 15,
        responsive: {
            0: {
                items: 1,
            },
            1280: {
                items: 2,
            },
        },
    })
})
