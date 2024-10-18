const dropdown = document.querySelector('#dropdown');

function toggleDropdown(){
    dropdown.classList.toggle('active');
}

function closeDropdown(){
    dropdown.classList.remove('active');
}