const typing = document.getElementById("typing");
const content = document.getElementById("portfolio-content");
const projectList = document.getElementById("project-list");

const lines = [
  "echo 'Bem-vindo ao meu portfólio DevOps!'",
  "carregando conteúdo...",
  ""
];

let lineIndex = 0;
let charIndex = 0;

function typeLine() {
  if (lineIndex < lines.length) {
    if (charIndex < lines[lineIndex].length) {
      typing.textContent += lines[lineIndex][charIndex];
      charIndex++;
      setTimeout(typeLine, 50);
    } else {
      typing.textContent += '\n';
      charIndex = 0;
      lineIndex++;
      setTimeout(typeLine, 600);
    }
  } else {
    typing.style.display = "none";
    content.style.display = "block";
  }
}
typeLine();

// Modal
const images = document.querySelectorAll(".cert-badge");
const modal = document.getElementById("image-modal");
const modalImg = document.getElementById("modal-image");
const closeBtn = document.querySelector(".close");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

let currentIndex = 0;

function openModal(index) {
  currentIndex = index;
  modal.style.display = "block";
  modalImg.src = images[currentIndex].src;
}

images.forEach((img, index) => {
  img.addEventListener("click", () => openModal(index));
});

closeBtn.onclick = function () {
  modal.style.display = "none";
};

nextBtn.onclick = function () {
  currentIndex = (currentIndex + 1) % images.length;
  modalImg.src = images[currentIndex].src;
};

prevBtn.onclick = function () {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  modalImg.src = images[currentIndex].src;
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
