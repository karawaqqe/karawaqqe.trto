  document.addEventListener("DOMContentLoaded", () => {
    const button = document.querySelector(".hero__button");
    if (button) {
      // добавляем класс glow через небольшую задержку
      setTimeout(() => {
        button.classList.add("glow");
      }, 500);
    }
  });