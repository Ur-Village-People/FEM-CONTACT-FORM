const form = document.querySelector('form');
const successToast = document.getElementById('success-toast');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  let isFormValid = true;

  // Clear previous errors
  document.querySelectorAll('.error').forEach(el => {
    el.classList.remove('error');
  });

  // 1. Validate First Name
  const firstName = document.getElementById('first-name');
  const firstNameContainer = firstName.closest('.form__name');
  if (!firstName.value.trim()) {
    firstNameContainer.classList.add('error');
    isFormValid = false;
  }

  // 2. Validate Last Name
  const lastName = document.getElementById('last-name');
  const lastNameContainer = lastName.closest('.form__name');
  if (!lastName.value.trim()) {
    lastNameContainer.classList.add('error');
    isFormValid = false;
  }

  // 3. Validate Email
  const email = document.getElementById('email');
  const emailContainer = email.closest('.form__email-name');
  if (!email.value.trim() || !isValidEmail(email.value)) {
    emailContainer.classList.add('error');
    isFormValid = false;
  }

  // 4. Validate Query Type
  const queryType = form.querySelector('input[name="query-type"]:checked');
  const queryContainer = document.querySelector('.form__query-container');
  if (!queryType) {
    queryContainer.classList.add('error');
    isFormValid = false;
  }

  // 5. Validate Message
  const message = document.getElementById('message');
  const messageContainer = message.closest('.form__message-name');
  if (!message.value.trim()) {
    messageContainer.classList.add('error');
    isFormValid = false;
  }

  // 6. Validate Consent
  const consent = document.getElementById('consent');
  const consentContainer = consent.closest('.form__consent-name');
  if (!consent.checked) {
    consentContainer.classList.add('error');
    isFormValid = false;
  }

  // 7. Show success if valid
  if (isFormValid) {
    successToast.classList.add('show');
    successToast.setAttribute('aria-hidden', 'false');
    form.reset();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    setTimeout(() => {
      successToast.classList.remove('show');
      successToast.setAttribute('aria-hidden', 'true');
    }, 3000);
  }
});

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}