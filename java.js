//////////////////////////////////////////// Sticky hide/show header navbar ///////////////////////////

(function() {
    var doc         = document.documentElement;
    var w           = window;
    var header      = document.getElementById("site-header");
    var prevScroll  = w.scrollY || doc.scrollTop;
    var curScroll;
    var direction   = 0;
    var prevDirection = 0;
    var checkScroll = function() {
        curScroll = w.scrollY || doc.scrollTop ;
        if(curScroll > prevScroll) {
            direction = 2;
        }

        else if(curScroll < prevScroll) {
            direction = 1;
        }

        if(direction !== prevDirection) {
            toggleHeader(direction,curScroll)
        }

        prevScroll = curScroll;

        function toggleHeader(direction,curScroll) {
            if(direction === 2 && curScroll > 70) {
                header.classList.add('hide')
            }

            else if (direction === 1) {
                header.classList.remove('hide');
            }
            
        }
    } 
    window.addEventListener('scroll', checkScroll)
})();


/************************************************************ Hamburger coding ******************************************* */
let hamburger = document.querySelector('.header-col-2');
let hamburgerMenu = document.querySelector('.hamburger');


hamburgerMenu.addEventListener('click', () => {
    hamburger.classList.toggle('active');
})


/////////////////////////////////////////////////////  making sublist toggle in navbar ////////////////////////////////////////

var theme_link = document.querySelector('.themes')
var work_link  = document.querySelector('.works')
var sub_list1   = document.querySelector('.sub-list1')
var sub_list2   = document.querySelector('.sub-list2')
var link_arrow  = document.querySelectorAll('.link-arrow')

theme_link.addEventListener('click' , ()=> {

    sub_list1.classList.toggle('toggle-sub-list')
    link_arrow[0].classList.toggle('link-arrow-toggle')

})
work_link.addEventListener('click' , ()=> {
    sub_list2.classList.toggle('toggle-sub-list')
    link_arrow[1].classList.toggle('link-arrow-toggle')
})

/////////////////////////// Making scrolling effects in  all elements ///////////////////////////////

window.addEventListener('scroll',() => {
    var scrolling1 = document.querySelectorAll('[data-scroll]');     // Access those elements which you wanna scroll
    var scrolling2 = [];                                             // declare other variabel as an array in order to get every element height from top

    for (let i = 0; i < scrolling1.length; i++) {                   // run below coding for every scrolling element
        scrolling2[i] = scrolling1[i].getBoundingClientRect().top;  // get the height of every scroll element from top
        if (scrolling2[i] <= (innerHeight)* (0.75)) {               // At 3/4 or 75% from the top adding following classes to 
                                                                    // the scrolling element
            if (i == 0 || i == 1 || i == 10 || i == 13 || i == 23) {
                scrolling1[i].classList.add("right"); 
                // This class is for right scroll element animation see in css section
            }
            else if (i == 2 || i == 9 || i == 24) {
                scrolling1[i].classList.add("left");
                // This class is for right scroll element animation see in css section
            }
            else {
                scrolling1[i].classList.add("bottom");
                // This class is for right scroll element animation see in css section
            }
        }
    }    
})

    // making initial picture animate without scrolling if it is on desktop screen 

   setTimeout(() => {
    let scrollingPicure1 = document.querySelector('.section1part2');
    let scrollingTop     = scrollingPicure1.getBoundingClientRect().top;
    if (scrollingTop <= (innerHeight)*(0.75)) {

        scrollingPicure1.classList.add('right')
    }
       
   }, 2000);

//////////////////////////////////////// Change theme coding ////////////////////////////////////////////

