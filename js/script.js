// Disable href reload
document
  .querySelector('nav')
  .addEventListener('click', (e) => e.preventDefault());

//Real time count time for the event
const dateCountDown = (() => {
  const countDownDate = new Date('Feb 16, 2021 00:00:00').getTime();
  var x = setInterval(function () {
    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element with id="demo"
    document.querySelector('#days').innerHTML = days;
    document.querySelector('#hours').innerHTML = hours;
    document.querySelector('#minutes').innerHTML = minutes;
    document.querySelector('#secs').innerHTML = seconds;

    // If the count down is finished, write some text
    if (distance < 0) {
      clearInterval(x);
      document.querySelector('.countdown').innerHTML = 'EXPIRED';
    }
  }, 1000);
})();

// PopUp Hotels Feature
let hotelsPopup = (() => {
  const $bookHotelBtn = document.querySelector('#book-hotel-button'),
    $hotelPopUp = document.querySelector('#hotel-popup'),
    $closePopUp = document.querySelector('#close-popup');

  $bookHotelBtn.addEventListener(
    'click',
    () => ($hotelPopUp.style.visibility = 'visible')
  );
  $closePopUp.addEventListener('click', () => {
    $hotelPopUp.style.visibility = 'hidden';
  });
  $hotelPopUp.addEventListener('click', (e) => {
    if (e.target.id === 'hotel-popup') $hotelPopUp.style.visibility = 'hidden';
  });
})();

// Navr Mobile Toggle
const navMobileToggle = (() => {
  const menu = document.querySelector('#menu'),
    navbarExpand = document.querySelector('.navbar-expand');

  navbarExpand.style.display = 'none';
  menu.addEventListener('click', () => {
    if (navbarExpand.style.display === 'none') {
      // navbarExpand.style.transition = 'all 0.3s';
      setTimeout(() => (navbarExpand.style.display = 'grid'), 100);
    } else {
      setTimeout(() => (navbarExpand.style.display = 'none'), 100);
    }
  });
})();

// NavrBar Auto Scroll Mobile/Tablet
const navScrollTabletAndBelow = (() => {
  document.querySelector('#nav-home').addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
  document.querySelector('#nav-about').addEventListener('click', () => {
    location.hash = '#about';
  });
  document.querySelector('#nav-media').addEventListener('click', () => {
    location.hash = '#media';
  });
  document.querySelector('#nav-faq').addEventListener('click', () => {
    location.hash = '#faq';
  });
  document.querySelector('#nav-contact-us').addEventListener('click', () => {
    location.hash = '#contact-us';
  });
})();

// NavrBar Auto Scroll Desktop
const navScrollDesktop = (() => {
  document.querySelector('#desktop-home').addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
  document.querySelector('#desktop-about').addEventListener('click', () => {
    location.hash = '#about';
  });
  document.querySelector('#desktop-media').addEventListener('click', () => {
    location.hash = '#media';
  });
  document.querySelector('#desktop-faq').addEventListener('click', () => {
    location.hash = '#faq';
  });
  document
    .querySelector('#desktop-contact-us')
    .addEventListener('click', () => {
      location.hash = '#contact-us';
    });
})();

//NavtBar funcuality
(() => {
  // Initial state
  var scrollPos = 0;
  // adding scroll event
  window.addEventListener('scroll', function () {
    // detects new state and compares it with the new one
    if (document.body.getBoundingClientRect().top > scrollPos) {
      document.querySelector('nav').style.position = 'fixed';
    } else {
      document.querySelector('nav').style.position = 'absolute';
      document.querySelector('.navbar-expand').style.display = 'none';
    }
    // saves the new position for iteration.
    scrollPos = document.body.getBoundingClientRect().top;
  });
})();

//Trevia Form Validator
(function valAllCheckbox() {
  let total = 10;
  let score = 0;
  let rightAnswers = 0;
  const answers = ['c', 'd', 'b', 'a', 'b', 'c', 'd', 'b', 'a', 'c'];
  const treviaSubmit = document.querySelector('button[type="submit"]');
  treviaSubmit.addEventListener('click', (e) => {
    e.preventDefault();
    const q1 = document.querySelector('input[name=q1]:checked'),
      q2 = document.querySelector('input[name=q2]:checked'),
      q3 = document.querySelector('input[name=q3]:checked'),
      q4 = document.querySelector('input[name=q4]:checked'),
      q5 = document.querySelector('input[name=q5]:checked'),
      q6 = document.querySelector('input[name=q6]:checked'),
      q7 = document.querySelector('input[name=q7]:checked'),
      q8 = document.querySelector('input[name=q8]:checked'),
      q9 = document.querySelector('input[name=q9]:checked'),
      q10 = document.querySelector('input[name=q10]:checked');

    for (let i = 1; i <= total; i++) {
      if (eval('q' + i) == null || eval('q' + i) == '') {
        alert('You missed question ' + i);
        return false;
      }
    }

    for (let i = 1; i <= total; i++) {
      if (eval('q' + i).value == answers[i - 1]) {
        score += 10;
        rightAnswers++;
        document.querySelector('.result').innerHTML = `
        <h2>Scored: ${score}</h2>
        <p>You got ${rightAnswers}/10 right</p>
        `;
        eval('q' + i).nextElementSibling.style.color = 'green';
        eval('q' + i).nextElementSibling.innerHTML +=
          '     <i class="fas fa-check"></i>';
      } else {
        eval('q' + i).nextElementSibling.style.color = 'red';
        eval('q' + i).nextElementSibling.innerHTML +=
          '     <i class="fas fa-times"></i>';
      }
    }
    document.querySelector('form[name=trevia]').reset();
  });
})();
