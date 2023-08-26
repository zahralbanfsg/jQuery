"use strict"
$(document).ready(function () {
    $(".spinner").fadeOut(function () {
        $("#loading").fadeOut();
        $("body").removeClass("overflow-hidden")
    })

    let innerSideBarWidth = $("#innerSideBar").width();
    $("#sideBar").css("left", -innerSideBarWidth);

    let windowScroll = $(window).scrollTop();
    let durationSection = $("#duration").offset().top;
    if (windowScroll > durationSection / 2) {
        $("#togglrIcon").css({ "color": "black" });
    }

    let parghIndex = $(".accordionBox p")
    $(".accordionBox p").not(parghIndex.eq(0)).css({ "display": "none" });

    $(window).scroll(function () {
        let windowScroll = $(window).scrollTop();
        if (windowScroll > durationSection / 2) {
            $("#togglrIcon").css({ "color": "black" });
        } else {
            $("#togglrIcon").css({ "color": "white" });
        }
    })

    let typed = new Typed('#element', {
        strings: ['party..'],
        typeSpeed: 100,
        backSpeed: 100,
        loop: true,
        loopCount: Infinity,
        showCursor: false,
    });

    $("#togglrIcon").click(function () {
        $("#sideBar").animate({ left: 0 }, 1000);
        $("#togglrIcon").css({ "display": "none" });
    })

    $("#iconClose").click(function () {
        $("#sideBar").animate({ left: -innerSideBarWidth }, 1000);
        $("#togglrIcon").css({ "display": "block" });
    })

    $("a[href^='#']").click(function (eventInfo) {
        let aHref = $(eventInfo.target).attr("href");
        let sectionTarget = $(aHref).offset().top;
        $("body,html").animate({ scrollTop: sectionTarget }, 1000);
    })

    let textAreaValue = document.querySelector("textarea");
    textAreaValue.addEventListener("input", function (eventInfo) {
        let valueLength = eventInfo.target.value.length;
        if (valueLength > 100) {
            $(".numberOfCharacter").text("your available character finished")
        } else {
            $(".numberOfCharacter").text(100 - valueLength)
        }
    })

    $(".accordionBox h3").click(function (eventInfo) {
        $(this).next('p').slideToggle();
        console.log(this);
        $(this).parent().siblings().children('p').slideUp();
        console.log(this);
    })



    function makeTimer() {

        let endTime = new Date("31 August 2023 11:59:59 GMT+01:00");
        endTime = (Date.parse(endTime) / 1000);

        let now = new Date();
        now = (Date.parse(now) / 1000);

        let timeLeft = endTime - now;

        let days = Math.floor(timeLeft / 86400);
        let hours = Math.floor((timeLeft - (days * 86400)) / 3600);
        let minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600)) / 60);
        let seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));

        if (hours < "10") { hours = "0" + hours; }
        if (minutes < "10") { minutes = "0" + minutes; }
        if (seconds < "10") { seconds = "0" + seconds; }

        $(".counterDays span").text(days);
        $(".counterHours span").text(hours);
        $(".counterMinutes span").text(minutes);
        $(".counterSeconds span").text(seconds);

        setTimeout(function () {
            makeTimer();
        }, 1000)
    }

    makeTimer();

})

