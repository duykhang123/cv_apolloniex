var MINIMALDOG = MINIMALDOG || {};

(function($) {
    // USE STRICT
    "use strict";

    var $window = $(window);
    var $document = $(document);

    MINIMALDOG.documentOnScroll = {

        init: function() {
            MINIMALDOG.documentOnScroll.animation_nav();
        },
        animation_nav: function() {
            var srcNav = $("#header-main");
            if ($(window).scrollTop() > 100) {
                srcNav.addClass("ticky-menu");
            } else {
                srcNav.removeClass("ticky-menu");
            }
        },

    };

    MINIMALDOG.documentOnResize = {

    };

    MINIMALDOG.documentOnReady = {
        init: function() {
            MINIMALDOG.documentOnReady.carousel_5i_center();
            MINIMALDOG.documentOnReady.carousel_3i_center();
            MINIMALDOG.documentOnReady.scroll_smooth();
            MINIMALDOG.documentOnReady.scroll_smooth_mobile();
            MINIMALDOG.documentOnReady.animate();
            MINIMALDOG.documentOnReady.toggle_darkmode();
            MINIMALDOG.documentOnReady.particles();
            MINIMALDOG.documentOnReady.select_changed();
            MINIMALDOG.documentOnReady.copy_data_clipboard();
            MINIMALDOG.documentOnReady.count_number();
            MINIMALDOG.documentOnReady.masonry();
            MINIMALDOG.documentOnReady.input_file();
            MINIMALDOG.documentOnReady.clear_src_file();
            MINIMALDOG.documentOnReady.carousel_1i();
        },
        carousel_5i_center: function() {
            var $carousels = $('.js-ldgroup-carousel-5i-center');
            $carousels.each(function() {
                var carousel_loop = $(this).data('carousel-loop');
                var carousel_margin = parseInt($(this).data('carousel-margin'));
                $(this).owlCarousel({

                    margin: carousel_margin,
                    nav: false,
                    dots: false,
                    loop: carousel_loop,
                    smartSpeed: 600,
                    autoplay: true,
                    autoplayTimeout: 4000,
                    autoplayHoverPause: true,
                    responsive: {
                        0: {
                            items: 1,
                        },
                        575: {
                            items: 2,
                        },
                        768: {
                            items: 3,
                        },
                        992: {
                            items: 4,
                        }
                    }
                });
            })
        },
        carousel_3i_center: function() {
            var $carousels = $('.js-ldgroup-carousel-3i-center');
            $carousels.each(function() {
                var carousel_loop = $(this).data('carousel-loop');
                var carousel_margin = parseInt($(this).data('carousel-margin'));
                $(this).owlCarousel({

                    margin: carousel_margin,
                    nav: true,
                    dots: false,
                    loop: carousel_loop,
                    smartSpeed: 600,
                    autoplay: true,
                    autoplayTimeout: 5000,
                    autoplayHoverPause: true,
                    navText: [
                        '<i class="fa fa-long-arrow-left"></i>',
                        '<i class="fa fa-long-arrow-right"></i>',
                    ],
                    responsive: {
                        0: {
                            items: 1,
                        },
                        576: {
                            items: 2,
                        },
                        992: {
                            items: 3,
                        }
                    }
                });
            })
        },
        scroll_smooth: function() {
            $("#js-main-menu > li a").click(
                function(e) {
                    e.preventDefault();
                    $('html, body').animate({
                        scrollTop: $($.attr(this, 'href')).offset().top
                    }, 1000);
                }
            )

        },
        scroll_smooth_mobile: function() {
            $("#js-main-menu-mobile > li a").click(
                function(e) {
                    e.preventDefault();
                    $('html, body').animate({
                        scrollTop: $($.attr(this, 'href')).offset().top
                    }, 1500);
                }
            )

        },
        animate: function() {
            try {
                AOS.init({
                    delay: 300,
                    duration: 1500,
                });
            } catch (error) {

            }
        },
        particles: function() {
            // pJS('particles-js',

            //     {
            //         "particles": {
            //             "number": {
            //                 "value": 66,
            //                 "density": {
            //                     "enable": true,
            //                     "value_area": 1025.908125981517
            //                 }
            //             },
            //             "color": {
            //                 "value": "#7b6dfd"
            //             },
            //             "shape": {
            //                 "type": "circle",
            //                 "stroke": {
            //                     "width": 0,
            //                     "color": "#000000"
            //                 },
            //                 "polygon": {
            //                     "nb_sides": 6
            //                 },
            //                 "image": {
            //                     "src": "img/github.svg",
            //                     "width": 100,
            //                     "height": 100
            //                 }
            //             },
            //             "opacity": {
            //                 "value": 0.3083770200778445,
            //                 "random": false,
            //                 "anim": {
            //                     "enable": false,
            //                     "speed": 1,
            //                     "opacity_min": 0.1,
            //                     "sync": false
            //                 }
            //             },
            //             "size": {
            //                 "value": 8.33451405615796,
            //                 "random": true,
            //                 "anim": {
            //                     "enable": false,
            //                     "speed": 40,
            //                     "size_min": 0.1,
            //                     "sync": false
            //                 }
            //             },
            //             "line_linked": {
            //                 "enable": true,
            //                 "distance": 116.68319678621143,
            //                 "color": "#ffffff",
            //                 "opacity": 0.35838410441479224,
            //                 "width": 0.833451405615796
            //             },
            //             "move": {
            //                 "enable": true,
            //                 "speed": 6,
            //                 "direction": "none",
            //                 "random": false,
            //                 "straight": false,
            //                 "out_mode": "out",
            //                 "bounce": false,
            //                 "attract": {
            //                     "enable": false,
            //                     "rotateX": 1166.8319678621144,
            //                     "rotateY": 1200
            //                 }
            //             }
            //         },
            //         "interactivity": {
            //             "detect_on": "canvas",
            //             "events": {
            //                 "onhover": {
            //                     "enable": false,
            //                     "mode": "grab"
            //                 },
            //                 "onclick": {
            //                     "enable": true,
            //                     "mode": "push"
            //                 },
            //                 "resize": true
            //             },
            //             "modes": {
            //                 "grab": {
            //                     "distance": 400,
            //                     "line_linked": {
            //                         "opacity": 1
            //                     }
            //                 },
            //                 "bubble": {
            //                     "distance": 400,
            //                     "size": 40,
            //                     "duration": 2,
            //                     "opacity": 8,
            //                     "speed": 3
            //                 },
            //                 "repulse": {
            //                     "distance": 200,
            //                     "duration": 0.4
            //                 },
            //                 "push": {
            //                     "particles_nb": 4
            //                 },
            //                 "remove": {
            //                     "particles_nb": 2
            //                 }
            //             }
            //         },
            //         "retina_detect": true
            //     }

            // );
        },
        toggle_darkmode: function() {
            $(".js-btn-darkmode").click(function(e) {
                e.preventDefault();
                $(this).toggleClass("active");
                $(this).closest("body").toggleClass("ldgroup-dark-mode");
            })
        },
        select_changed: function() {

            $(".js-select-changed .js-select-item").change(function() {
                var _this_option = $('.js-select-changed .js-select-item').find(':selected');
                var _this = $(this);
                var status = Boolean(_this_option.data("show-modal"));
                var idModal = _this_option.data("bs-target");
                if (status) {
                    $(idModal).modal("show");
                }
                var data = _this.val();
                if (data) {
                    $(".js-select-changed .js-content-item").css({
                        "display": "none",
                    });
                    $(".js-select-changed").find("#" + data).css({
                        "display": "block",
                    });
                }
            })
        },
        copy_data_clipboard: function() {
            $('.js-copy-data-clipboard').on('click', function(event) {
                copyToClipboard(event);
            });

            function copyToClipboard(e) {
                var
                    t = e.target,
                    c = t.dataset.copytarget,
                    inp = (c ? document.querySelector(c) : null);
                if (inp && inp.select) {
                    inp.select();
                    try {
                        document.execCommand('copy');
                        dataCopy = inp.blur();
                        t.classList.add('copied');
                        setTimeout(function() {
                            t.classList.remove('copied');
                        }, 1500);
                    } catch (err) {
                        status = false;
                    }

                }

            }

        },
        count_number: function() {
            try {
                $('.counter').counterUp();
            } catch (error) {

            }
        },
        masonry: function() {
            try {
                var $grid = $('.grid').masonry({
                    itemSelector: '.grid-item',
                });
                $grid.imagesLoaded().progress(function() {
                    $grid.masonry('layout');
                });
            } catch (error) {

            }
        },
        input_file: function() {
            $(".js-btn-upload #formFile").on('change', function() {
                var $this = $(this);
                var fileName = $(this)[0].files[0].name;
                $this.parent().find("#text-show-src").text(fileName);
                if (fileName.length > 0) {
                    $this.parent().find("#label-upload").addClass("d-none");
                    $this.parent().find(".btn-clear-src").removeClass("d-none");
                }
            });
        },
        clear_src_file: function() {
            $(".btn-clear-src").click(function(e) {
                e.preventDefault();
                var $this = $(this);
                $this.addClass("d-none");
                $this.parent().find("#label-upload").removeClass("d-none");
                $this.parent().find("#text-show-src").text("");
            });
        },
        carousel_1i: function() {
            var $carousels = $('.js-ldgroup-carousel-1i');
            $carousels.each(function() {
                var carousel_loop = $(this).data('carousel-loop');
                $(this).owlCarousel({
                    margin: 0,
                    nav: true,
                    dots: true,
                    loop: carousel_loop,
                    smartSpeed: 1000,
                    autoplay: true,
                    autoplayTimeout: 5000,
                    autoplayHoverPause: true,
                    items: 1,
                    navText: [
                        '<i class="fa fa-angle-left"></i>',
                        '<i class="fa fa-angle-right"></i>',
                    ],
                });
            })
        },
    };

    MINIMALDOG.documentOnLoad = {
        init: function() {
            MINIMALDOG.documentOnLoad.loading();
            MINIMALDOG.documentOnLoad.select_changed();
            MINIMALDOG.documentOnLoad.hide_menu();



        },
        loading: function() {
            setTimeout(function() {
                $("#loading").fadeOut(400);
            }, 1000)
        },
        select_changed: function() {
            $(".js-select-changed .js-content-item").css({
                "display": "none",
            });
            var dataNormal = $(".js-select-changed .js-select-item").val();
            if (dataNormal) {
                $(".js-select-changed").find("#" + dataNormal).css({
                    "display": "block",
                });
            }

        },
        hide_menu: function() {
            $(".dropdown-menu-default").css({
                "transition": "none",
            });
        },

    };


    $document.ready(MINIMALDOG.documentOnReady.init);
    $window.on("load", MINIMALDOG.documentOnLoad.init);
    $window.on("resize", MINIMALDOG.documentOnResize.init);
    $window.on("scroll", MINIMALDOG.documentOnScroll.init);
})(jQuery);