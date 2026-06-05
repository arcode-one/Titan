export const initForm = () => {
  const form = document.querySelector('.form');

  if (!form) return;

  const feedback = form.querySelector('.form__feedback');
  const requiredFields = Array.from(
    form.querySelectorAll('.form__input[required], .form__textarea[required]')
  );
  let feedbackTimerId = null;

  const showFeedback = (message) => {
    if (!feedback) return;

    window.clearTimeout(feedbackTimerId);
    feedback.textContent = message;
    feedback.classList.add('is-visible', 'is-success');

    feedbackTimerId = window.setTimeout(() => {
      feedback.classList.remove('is-visible', 'is-success');
      feedback.textContent = '';
    }, 7000);
  };

  const validateField = (field) => {
    const value = field.value.trim();
    const isValid = value.length > 0;

    field.classList.toggle('is-invalid', !isValid);
    return isValid;
  };

  requiredFields.forEach((field) => {
    field.addEventListener('input', () => {
      validateField(field);
    });
  });

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const isFormValid = requiredFields.every(validateField);

    if (!isFormValid) {
      const firstInvalidField = requiredFields.find((field) =>
        field.classList.contains('is-invalid')
      );
      firstInvalidField?.focus();
      return;
    }

    showFeedback(
      'Заявка отправлена. Мы свяжемся с вами и уточним задачи, бюджет и желаемую конфигурацию.'
    );
    form.reset();
    requiredFields.forEach((field) => field.classList.remove('is-invalid'));
  });
};
