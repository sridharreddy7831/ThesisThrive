let navbar = document.querySelector('.header .flex .navbar');
let profile = document.querySelector('.header .flex .profile');

document.querySelector('#menu-btn').onclick = () =>{
   navbar.classList.toggle('active');
   profile.classList.remove('active');
}

document.querySelector('#user-btn').onclick = () =>{
   profile.classList.toggle('active');
   navbar.classList.remove('active');
}

window.onscroll = () =>{
   navbar.classList.remove('active');
   profile.classList.remove('active');
}

let mainImage = document.querySelector('.quick-view .box .row .image-container .main-image img');
let subImages = document.querySelectorAll('.quick-view .box .row .image-container .sub-image img');

subImages.forEach(images =>{
   images.onclick = () =>{
      src = images.getAttribute('src');
      mainImage.src = src;
   }
});


var swiper = new Swiper(".products-slider", {
   slidesPerView: 1, // Show only one slide at a time
   spaceBetween: 10,
   loop: false, // Disable looping when there's only one slide
   pagination: {
      el: ".swiper-pagination",
      clickable: true,
   },
   breakpoints: {
      // You can define different breakpoints if you have multiple products
      640: {
         slidesPerView: 2,
         spaceBetween: 20,
      },
      768: {
         slidesPerView: 3,
         spaceBetween: 30,
      },
      1024: {
         slidesPerView: 4,
         spaceBetween: 40,
      },
   },
});
