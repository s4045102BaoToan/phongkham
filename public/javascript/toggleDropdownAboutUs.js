document.querySelectorAll('.toggleDropdownAboutUs').forEach(button => {
    button.addEventListener('click', function() {

        let span = this.querySelector('#arrow');
        if(span){
            span.classList.toggle('fadeOff')
        }

        let dropdown = this.nextElementSibling;
        dropdown.classList.toggle('active');
        
    });
});

