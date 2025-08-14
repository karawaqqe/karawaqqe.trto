const form = document.getElementById('form-max');
const result = document.querySelector('#max-result');

form.addEventListener('input', onInputChange);

function onInputChange(e) {
  const num1 = Number(form.num1.value.trim());
  const num2 = Number(form.num2.value.trim());
  const num3 = Number(form.num3.value.trim());

  if (
    form.num1.value.trim() === '' ||
    form.num2.value.trim() === '' ||
    form.num3.value.trim() === '' ||
    isNaN(num1) || isNaN(num2) || isNaN(num3)
  ) {
    result.textContent = 'Будь ласка, введіть усі три числа.';
    result.style.color = '#900';
  } else {
    const max = Math.max(num1, num2, num3);
    result.textContent = `${max}`;
    result.style.color = '#039900';
  }
}
