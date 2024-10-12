const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        //Checking if element is out of view
        if(!entry.isIntersecting){
            const qualitiesChildren = Array.from(entry.target.children);
            if (qualitiesChildren.length > 0) {
                qualitiesChildren.forEach((child, index) => {
                        child.classList.add('out-of-view'); // Add the specified animation class
                    // Remove the animation class after the animation ends
                    child.addEventListener('animationstart', () => {
                        child.classList.remove('out-of-view');
                    }, index * 300);
                });
            } else {
                entry.target.classList.add('out-of-view');
                
                // Remove the animation class after the animation ends
                entry.target.addEventListener('animationend', () => {
                    entry.target.classList.remove('out-of-view');
                }, { once: true });
            }
            return;
        }

        //Check if scanning elements are in view
        if(entry.isIntersecting){
            const animationClass = entry.target.dataset.animationClass;
            const qualitiesChildren = Array.from(entry.target.children);
            if (qualitiesChildren.length > 0) {
                qualitiesChildren.forEach((child, index) => {
                    setTimeout(() => {
                        child.classList.add(animationClass); // Add the specified animation class
                    }, index * 300); // Staggered effect

                    // Remove the animation class after the animation ends
                    child.addEventListener('animationend', () => {
                        child.classList.remove(animationClass);
                    }, { once: true });
                });
            } else {
                entry.target.classList.add(animationClass);
                
                // Remove the animation class after the animation ends
                entry.target.addEventListener('animationend', () => {
                    entry.target.classList.remove(animationClass);
                }, { once: true });
            }
        }
    });
});

//wahooo its working
document.querySelectorAll('.animated-section').forEach(element => observer.observe(element));