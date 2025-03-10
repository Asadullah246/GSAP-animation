
      //   dom content load
      document.addEventListener("DOMContentLoaded", function () {
        gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

        // Initialize ScrollSmoother
        ScrollSmoother.create({
          wrapper: ".wrapper",
          content: "body",
          smooth: 2,
          effects: true,
        });

        // Banner Animation (Scaling & Hiding on Scroll)
        gsap.to(".banner", {
          scale: 3,
          opacity: 0,
          ease: "power1.out",
          scrollTrigger: {
            trigger: ".wrapper",
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

        //   image library section
        gsap.to(".left-side .image", {
          y: "100%", // Move images down on scroll
          ease: "none",
          scrollTrigger: {
            trigger: ".scroll-section",
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });

        gsap.to(".right-side .image", {
          y: "-100%", // Move images up on scroll
          ease: "none",
          scrollTrigger: {
            trigger: ".scroll-section",
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      });

