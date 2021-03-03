//code adapted from:
// https://medium.com/@mariusc23/hide-header-on-scroll-down-show-on-scroll-up-67bbaae9a78c
//I have edited the code (both JS (minor changes) and SCSS (more changes)), but it is very similar to the original

//currently the related css can be found in js.scss, under STICKY HEADER

const stickyHeader = () => {
    // const header = document.querySelector("header");
    // const body = document.querySelector("body");
    
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
        if (st > lastScrollTop){ //my code
        
        //if (st > lastScrollTop && st > navbarHeight){ ///this is the original code
            // Scroll Down
            body.style.paddingTop = "0px"; // my code, this is the same as the header height. Removed - now added on scroll up
            $('header').removeClass('nav-down').addClass('nav-up'); //original code
        } else {
            // Scroll Up
            if(st + $(window).height() < $(document).height()) {
                if(window.matchMedia('(min-width: 993px)').matches) {
                    body.style.paddingTop = "208px"; //wider screen/ desktop header height
                } else if(window.matchMedia('(min-width: 768px)').matches) {
                    body.style.paddingTop = "110px"; //tablet header height
                } else {
                    body.style.paddingTop = "168px"; //mobile header height
                }
                $('header').removeClass('nav-up').addClass('nav-down');
            }
        }

        lastScrollTop = st;
    }
}

stickyHeader();

