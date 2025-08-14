const input = document.getElementById('secondsInput');
const output = document.getElementById('output');
const button = document.querySelector('.time__calc__btn');

button.addEventListener('click', (event) => {
  event.preventDefault();

  const value = input.value;
  const seconds = Number(value);

  if (seconds < 0) {
    output.textContent = 'Введіть коректне число';
    return;
  }

  const days = Math.floor(seconds / 86400);
  const hours = Math.floor((seconds % 86400) / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const secs = seconds % 60;

  output.textContent = `${days} дн. ${hours}:${minutes}:${secs}`;
});
