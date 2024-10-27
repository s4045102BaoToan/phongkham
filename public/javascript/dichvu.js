//Overflow hidden toggle for long dich vu items
function toggleOverflow(event){
    let h4 = event.currentTarget.querySelector('h4')
    if(h4){
        h4.classList.toggle('overflow-maxwidth-custom-disable');
        h4.classList.toggle('overflow-maxwidth-custom')
    }
}