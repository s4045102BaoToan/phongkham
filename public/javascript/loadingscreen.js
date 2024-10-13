window.addEventListener('load', function() {
    const loadingScreen = document.querySelector('#loadingScreen');
    const content = document.querySelector('.all-content');
    const spinner = document.querySelector('#loadingAnimation');
    const logo = document.querySelector('#loadingImg');
    const left = document.querySelector('#left');
    const right = document.querySelector('#right');
    //Play loading animation when loaded
    setTimeout(() => {
        console.log('Setting timeout for some dramtic effect lol');
        loadingScreen.classList.add('bg-fade-out');
        logo.classList.add('logo-fade-out');
        spinner.classList.add('logo-fade-out');
        left.classList.add('slide-to-left');
        right.classList.add('slide-to-right');
    }, 3000);
    setTimeout(() => {
        loadingScreen.style.display = "none";
    }, 4000);
    
    // Show the main content
    setTimeout(() => {
        content.style.display = 'block';
    }, 3000);
});