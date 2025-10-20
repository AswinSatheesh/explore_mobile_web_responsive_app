let menu = document.querySelector('.menuclass');
let link = document.querySelector('.link');

menu.addEventListener('click',()=>{
    // alert('Menu Clicked')
    link.classList.toggle('isActiv')
})