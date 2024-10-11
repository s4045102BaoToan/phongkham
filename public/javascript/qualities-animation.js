const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const qualitiesChildren = Array.from(entry.target.children); // Get children of #qualities
            qualitiesChildren.forEach((child, index) => {
                setTimeout(() => {
                    child.classList.add('staff-animation'); // Add the animation class
                }, index * 300); // Staggered effect
            });
        }
    });
});

// Observe #qualities
observer.observe(document.querySelector('#qualities'));
