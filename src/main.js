// Mobile Navbar

const mobileNav = document.querySelector('.mnav');
const closeBtn = document.querySelector('.mnav__close-btn');
const closebtnIcon = document.querySelector('.mnav__close-btn-icon');

const navOpenedClass = 'left-0';
const navClosedClass = '-left-[300px]';
const arrowLeftClass = 'ri-arrow-left-s-line';
const arrowRightClass = 'ri-arrow-right-s-line';

closeBtn.addEventListener('click', () => {
    mobileNav.classList.toggle(navOpenedClass);
    mobileNav.classList.toggle(navClosedClass);

    closebtnIcon.classList.toggle(arrowLeftClass);
    closebtnIcon.classList.toggle(arrowRightClass);
})

// FAQ
const faqItem = document.querySelectorAll('.faq__item');

faqItem.forEach((item) => {
    const faqBtn = item.querySelector('.faq__btn');

    item.addEventListener('click', () => {
        const isOpen = item.classList.toggle('open');
        const iconClass = isOpen ? 'ri-subtract-fill' : 'ri-add-fill';
        const iconElement = faqBtn.querySelector('i');
        iconElement.className = `${iconClass} text-2xl`; 
        // Menggunakan className untuk mengubah kelas CSS dari icon
    });
});

const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
});






