const btn = document.getElementById("viewMoreBtn");
const modal = document.getElementById("storyModal");
const modalText = document.getElementById("modalText");
const fullStory = document.getElementById("fullStory");
const closeBtn = document.querySelector(".story-modal-close");

btn.addEventListener("click", () => {
  modalText.textContent = fullStory.textContent;
  modal.classList.add("open");
});

closeBtn.addEventListener("click", () => {
  modal.classList.remove("open");
});

window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.remove("open");
  }
});
