import Tenis from "./tenis.js";

const juego = new Tenis();
const p1Btn = document.querySelector("#p1-btn");
const p2Btn = document.querySelector("#p2-btn");
const marcador = document.querySelector("#marcador");

p1Btn.addEventListener("click", () => {
  juego.jugador1Anota();
  marcador.innerText = juego.obtenerScore();
});

p2Btn.addEventListener("click", () => {
  juego.jugador2Anota();
  marcador.innerText = juego.obtenerScore();
});