var rootVariables = document.querySelector(":root");
var initialValues = getComputedStyle(rootVariables);

 
function defaultTheme(params) {
    rootVariables.style.setProperty('--header-bg-color','hsl(0, 0%, 100%)')
    rootVariables.style.setProperty('--header-links','hsl(240, 80%, 43%)')
    rootVariables.style.setProperty('--heading-color','hsl(21, 7%, 40%)')
    rootVariables.style.setProperty('--sec1-hiHeading','hsl(21, 7%, 30%)')
    rootVariables.style.setProperty('--para-color','hsl(0, 0%, 0%)')
    rootVariables.style.setProperty('--card-bg-color','hsl(0, 0%, 100%)')
    rootVariables.style.setProperty('--card-bg','hsl(193, 98%, 50%)')
    rootVariables.style.setProperty('--yellow-color','hsl(52, 98%, 50%)')
    rootVariables.style.setProperty('--card-color1','hsl(25, 100%, 60%)')
    rootVariables.style.setProperty('--body-bg','hsl(0, 0%, 100%)')
    rootVariables.style.setProperty('--card-color3','hsl(25, 100%, 50%)')
    rootVariables.style.setProperty('--card-text','hsl(347, 7%, 30%)')
    rootVariables.style.setProperty('--bottom-headings','hsl(110, 91%, 42%)')
    rootVariables.style.setProperty('--shadow-color','hsla(0, 0%, 0%, 0.5)')
    document.querySelector('.img-change1').src = "images/cartoonimg3.jpg"
    document.querySelector('.img-change2').src = "images/cartoonimg2.jpg"
    document.querySelector('.img-change3').src = "images/cartoonimg4.jpg"
    document.querySelector('.img-change4').src = "images/cartoonimg6.jpg"

    
}

function theme1(params) {
    rootVariables.style.setProperty('--body-bg','hsl(187, 76%, 50%)')
    rootVariables.style.setProperty('--header-bg-color','hsl(291, 100%, 20%)')
    rootVariables.style.setProperty('--heading-color','hsl(0, 0%, 100%)')
    rootVariables.style.setProperty('--header-links','hsl(0, 0%, 100%)')
    rootVariables.style.setProperty('--sec1-hiHeading','hsl(283, 100%, 50%)')
    rootVariables.style.setProperty('--card-color1','hsl(205, 100%, 40%)')
    rootVariables.style.setProperty('--card-color3','hsl(0, 0%, 100%)')
    rootVariables.style.setProperty('--card-bg-color','hsl(166, 22%, 40%)')
    rootVariables.style.setProperty('--para-color','hsl(0, 0%, 30%)')
    rootVariables.style.setProperty('--card-bg','hsl(0, 0%, 95%)')
    rootVariables.style.setProperty('--card-text','hsl(290, 91%, 100%')
    rootVariables.style.setProperty('--bottom-headings','hsl(190, 91%, 100%)')
    rootVariables.style.setProperty('--shadow-color','hsla(200, 0%, 60%, 0.8)')
    document.querySelector('.img-change1').src = "images/cartoonimg3-1.jpg"
    document.querySelector('.img-change2').src = "images/cartoonimg2-1.jpg"
    document.querySelector('.img-change3').src = "images/cartoonimg4-1.jpg"
    document.querySelector('.img-change4').src = "images/cartoonimg6-1.jpg"
    
}

function theme2(params) {
    rootVariables.style.setProperty('--body-bg','hsl(0, 0%, 0%)')
    rootVariables.style.setProperty('--header-bg-color','hsl(0, 0%, 0%)')
    rootVariables.style.setProperty('--heading-color','hsl(0, 0%, 100%)')
    rootVariables.style.setProperty('--header-links','hsl(0, 0%, 100%)')
    rootVariables.style.setProperty('--sec1-hiHeading','hsl(283, 100%, 50%)')
    rootVariables.style.setProperty('--card-bg-color','hsl(25, 100%, 60%)')
    rootVariables.style.setProperty('--card-bg','hsl(0, 0%, 95%)')
    rootVariables.style.setProperty('--para-color','hsl(0, 0%, 100%)')
    rootVariables.style.setProperty('--card-text','hsl(290, 91%, 0%')
    rootVariables.style.setProperty('--card-color3','hsl(52, 98%, 50%)')
    rootVariables.style.setProperty('--bottom-headings','hsl(193, 98%, 50%)')
    rootVariables.style.setProperty('--shadow-color','hsla(193, 98%, 50%,0.5)')
    document.querySelector('.img-change1').src = "images/cartoonimg3-2.jpg"
    document.querySelector('.img-change2').src = "images/cartoonimg2-2.png"
    document.querySelector('.img-change3').src = "images/cartoonimg4-2.jpg"
    document.querySelector('.img-change4').src = "images/cartoonimg6-2.jpg"
    
}
alert('everything is working good')





















