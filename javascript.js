// Seleccionar elementos necesarios
const audio = document.querySelector(".player audio"); // Elemento audio
const playBtn = document.getElementById("play"); // Botón de reproducción/pausa
const progressBar = document.querySelector(".progress-bar"); // Contenedor de la barra de progreso
const progress = document.querySelector(".progress"); // Progreso de la canción
const currentTimeEl = document.querySelector(".current-time"); // Tiempo actual
const durationEl = document.querySelector(".duration"); // Duración total de la canción
const titleEl = document.querySelector(".title"); // Título de la canción
const artistEl = document.querySelector(".artist"); // Artista

// Función para reproducir o pausar la canción
playBtn.addEventListener("click", () => {
  if (audio.paused) {
    audio.play();
    playBtn.textContent = "⏸️"; // Cambiar a icono de pausa
  } else {
    audio.pause();
    playBtn.textContent = "▶️"; // Cambiar a icono de play
  }
});

// Actualizar la barra de progreso y el tiempo en tiempo real
audio.addEventListener("timeupdate", () => {
  const currentTime = audio.currentTime;
  const duration = audio.duration;

  // Actualizar el progreso de la barra
  const progressPercent = (currentTime / duration) * 100;
  progress.style.width = `${progressPercent}%`;

  // Actualizar el tiempo actual y la duración
  currentTimeEl.textContent = formatTime(currentTime);

  // Establecer la duración total una sola vez
  if (!isNaN(duration)) {
    durationEl.textContent = formatTime(duration);
  }
});

// Formatear tiempo en minutos y segundos
function formatTime(time) {
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);
  return `${minutes}:${seconds < 10 ? "0" + seconds : seconds}`;
}

// Cambiar el tiempo de la canción al hacer clic en la barra de progreso
progressBar.addEventListener("click", (e) => {
  const width = progressBar.clientWidth;
  const clickX = e.offsetX;
  const duration = audio.duration;

  audio.currentTime = (clickX / width) * duration;
});

// Actualizar el título y el artista 
titleEl.textContent = "Y al final...";
artistEl.textContent = "Bunbury";
