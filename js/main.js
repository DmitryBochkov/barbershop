var linkLoginPopup = document.querySelector('.login');
var popupLogin = document.querySelector('.modal-content');
var closeLogin = document.querySelector('.modal-content-close');
var login = popupLogin.querySelector('[name=login]');
var password = popupLogin.querySelector('[name=password]');
var form = popupLogin.querySelector('form');
var storage = localStorage.getItem('login');
var overlay = document.querySelector('.modal-overlay');


linkLoginPopup.addEventListener('click', function(event) {
  event.preventDefault();
  popupLogin.classList.add('modal-content-show');
  overlay.classList.add('modal-overlay-show');

  if (storage) {
    login.value = storage;
    password.focus();
  } else {
    login.focus();
  }
});

closeLogin.addEventListener('click', function(event) {
  event.preventDefault();
  popupLogin.classList.remove('modal-content-show');
  popupLogin.classList.remove('modal-error');
  overlay.classList.remove('modal-overlay-show');
});

// form.addEventListener('submit', function(event) {
//   if (!login.value || !password.value) {
//     event.preventDefault();
//     popupLogin.classList.add('modal-error');
//   } else {
//     localStorage.setItem('login', login.value);
//   }
// });

window.addEventListener('keydown', function(event) {
  if (event.keyCode === 27) {
    if (popupLogin.classList.contains('modal-content-show')) {
      popupLogin.classList.remove('modal-content-show');
      overlay.classList.remove('modal-overlay-show');
    }
  }
});

var linksMapPopup = document.querySelectorAll('.open-map-link');
var popupMap = document.querySelector('.modal-content-map');
var closeMap = popupMap.querySelector('.modal-content-close');

for (var i = 0; i < linksMapPopup.length; i++) {
  linksMapPopup[i].addEventListener('click', function(event) {
    event.preventDefault();
    popupMap.classList.add('modal-content-show');
    overlay.classList.add('modal-overlay-show');
  });
}

closeMap.addEventListener('click', function(event) {
  event.preventDefault();
  popupMap.classList.remove('modal-content-show');
  overlay.classList.remove('modal-overlay-show');
});

window.addEventListener('keydown', function(event) {
  if (event.keyCode === 27) {
    if (popupMap.classList.contains('modal-content-show')) {
      popupMap.classList.remove('modal-content-show');
      overlay.classList.remove('modal-overlay-show');
    }
  }
});

overlay.addEventListener('click', function() {
  if (popupLogin.classList.contains('modal-content-show')) {
    popupLogin.classList.remove('modal-content-show');
  } else if (popupMap.classList.contains('modal-content-show')) {
    popupMap.classList.remove('modal-content-show');
  }
  overlay.classList.remove('modal-overlay-show');
});
