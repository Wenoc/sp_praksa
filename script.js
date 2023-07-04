const swiper = new Swiper('.swiper', {
    /*autoplay:{
        delay:4000,
        disableOnInteraction:false,
    },*/
    loop: true,

    pagination: {
        el: '.swiper-pagination',
        clickable:true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

});

var sswiper = new Swiper(".mySwiper", {
    loop:true,
    slidesPerView: 4,
    spaceBetween: 30,
  });