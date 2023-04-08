const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,
    autoplay: {
        delay: 5000,
        pauseOnMouseEnter: true,
    },
  
    pagination: {
      el: '.swiper__pagination',
      bulletClass: 'swiper__paginationBullet',
      bulletActiveClass: 'swiper__paginationBullet--active',
      clickable: true,
    },
  
    navigation: {
      nextEl: '.swiper__button--next',
      prevEl: '.swiper__button--prev',
    },
  });