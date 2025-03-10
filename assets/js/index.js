
      //   dom content load
      document.addEventListener("DOMContentLoaded", function () {
        gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

        // Initialize ScrollSmoother
        ScrollSmoother.create({
          wrapper: ".main-section",
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
            let section = document.querySelector(".parallax-section");
            let sectionMiddle = section.offsetTop + section.offsetHeight * 0.3;

            gsap.to(window, {
              scrollTo: 300,
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
            start: "top bottom",
            end: "top 20%",
          },
        });

        // Heading text animation
        gsap.from(".heading-text", {
          opacity: 0,
          y: -50,
          duration: 0.5,
          ease: "power3.out",
        });

        // Description text animation
        gsap.from(".description-text", {
          opacity: 0,
          y: 50,
          duration: 0.5,
          delay: 0.5,
          ease: "power3.out",
        });


        // hero section


// Scroll-triggered animation for hero content
let heroScrollTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: ".hero-content",
      start: "top 80%",
      toggleActions: "play none none none",
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
gsap.to(".hero-section", {
    scale: 1.2,
    opacity: 0,
    scrollTrigger: {
        trigger: ".hero-section",
        start: "top top",
        end: "bottom top",
        scrub: true,
        pin: true,
        onLeave: () => {

            gsap.to(".bottom-section", { opacity: 1, y: 0, duration: 1, ease: "power3.out" });
        },
        onEnterBack: () => {

            gsap.to(".bottom-section", { opacity: 0, y: 50, duration: 1, ease: "power3.out" });
        }
    }
});

// Make the next section visible earlier (before it reaches full disappearance)
gsap.from(".bottom-section", {
    opacity: 0,
    y: 50,
    duration: 1,
    delay: 0.5,
    ease: "power3.out",
    scrollTrigger: {
        trigger: ".hero-section",
        start: "top 70%",
        end: "bottom top",
        scrub: true
    }
});




 // GSAP Timeline for SVG text
//  let tl = gsap.timeline({
//     scrollTrigger: {
//       trigger: "#softcrazy-text",
//       start: "top bottom",  // Trigger when top of the text reaches the center
//       end: "bottom center", // End when bottom of the text reaches the center
//       scrub: 1
//     }
//   });

//   tl.from("#softcrazy-text", {
//     strokeDasharray: 200,
//     strokeDashoffset: 200,
//     duration: 2,
//     ease: "power1.out"
//   });

//   // Additional GSAP for opacity and movement
//   gsap.from("#softcrazy-text", {
//     opacity: 0,
//     y: 100,
//     duration: 1.5,
//     ease: "power3.out",
//     scrollTrigger: {
//       trigger: "#softcrazy-text",
//       start: "top bottom",  // Trigger when top of the text reaches the center
//       end: "bottom center", // End when bottom of the text reaches the center
//       scrub: 0.5
//     }
//   });





gsap.to("#softcrazy-text", {
  strokeDashoffset: 0,
  duration: 2,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".hero-content",
    start: "top 80%",
    end: "top 40%",
    scrub: 1,
  }
});

gsap.to(".hero-content h1, .hero-content p", {
  opacity: 1,
  y: 0,
  duration: 1.5,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".hero-content",
    start: "top 85%",
    end: "top 50%",
    scrub: 1,
  }
});




// horizontal scroll
let sections = document.querySelectorAll(".section");
let scrollWidth = (sections.length - 1) * (sections[0].offsetWidth + 30);

gsap.to(".scroll-container", {
    x: `-${scrollWidth}px`,
    ease: "none",
    scrollTrigger: {
        trigger: ".scroll-wrapper",
        start: "top top",
        end: () => `+=${scrollWidth}`,
        scrub: 1,
        pin: true
    }
});



let mm = gsap.matchMedia();

  // For Large Screens (1024px and above)
  mm.add("(min-width: 1024px)", () => {
    document.querySelectorAll('.scroll-container .section').forEach((section) => {
      gsap.to(section.querySelector("h1"), {
        opacity: 1,
        scale: 2.2,
        y: 40,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          end: "top top",
          scrub: 1,
        }
      });

      gsap.to(section.querySelector("p"), {
        opacity: 1,
        scale: 1.3,
        y: 35,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          end: "top top",
          scrub: 1,
        }
      });
    });
  });

  // For Tablets & Medium Screens (768px - 1023px)
  mm.add("(min-width: 768px) and (max-width: 1023px)", () => {
    document.querySelectorAll('.scroll-container .section').forEach((section) => {
      gsap.to(section.querySelector("h1"), {
        opacity: 1,
        scale: 1.8,
        y: 30,
        duration: 1.3,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          end: "top top",
          scrub: 1,
        }
      });

      gsap.to(section.querySelector("p"), {
        opacity: 1,
        scale: 1.1,
        y: 25,
        duration: 1.3,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          end: "top top",
          scrub: 1,
        }
      });
    });
  });

  // For Mobile Devices (Below 768px)
  mm.add("(max-width: 767px)", () => {
    document.querySelectorAll('.scroll-container .section').forEach((section) => {
      gsap.to(section.querySelector("h1"), {
        opacity: 1,
        scale: 1.5,  
        y: 20,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          end: "top top",
          scrub: 1,
        }
      });

      gsap.to(section.querySelector("p"), {
        opacity: 1,
        scale: 1,
        y: 15,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          end: "top top",
          scrub: 1,
        }
      });
    });
  });

  gsap.to(".footer", {
    opacity: 1,
    y: -20,
    duration: 1.5,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".footer",
      start: "bottom bottom",
      toggleActions: "play none none none",
    }
  });

});

