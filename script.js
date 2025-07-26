
const lenis = new Lenis({
  autoRaf: true,
  duration:1.5,
});

///click event

const cards = document.querySelectorAll(".card");
let activeCard = null;
 // track which card is currently active

cards.forEach((card) => {
  card.addEventListener("click", () => {
    const wrapper = card.querySelector(".wraper");

    if (activeCard === card) {
      // Collapse if the same card is clicked again
      cards.forEach((c) => {
        gsap.to(c, {
          height: "auto",
          filter: "blur(0px) brightness(1)",
          scale: 1,
          duration: 0.3,
          ease: "power1.inOut",
        });
      });
      activeCard = null;
    } else {
      // Expand the clicked card and collapse the others
      cards.forEach((c) => {
        const wrapper = c.querySelector(".wraper");
        if (c === card) {
          const tl = gsap.timeline();

          tl.to(c, {
            height: "45vh",
            filter: "blur(0px) brightness(1)",
            scale: 1,
            duration: 0.3,
            ease: "power1.inOut",
          });

          // Animate wraper content
          tl.fromTo(
            wrapper,
            { opacity: 0, y: -50 },
            { opacity: 1, y: 28, duration: 0.4, ease: "power2.out" },
            "-=0.2" // Overlap a bit with card expansion
          );
        } else {
          gsap.to(c, {
            height: "auto",
            filter: "blur(2px) brightness(0.5)",
            scale: 0.9,
            duration: 0.3,
            ease: "power1.inOut",
          });
        }
      });

      activeCard = card;
    }
  });
});


let timeout;
let xprev = 0;
let yprev = 0;
const curser = document.querySelector(".curser");

function curserSkew() {
  

  window.addEventListener("mousemove", function (e) {
    clearTimeout(timeout);

    // Clamp stretch between 0.8 and 1.2
    const xscale = gsap.utils.clamp(0.8, 1.2, (e.clientX - xprev) / 10);
    const yscale = gsap.utils.clamp(0.8, 1.2, (e.clientY - yprev) / 10);

    // Store current position for next movement delta
    xprev = e.clientX;
    yprev = e.clientY;

    // Move and scale cursor
    curser.style.transform = `translate(${e.clientX}px, ${e.clientY}px) scale(${xscale}, ${yscale})`;

    // Reset to normal scale after short pause
    timeout = setTimeout(() => {
      curser.style.transform = `translate(${e.clientX}px, ${e.clientY}px) scale(1, 1)`;
    }, 100);
  });



  const cursorText = document.querySelector(".curser-text");

const links = document.querySelectorAll("#hover");

// Handle hover
links.forEach((link) => {
  link.addEventListener("mouseenter", () => {
    curser.classList.add("active");
    cursorText.textContent = link.getAttribute("data-cursor-text");
  });

  link.addEventListener("mouseleave", () => {
    curser.classList.remove("active");
    cursorText.textContent = "";
  });
});
}

curserSkew();


gsap.registerPlugin(ScrollTrigger);



gsap.to(".nav", {
  y: -100, 
  scrollTrigger: {
    trigger: ".main",        
    start: "top top",        
    end: "50% top",          
    scrub: true,             
  }
});



document.addEventListener("DOMContentLoaded", function () {
  const tl = gsap.timeline();

  tl.to(".anim-h-n", {
    y: 0,
    opacity: 1,
    duration: 1.2,
    ease: "power1.inOut",
    stagger: 0.1
  });

  tl.to(".anim-h-h", {
    y: 0,
    opacity: 1,
    duration: 1.2,
    ease: "power1.inOut",
    stagger: 0.1
  }, "-=0.8")

  tl.to(".anim-c", {
    y: 0,
    opacity: 1,
    duration: 1,
    ease: "power1.inOut",
    stagger: 0.1
  },"-=0.7")
});


