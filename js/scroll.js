$('#backTop').on('click', function (e) {
  if (this.hash !== '') {
    e.preventDefault();

    const hash = this.hash;

    $('html, body').animate(
      {
        scrollTop: $(hash).offset().top - 100
      },
      800
    );
  }
});

window.addEventListener('scroll', function () {
  var scroll = this.document.querySelector('.scrollTop');
  scroll.classList.toggle('active', window.scrollY > 50);
});
