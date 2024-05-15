function locomotiveAnimation(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});




// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}
locomotiveAnimation()

function videoconAnimation() {
    // Check if GSAP is properly included
    if (typeof gsap === "undefined") {
        console.error("GSAP library is not loaded.");
        return;
    }

    var videocon = document.querySelector("#video-container");
    var playbtn = document.querySelector("#play");

    // Check if the elements are found in the DOM
    if (!videocon || !playbtn) {
        console.error("One or more elements not found.");
        return;
    }

    videocon.addEventListener("mouseenter", function() {
        gsap.to(playbtn, {
            scale: 1,
            opacity: 1
        });
    });

    videocon.addEventListener("mouseleave", function() {
        gsap.to(playbtn, {
            scale: 0,
            opacity: 0
        });
    });

    videocon.addEventListener("mousemove", function(dets) {
        gsap.to(playbtn, {
            left: dets.x - 50,
            top: dets.y - 80
        });
    });
}

// Call the function after the DOM has loaded
document.addEventListener("DOMContentLoaded", function() {
    videoconAnimation();
});

// Function to show loading animation and hide header content
function showLoadingAnimation() {
    var loadingAnimation = document.getElementById("loading-animation");
    loadingAnimation.style.display = "block";

    var headerContent = document.getElementById("page1");
    headerContent.style.display = "none";
}

// Function to hide loading animation and show header content
function hideLoadingAnimation() {
    var loadingAnimation = document.getElementById("loading-animation");
    loadingAnimation.style.display = "none";

    var headerContent = document.getElementById("page1");
    headerContent.style.display = "block";
}

// Add an event listener to run the loading animation function when the page starts loading
window.addEventListener("load", function() {
    showLoadingAnimation(); // Show loading animation when the page starts loading
});

// Add an event listener to run the GSAP animations after the page is fully loaded
window.addEventListener("load", function() {
    hideLoadingAnimation(); // Hide loading animation when the page is fully loaded
    videoconAnimation(); // Run the function to animate the video player
    gsap.from("#page1 h1", { // Run GSAP animation for the header
        y: 100,
        opacity: 0,
        delay: 0.8,
        duration: 0.9,
        stagger: 0.3
    });
});
function cursor_animation(){
    document.addEventListener("mousemove",function(dets){
        gsap.to("#cursor",{
            left:dets.x,
            top:dets.y
    
        })
    })
    var a = document.querySelectorAll(".child")
    a.forEach(function(elem){
        elem.addEventListener("mouseenter",function(){
            gsap.to("#cursor",{
                transform: 'Translate(-50%,-50%) scale(1)' 
        })
       
        })
    })
    elem.addEventListener("mouseleave",function(){
        gsap.to("#cursor",{
            transform: 'Translate(-50%,-50%) scale(1)' 
    })
    
    })
    
}
