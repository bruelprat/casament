// ⭐ NOVA LÒGICA DE LA PANTALLA INICIAL ⭐
window.addEventListener("DOMContentLoaded", () => {
  const start = document.getElementById("start-screen");
  const big = document.getElementById("big-btn");
  const small = document.getElementById("small-btn");
  const header = document.querySelector("header");
  const main = document.querySelector("main");
  const video = document.getElementById("videoFullscreen");

  // Botó gran → vídeo
  big.addEventListener("click", () => {
    start.style.display = "none";
    playFullscreen();
  });

  // Botó petit → pàgina principal
  small.addEventListener("click", () => {
    start.style.display = "none";
    header.classList.remove("hidden");
    main.classList.remove("hidden");
  });

  // Quan acaba el vídeo → mostrar web
  video.addEventListener("ended", () => {
    header.classList.remove("hidden");
    main.classList.remove("hidden");
    video.style.display = "none";
  });
});

function showSection(id) {
  const sections = ["festa", "regal", "extra"];
  sections.forEach(sec => {
    document.getElementById(sec).classList.add("hidden");
  });
  document.getElementById(id).classList.remove("hidden");
}
function playFullscreen() {
  const video = document.getElementById("videoFullscreen");

  video.style.display = "block";

  requestAnimationFrame(() => {
    video.play();
  });

  video.onended = () => {
    video.style.display = "none";
    document.querySelector("header").classList.remove("hidden");
    document.querySelector("main").classList.remove("hidden");
  };
}

  video.onended = () => {
    video.style.display = "none";
    document.querySelector("header").classList.remove("hidden");
    document.querySelector("main").classList.remove("hidden");
  };

}
