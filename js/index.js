const modal = document.getElementById('modal');
const closeBtn = document.getElementById('modal-close-btn');
const consentForm = document.getElementById('consent-form');

setTimeout(function () {
  modal.style.display = 'inline';
}, 1500);

closeBtn.addEventListener('click', function () {
  modal.style.display = 'none';
});

consentForm.addEventListener('submit', function (e) {
  e.preventDefault();
});
