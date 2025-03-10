
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




// let text = document.querySelector("#softcrazy-text");
// let totalLength = text.getTotalLength(); // Get total stroke length dynamically

// Set initial stroke state
// gsap.set(text, { strokeDasharray: totalLength, strokeDashoffset: totalLength });

// Scroll-triggered animation using GSAP.to()
gsap.to("#softcrazy-text", {
  strokeDashoffset: 0,
  duration: 2,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".hero-content",
    start: "top 80%", // Start when the section reaches 80% of viewport
    end: "top 40%", // End at 40% of viewport
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

  // Triggering animation on scroll
//   gsap.to(".horizontal-s1 h1", {
//     opacity: 1,
//     scale: 1.2,
//     // rotation: 5,
//     y: 0,
//     duration: 1.5,
//     ease: "power3.out",
//     scrollTrigger: {
//       trigger: ".horizontal-s1",  // The section containing h1
//       start: "top 80%",  // Trigger when top of section reaches 80% of viewport height
//       end: "top 50%",    // End when the top of the section reaches 50% of the viewport height
//       scrub: 1           // Smooth scrolling effect (scrub)
//     }
//   });
// gsap.to(".horizontal-s1 h1", {
//     opacity: 1,
//     scale: 2,  // This will scale the text to twice its original size
//     y: 50,     // Moves the text 50px down
//     duration: 1.5,
//     ease: "power3.out",
//     scrollTrigger: {
//       trigger: ".horizontal-s1",  // The section containing h1
//       start: "top 80%",           // Trigger when top of section reaches 80% of viewport height
//       end: "top top",             // End when the top of the section reaches 50% of the viewport height
//       scrub: 1,                   // Smooth scrolling effect (scrub)

//     }
//   });

// document.querySelectorAll('.scroll-container .section').forEach((section, index) => {
//     // Target the h1 and p of each section
//     gsap.to(section.querySelector("h1"), {
//       opacity: 1,
//       scale: 2,  // This will scale the text to twice its original size
//       y: 30,     // Moves the text 50px down
//       duration: 1.5,
//       ease: "power3.out",
//       scrollTrigger: {
//         trigger: section,  // The section itself
//         start: "top 80%",  // Trigger when the top of the section reaches 80% of the viewport height
//         end: "top top",    // End when the top of the section reaches the top of the viewport
//         scrub: 1,          // Smooth scrolling effect (scrub)
//       }
//     });

//     gsap.to(section.querySelector("p"), {
//       opacity: 1,
//       scale: 1.2,  // Scale the paragraph to 1.2 times its original size
//       y: 30,       // Moves the text 30px down
//       duration: 1.5,
//       ease: "power3.out",
//       scrollTrigger: {
//         trigger: section,  // The section itself
//         start: "top 80%",  // Trigger when the top of the section reaches 80% of the viewport height
//         end: "top top",    // End when the top of the section reaches the top of the viewport
//         scrub: 1,          // Smooth scrolling effect (scrub)
//       }
//     });
//   });


let mm = gsap.matchMedia(); // Create a matchMedia instance

  // For Large Screens (1024px and above)
  mm.add("(min-width: 1024px)", () => {
    document.querySelectorAll('.scroll-container .section').forEach((section) => {
      gsap.to(section.querySelector("h1"), {
        opacity: 1,
        scale: 2.2,  // Bigger effect for large screens
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
        scale: 1.8,  // Slightly smaller than large screens
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
        scale: 1.5,  // Less scaling for mobile
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

