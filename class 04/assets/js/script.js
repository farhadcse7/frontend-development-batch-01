// swiper slider start
const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'hortizontal',
    loop: true,
    speed: 1000,
    autoplay: {
        delay: 2500,
    },

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});

// swiper slider end