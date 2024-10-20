gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

ScrollSmoother.create({
  smooth: 1, // Smoother scroll, higher value for more smoothness
  effects: true // Apply effects like parallax scrolling
});