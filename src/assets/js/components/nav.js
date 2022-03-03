$('.menu__btn').on('click', function () {
  $('.menu__btn').toggleClass('menu__btn--active')
  $('.menu__list').toggleClass('menu__list--active')
  $('body').toggleClass('lock')
});

$('.menu__list-link').on('click', function () {
  $('body').removeClass('lock')
  $('.menu__btn').removeClass('menu__btn--active')
  $('.menu__list').removeClass('menu__list--active')
});
