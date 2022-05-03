const shareIconsContainer = document.querySelector(".share-icons-container");
const shareBtn = document.querySelector(".share-icon");
const michellePhoto = document.querySelector(".michelle");

shareIconsContainer.classList.add("hidden");
const shareWith = function () {
  console.log(screen.width);
  if (screen.width > 400) {
    this.classList.toggle("active");
    shareIconsContainer.classList.toggle("hidden");
  } else {
    this.classList.toggle("share-icon-abosolue");
    shareIconsContainer.classList.toggle("hidden");
    michellePhoto.classList.toggle("hidden");
  }
};
shareBtn.addEventListener("click", shareWith);
