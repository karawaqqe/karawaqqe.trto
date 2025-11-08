document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("welcomeBackdrop");
  const openBtn = document.querySelector(".hero__button"); // Кнопка из карточки
  const closeBtn = document.getElementById("welcomeCloseModalBtn");

  // Открыть модалку
  openBtn.addEventListener("click", () => {
    modal.style.display = "flex"; // или block, но flex центрирует
  });

  // Закрыть модалку по кнопке
  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });

  // Закрыть модалку при клике вне окна
  modal.addEventListener("click", (event) => {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
});