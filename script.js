const swiper = new Swiper('.swiperv1', {
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


  if (window.innerWidth <= 375)
  {
    var sswiper = new Swiper(".mySwiper", {
        loop:false,
        slidesPerView: 1,
        spaceBetween: 30,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
          },
      });
  }
  else{
    var sswiper = new Swiper(".mySwiper", {
        loop:false,
        slidesPerView: 5,
        spaceBetween: 30,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
          },
      });
  }

document.querySelector('#menuopen').addEventListener('click',()=>{
    let meni=document.querySelector('.nav-2 ul');
    let menuopen=document.querySelector(".nav-1 #menuopen");
    let menuclose=document.querySelector(".nav-1 #menuclose");
    meni.style.display='block';
    menuopen.style.display='none';
    menuclose.style.display='block';
});
document.querySelector('#menuclose').addEventListener('click',()=>{
    let meni=document.querySelector('.nav-2 ul');
    let menuopen=document.querySelector(".nav-1 #menuopen");
    let menuclose=document.querySelector(".nav-1 #menuclose");
    meni.style.display='none';
    menuopen.style.display='block';
    menuclose.style.display='none';
});
