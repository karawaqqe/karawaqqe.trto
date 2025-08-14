const closeBtn = document.getElementById("welcomeCloseModalBtn");
const saveBtn = document.getElementById("welcomeSaveBtn");
const backdrop = document.getElementById("welcomeBackdrop");
const input = document.getElementById("welcomeUsername");
const username = document.getElementById("headerUsername");


closeBtn.addEventListener("click", onCloseBtnClick);
saveBtn.addEventListener("click", onSaveBtnClick);


function onCloseBtnClick(){
  backdrop.classList.add("is-hidden");
}


function onSaveBtnClick(event){
  event.preventDefault();
  backdrop.classList.add("is-hidden");
  
  if(input.value){
    username.textContent = input.value
  } else {
    username.textContent = "User"
  }
}

