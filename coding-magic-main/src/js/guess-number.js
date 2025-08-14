const form = document.getElementById('form-guess');
const input = document.getElementById('guessInput');
const result = document.querySelector('.guess__result');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(e) {
  e.preventDefault();

  const value = input.value.trim();
  const userGuess = Number(value);
  const randomNumber = Math.floor(Math.random() * 10) + 1;

  if (value === '' || isNaN(userGuess) || userGuess < 1 || userGuess > 10) {
    result.textContent = 'Введіть число від 1 до 10.';
    result.style.color = '#990000';
  } else if (userGuess === randomNumber) {
    result.textContent = `Вітаю, ви вгадали число!(${randomNumber}).`;
    result.style.color = '#039900';
  } else {
    result.textContent = `Ви програли, комп’ютер загадав(${randomNumber}).`;
    result.style.color = '#990000';
  }

  input.value = '';
}
