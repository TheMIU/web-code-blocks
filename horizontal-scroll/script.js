const slider = document.querySelector('.slider')
const sections = gsap.utils.toArray('.slider section')

let tl = gsap.timeline({
    defaults: {
        ease: "none"
    },
    scrollTrigger: {
        trigger: slider,
        pin: true,
        scrub: 2,
        end: () => "+=" + slider.offsetWidth
    }
})

tl.to(slider, {
    xPercent: -66
})

// smooth scroll
const lenis = new Lenis();

function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
}

requestAnimationFrame(raf)