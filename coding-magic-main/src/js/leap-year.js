const form = document.getElementById('form-leap');
const result = document.querySelector('.leap__year__result');
const button = document.querySelector('.leap__year__btn');

button.addEventListener('click', onBtnClick);

function onBtnClick(e) {
   e.preventDefault();
    if (form.year.value % 4 === 0 && form.year.value > 0) {
        result.textContent = 'Ви народилися у високосний рік!';
        result.style.color="#039900"
    } else if (form.year.value % 4 !== 0 && form.year.value > 0) {
        result.textContent = 'Ви народилися не високосний рік';
        result.style.color="#990000"    
    } else {
        result.textContent = 'Будь ласках введіть коректний рік.';
          result.style.color="#990000"
    }
}
