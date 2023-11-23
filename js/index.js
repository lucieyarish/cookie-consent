const modal = document.getElementById('modal');
const closeBtn = document.getElementById('modal-close-btn');
const consentForm = document.getElementById('consent-form');
const modalText = document.getElementById('modal-text');

setTimeout(function () {
  modal.style.display = 'inline';
}, 1500);

closeBtn.addEventListener('click', function () {
  modal.style.display = 'none';
});

consentForm.addEventListener('submit', function (e) {
  e.preventDefault();
  modalText.innerHTML = '';
  modalText.innerHTML = `
    <div class="modal-inner-loading">
        <img src="assets/images/loading.svg" class="loading">
        <p id="uploadText">
            Uploading your data to the dark web...
        </p>
    </div>
  `;
});
