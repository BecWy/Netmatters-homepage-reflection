//code from:
// https://medium.com/@mariusc23/hide-header-on-scroll-down-show-on-scroll-up-67bbaae9a78c

//I have edited the code slightly, but essentially it is as written - the vast majority is identical so it is best consider it as a plugin
//allow space for the fixed header
// body {
//     padding-top: 208px; // same as header height
//   }


//NOTE have changed the css in experiements. will need to go back to the orignal css to get this working correctly


//currently the related css can be found in js.scss, under STICKY HEADER
const header = document.querySelector("header"); //i added this for experimenting
const body = document.querySelector("body"); //i added this for experimenting

const stickyHeader = () => {
    // Hide Header on on scroll down
    let didScroll;
    let lastScrollTop = 0;
    const delta = 5;  //the minumum amount they have to scroll to trigger a response?
    let navbarHeight = $('header').outerHeight();

    $(window).scroll(function(event){
        didScroll = true;
    });

    setInterval(function() {
        if (didScroll) {
            hasScrolled();
            didScroll = false;
        }
    }, 250);

    function hasScrolled() {
        let st = $(this).scrollTop();
        
        // Make sure they scroll more than delta
        if(Math.abs(lastScrollTop - st) <= delta)
            return;
        
        // If they scrolled down and are past the navbar, add class .nav-up.
        // This is necessary so you never see what is "behind" the navbar.    
        if (st > lastScrollTop && st > navbarHeight){ 
            // Scroll Down
            $('header').removeClass('nav-down').addClass('nav-up'); 
        } else {
            // Scroll Up
            if(st + $(window).height() < $(document).height()) {
                $('header').removeClass('nav-up').addClass('nav-down');     
            }
        }

        lastScrollTop = st;
    }
}

stickyHeader();
