window.addEventListener('beforeunload', function(){
    localStorage.setItem('scrollPos', window.scrollY);
});

window.addEventListener('DOMContentLoaded', function(){
    
    const scrollPos = localStorage.getItem('scrollPos');
    if(scrollPos){
        console.log('scroll pos has been saved ' + scrollPos);
    setTimeout(() => {
            window.scrollTo(0, parseInt(scrollPos), 'smooth');
    }, 300);
}
});