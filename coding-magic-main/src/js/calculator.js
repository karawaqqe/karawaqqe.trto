const oneNumInput = document.getElementById("calculator-form-one-input");
const twoNumInput = document.getElementById("calculator-form-two-input");
const result = document.getElementById("calculator-form-result");

const textLits = document.querySelectorAll(".calculator__form__item__text");


const form = document.getElementById("calculator-form");


function onClicked(event){
    textLits.forEach(el => el.classList.remove("calculator__form__item__text__active"));
    event.target.classList.add("calculator__form__item__text__active");
}


function onCalculation(event){
    event.preventDefault();

    const oneNum = Number(oneNumInput.value);
    const twoNum =Number(twoNumInput.value);
    const operator = document.querySelector('input[name="radio"]:checked');


    if(oneNum && twoNum && operator){

        if(operator.value === "addition"){
            result.value = oneNum + twoNum
        } else if(operator.value === "multiplication"){
            result.value = oneNum * twoNum
        } else if(operator.value === "subtraction"){
            result.value = oneNum - twoNum
        } else if(operator.value === "division"){
            if (twoNum === 0){
                result.value = ""
                result.placeholder = "На нуль ділити не можна"
            }else{
                result.value = oneNum / twoNum
            }
            
        }
    }
    else{
        result.value = ""
        result.placeholder = "Сталася помилка поле не заповнене"
    }
}

textLits.forEach(text => text.addEventListener("click", onClicked))

form.addEventListener("submit", onCalculation)