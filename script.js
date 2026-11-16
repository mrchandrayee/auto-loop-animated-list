// The list is duplicated in HTML so the CSS animation can loop seamlessly.
// Pause/resume on hover is handled in CSS; this file adds keyboard-friendly
// pause control for users who focus the scrolling region.

const listWindow = document.querySelector(".list-window");
const listTrack = document.querySelector(".list-track");

listWindow.setAttribute("tabindex", "0");
listWindow.setAttribute("aria-label", "Scrolling feature list. Focus this area and press Space to pause or resume.");

listWindow.addEventListener("keydown", (event) => {
  if (event.code !== "Space") return;
  event.preventDefault();
  const paused = getComputedStyle(listTrack).animationPlayState === "paused";
  listTrack.style.animationPlayState = paused ? "running" : "paused";
});
