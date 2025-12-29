const form = document.querySelector('form');
const successToast = document.getElementById('success-toast');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  let isFormValid = true;

  // 1. Validate Text Inputs & Textarea
  const inputs = form.querySelectorAll('input[type="text"], input[type="email"], textarea');
  inputs.forEach(input => {
    const container = input.parentElement; // Targets .form__name, .form__email-name, etc.
    if (!input.value.trim()) {
      container.classList.add('error');
      isFormValid = false;
    } else {
      container.classList.remove('error');
    }
  });

  // 2. Validate Radio Group
  const queryType = form.querySelector('input[name="query-type"]:checked');
  const queryContainer = form.querySelector('.form__query-container');
  if (!queryType) {
    queryContainer.classList.add('error');
    isFormValid = false;
  } else {
    queryContainer.classList.remove('error');
  }

  // 3. Validate Checkbox
  const consent = document.getElementById('consent');
  const consentContainer = consent.parentElement; // Targets .form__consent-name
  if (!consent.checked) {
    consentContainer.classList.add('error');
    isFormValid = false;
  } else {
    consentContainer.classList.remove('error');
  }

  // 4. Final Success Check
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