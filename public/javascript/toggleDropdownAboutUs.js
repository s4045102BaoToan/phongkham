document.querySelectorAll('.toggleDropdownAboutUs').forEach(button => {
    button.addEventListener('click', function() {
        let dropdown = this.nextElementSibling;
        dropdown.classList.toggle('active');    
    });
});

