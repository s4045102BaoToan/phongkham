// Register the ScrollTrigger plugin
document.addEventListener("DOMContentLoaded", () => {
  
setTimeout(() => {
  console.log("waiting 3 seconds before registering scroll trigger")

gsap.registerPlugin(ScrollTrigger);
ScrollTrigger.refresh();

// Animate the boxes on scroll based on Y position for testing 
gsap.utils.toArray(".box").forEach(box => {
  gsap.from(box, {
      opacity: 0,
      y: 50,
      duration: .5,
      scrollTrigger: {
          trigger: box,
          start: "top 90%",
          toggleActions: "play none none reverse",
          markers: true
      }
  });
});

// Index.html //
gsap.utils.toArray("#dichvuItemsTitle").forEach(title =>{
  gsap.from(title, {
    opacity: .5,
    x: -100,
    scale: 0.8,
    duration: .5,
    scrollTrigger: {
      trigger: title,
      start: 'top 90%',
      toggleActions: "play none none reset",
      
    }
  });
});


const ul = document.getElementsByTagName('ul');

gsap.utils.toArray(ul).forEach(ul =>{
  gsap.from(ul, {
    opacity: 0,
    y: -100,
    duration: .5,
    scrollTrigger: {
      trigger: ul,
      start: 'top 90%',
      toggleActions: "play none none reset",
      
    }
  });
});


//animation animation-slide-right : slide left to right, opacity up

gsap.utils.toArray('.animation-slide-right').forEach(element =>{
  gsap.from(element, {
    x: -70,
    opacity: 0.5,
    scrollTrigger:{
      trigger: element,
      start: 'top 90%',
      toggleActions: "play none none reset",
      
    }
  })
});

//animation: slide bottom to top, opacity up for same row items

gsap.utils.toArray('.row-animation').forEach(row =>{
  const element = row.querySelectorAll('.animation-slide-up');

  gsap.from(element, {
    y: 70,
    opacity: 0.5,
    duration: 1,
    stagger: .3,
    scrollTrigger:{
      trigger: row,
      start: 'top 90%',
      toggleActions: "play none none reset",
      
    }
  })
});
//dichvu.html animation
gsap.utils.toArray('.animated-dichvu').forEach(item =>{
  gsap.from(item, {
    scale: .8,
    opacity: 0.2,
    transformOrigin: "50% 50%",
    scrollTrigger:{
      trigger: item,
      start: 'top 85%',
      end: 'top 70%',
      scrub: true,
      toggleActions: "play none none reset",  
    }
  })
});

}, 3000);// time out for registering scroll trigger
});// <- window.onload function, add code above this bracket

window.addEventListener("load", () => {
  console.log('Scroll trigger refreshed ?')
  ScrollTrigger.refresh();
});
