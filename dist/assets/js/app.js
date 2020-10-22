const tabsBtn = document.querySelectorAll(".tabs__nav-btn");
const tabsItem = document.querySelectorAll(".tabs__item");


tabsBtn.forEach(onTabClick);
function onTabClick (item) {
   item.addEventListener("click", function() {
        let currentBtn = item;
        let tabId = currentBtn.getAttribute("data-tab");
        let currentTab = document.querySelector(tabId);

        if (! currentBtn.classList.contains('active')) {
            tabsBtn.forEach(function(item) {
                item.classList.remove("active");
            });

            tabsItem.forEach(function(item) {
                item.classList.remove('active');
            });
        
            currentBtn.classList.add('active');
            currentTab.classList.add('active');
        }
    });
}  

document.querySelector('.tabs__nav-btn').click();

$(function() {

    /*Fixed Header*/
    let header = $("#header");
    let intro = $("#intro");
    let introH = intro.innerHeight();
    let scrollPos = $(window).scrollTop();
    let nav = $("#nav");
    let navToggle = $("#navToggle");

    checkScroll(scrollPos, introH);

    $(window).on("scroll resize", function() {
        introH = intro.innerHeight();
        scrollPos = $(this).scrollTop();

        checkScroll(scrollPos, introH); 

    });

    function checkScroll() {
        if(scrollPos > introH) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
    }



    /*Smooth scroll*/
    $("[data-scroll]").on("click", function(event) {
        event.preventDefault();

        let elementId = $(this).data('scroll');

        let elementOffset = $(elementId).offset().top;

        nav.removeClass("show");

        $("html, body").animate({
            scrollTop: elementOffset - 70
        }, 700);
    });


        /*Nav toggle**/

    navToggle.on("click", function(event) {
        event.preventDefault();

        nav.toggleClass("show");
    });

});