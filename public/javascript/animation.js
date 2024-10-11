const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        const staffImg = entry.target.querySelector('#staffImg');
        if(entry.isIntersecting){
            staffImg.classList.add('staff-animation');
            return;
        }
        staffImg.classList.remove('staff-animation');  
    });
});
observer.observe(document.querySelector('#qualities'));
observer.observe(document.querySelector('#staff-wrapper'));