const field = document.getElementById('field');
const ball = document.getElementById('ball');

field.addEventListener('click', function (event) {
  const fieldRect = field.getBoundingClientRect();

  const clickX = event.clientX - fieldRect.left;
  const clickY = event.clientY - fieldRect.top;

  const ballX = clickX - ball.offsetWidth / 2;
  const ballY = clickY - ball.offsetHeight / 2;

  ball.style.position = 'absolute';
  ball.style.left = `${ballX}px`;
  ball.style.top = `${ballY}px`;
});
