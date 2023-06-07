
let header = document.querySelector('header');
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');



window.addEventListener('scroll', () => {
    header.classList.toggle('shadow', window.scrollY > 0);
});

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}
window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}

var swiper = new Swiper(".home", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    
  });

  //swiper
  var swiper = new Swiper(".coming-container", {
    spaceBetween: 20,
    loop:true,
    autoplay: {
        delay: 55000,
        disableOnInteraction: false,
    },
    centeredSlides: true,
    breakpoints: {
        0: {
            slidesPerView: 2,
        },
        568:{
            slidesPerView: 3,
        },
        768:{
            slidesPerView: 4,
        },
        968:{
           slidesPerView: 5,
        },
    },
  })

const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(dropdown => {
    const select = dropdown.querySelector('.select');
    const caret = dropdown.querySelector('.caret');
    const menu = dropdown.querySelector('.menu');
    const options = dropdown.querySelector('.menu li');
    const selected = dropdown.querySelector('.selected');

    select.addEventListener('click', () => {
        select.classList.toggle('select-clicked');
        caret.classList.toggle('caret-rotate');
        menu.classList.toggle('menu-open');
    });
    console.log(Object.keys(dropdowns));

    Object.keys(dropdowns).forEach(option => {
        console.log(option).addEventListener('click', () =>{
            selected.innerText = option.innerText;
            select.classList.remove('select-clicked');
            caret.classList.remove('caret-rotate');
            menu.classList.remove('menu-open');
            options.forEach(option =>{
                option.classList.remove('active');
            });
            option.classList.add('active');
        });
    });
});

