document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault(); 
  let valid = true;
  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const subject = document.getElementById("subject");
  const message = document.getElementById("message");
  const nameError = document.getElementById("nameError");
  const emailError = document.getElementById("emailError");
  const subjectError = document.getElementById("subjectError");
  const messageError = document.getElementById("messageError");
  if (name.value.trim() === "") {
    nameError.classList.remove("d-none");
    valid = false;
  } else {
    nameError.classList.add("d-none");
  }
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email.value.trim())) {
    emailError.classList.remove("d-none");
    valid = false;
  } else {
    emailError.classList.add("d-none");
  }


  if (subject.value.trim() === "") {
    subjectError.classList.remove("d-none");
    valid = false;
  } else {
    subjectError.classList.add("d-none");
  }


  if (message.value.trim() === "") {
    messageError.classList.remove("d-none");
    valid = false;
  } else {
    messageError.classList.add("d-none");
  }

  if (valid) {
    document.getElementById("contactForm").reset();
  }
});

document.addEventListener('DOMContentLoaded', function () {
  const hEl = document.getElementById('hours');
  const mEl = document.getElementById('minutes');
  const sEl = document.getElementById('seconds');
  let h = parseInt(hEl.textContent, 10) || 0;
  let m = parseInt(mEl.textContent, 10) || 0;
  let s = parseInt(sEl.textContent, 10) || 0;
  const pad = n => String(n).padStart(2, '0');

  function tick() {
    s++;
    if (s >= 60) {
      s = 0;
      m++;
    }
    if (m >= 60) {
      m = 0;
      h++;
    }
    hEl.textContent = pad(h);
    mEl.textContent = pad(m);
    sEl.textContent = pad(s);
  }

  setInterval(tick, 1000);
});
        $(document).ready(function () {
            $('.product-carousel').owlCarousel({
                loop: true,
                margin: 0,
                nav: true,
                dots: true,
                responsive: {
                    1200: {
                        items: 5
                    }
                }
            });
        });
    
    
        const carousell = document.querySelector('#carouselExampleDark');

        function animateIncomingSlide(e) {
            const nextSlide = e.relatedTarget;

            const animElements = nextSlide.querySelectorAll('.carousel-animate');
            animElements.forEach((el) => {
                el.classList.remove('animate__animated', 'animate__slideInRight', 'animate__slideInLeft');
                void el.offsetWidth; 
                let animationClass = 'animate__slideInRight';
                if (el.tagName === 'H2') animationClass = 'animate__slideInLeft';
                el.style.setProperty('--animate-delay', '0s');
                el.classList.add('animate__animated', animationClass);
            });
        }

        carousell.addEventListener('slide.bs.carousel', animateIncomingSlide);
    



   $(document).ready(function () {
            $('.category-carousel').owlCarousel({
                loop: true,
                margin: 20,
                nav: false,
                dots: false,
                responsive: {
                    
                    1200: {
                        items: 7
                    }
                }
            });
        });
         $(document).ready(function () {
            $('.product-carousel').owlCarousel({
                loop: true,
                margin: 0,
                nav: true,
                dots: true,
                responsive: {
                    1200: {
                        items: 5 
                    }
                }
            });
        });
        $(document).ready(function() {
            $('.tab-btn').click(function(e) {
                e.preventDefault();
                $('.tab-btn').removeClass('active').addClass('text-secondary');
                $('.tab-btn').removeClass('text-dark');
                $(this).addClass('active text-dark').removeClass('text-secondary');
                $('.tab-box').addClass('d-none');
                var target = $(this).data('target');
                $(target).removeClass('d-none');
            });
        });
 