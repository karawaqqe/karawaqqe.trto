const subscribeBtn = document.getElementById("footer-btn");
const subscribeInput = document.getElementById("subscribe-input");
const backdrop = document.getElementById("subscribeBackdrop");



subscribeBtn.addEventListener("click", onSubscribeClick)
backdrop.addEventListener("click", onBackdropClick)


function onSubscribeClick(e){
  e.preventDefault();
  if(subscribeInput.value){
    backdrop.classList.remove("is-hidden");
  } 
}


function onBackdropClick(){
  backdrop.classList.add("is-hidden");

  subscribeInput.value = ""
}
