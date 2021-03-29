const swiper = new Swiper('.swiper-container', {

    loop: false,
    spaceBetween: 5,
    slidesPerView: 4,
    slidesPerGroup: 1,
    pagination: {
      el: '.swiper-pagination',
      clickable:true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });