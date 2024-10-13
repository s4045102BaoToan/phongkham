window.addEventListener('load', function() {
    const loadingScreen = document.querySelector('#loadingScreen');
    const content = document.querySelector('.all-content');
    
    // Hide the loading screen
    loadingScreen.style.display = 'none';
    
    // Show the main content
    content.style.display = 'block';
});