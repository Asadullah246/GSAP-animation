
      //   dom content load
      document.addEventListener("DOMContentLoaded", function () {
        gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

        // Initialize ScrollSmoother
        ScrollSmoother.create({
          wrapper: ".mainDiv",
          content: ".wrapper",
          smooth: 2,
          effects: true,
        });

        // Banner Animation (Scaling & Hiding on Scroll)
        gsap.to(".banner", {
          scale: 3,
          opacity: 0,
          ease: "power1.out",
          scrollTrigger: {
            trigger: ".banner-section",
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });

        // Text Entry Animation (Slide Down)
        gsap.from(".text", {
          y: -100,
          opacity: 0,
          duration: 1.5,
          ease: "power2.out",
        });

        // Gradient Text Animation
        gsap.to(".text", {
          backgroundPosition: "300% 0%",
          duration: 3,
          repeat: -1,
          yoyo: true,
          ease: "power1.inOut",
        });

        // Scroll to Bottom on Arrow Click

        document
          .getElementById("scrollArrow")
          .addEventListener("click", function () {
            let section = document.querySelector(".parallax-section"); // Select the target section
            let sectionMiddle = section.offsetTop + section.offsetHeight * 0.3; // Calculate the middle point

            gsap.to(window, {
              scrollTo: 100,
              duration: 1.5,
              ease: "power2.inOut",
            });
          });

        // parallax section

        gsap.from(".parallax-section", {
          scale: 2 / 3,
          scrollTrigger: {
            trigger: ".parallax-section",
            scrub: 2,
            start: "top bottom", // Start zooming earlier
            end: "top 20%", // End zooming before it exits the screen
          },
        });

        // Heading text animation
        gsap.from(".heading-text", {
          opacity: 0,
          y: -50, // Move from slightly above
          duration: 0.5,
          ease: "power3.out",
        });

        // Description text animation
        gsap.from(".description-text", {
          opacity: 0,
          y: 50, // Move from below
          duration: 0.5,
          delay: 0.5, // Delay to appear after the heading
          ease: "power3.out",
        });


        // hero section


// Scroll-triggered animation for hero content
let heroScrollTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: ".hero-content", // Section where animation starts
      start: "top 80%", // When the top reaches 80% of the viewport
      toggleActions: "play none none none", // Run once when visible
    }
  });

  heroScrollTimeline
    .from(".hero-content h1", { opacity: 0, y: -50, duration: 1.2, ease: "power3.out" })
    .from(".hero-content p", { opacity: 0, y: -30, duration: 1, ease: "power3.out" }, "-=0.5");

  // Immediate animation for animated box
  gsap.to(".animated-box", {
    opacity: 1,
    scale: 1.2,
    rotation: 360,
    stagger: 0.5,
    duration: 2,
    ease: "power1.inOut"
  });



// Floating Boxes Animation
gsap.to(".animated-box", {
    y: "random(-50,50)",
    x: "random(-50,50)",
    rotation: "random(-20,20)",
    duration: 3,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut"
});

// ScrollTrigger for Hero Section
// gsap.to(".hero-section", {
//     scale: 1.2,
//     opacity: 0,
//     scrollTrigger: {
//         trigger: ".hero-section",
//         start: "top top",
//         end: "bottom top",
//         scrub: true,
//         pin: true,
//         onLeave: () => {
//             gsap.to(".bottom-section", { opacity: 1, y: 0, duration: 1, ease: "power3.out" });
//         }
//     }
// });



// gsap.from(".bottom-section", {
//     opacity: 0,
//     y: 50,
//     duration: 1,
//     ease: "power2.out",
//     scrollTrigger: {
//         trigger: ".bottom-section",
//         start: "top 80%",  // Start the animation when the section is 80% from the top of the viewport
//         end: "bottom top",
//         scrub: true,
//         toggleActions: "play none none reverse", // Play animation on scroll into view, reverse on scroll out
//     }
// });



// ScrollTrigger for Hero Section
gsap.to(".hero-section", {
    scale: 1.2,
    opacity: 0,
    scrollTrigger: {
        trigger: ".hero-section",
        start: "top top",  // Start when top of hero-section reaches top of the viewport
        end: "bottom top", // End when bottom of hero-section reaches top of the viewport
        scrub: true,
        pin: true, // Pin the section while scrolling
        onLeave: () => {
            // Trigger next section's animation earlier
            gsap.to(".bottom-section", { opacity: 1, y: 0, duration: 1, ease: "power3.out" });
        },
        onEnterBack: () => {
            // Reset the animation when scrolling back up (optional)
            gsap.to(".bottom-section", { opacity: 0, y: 50, duration: 1, ease: "power3.out" });
        }
    }
});

// Make the next section visible earlier (before it reaches full disappearance)
gsap.from(".bottom-section", {
    opacity: 0,
    y: 50, // Move it up from the bottom
    duration: 1,
    delay: 0.5, // Delay before it appears
    ease: "power3.out",
    scrollTrigger: {
        trigger: ".hero-section",
        start: "top 70%",  // Start showing the next section when the hero section is 70% scrolled out
        end: "bottom top", // End when the hero section is fully scrolled out
        scrub: true
    }
});


});

