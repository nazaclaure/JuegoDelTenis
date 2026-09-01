import Tenis from "./tenis.js";

describe("Juego del Tenis", () => {
  it("deberia mostrar 'Love - Love' al iniciar el partido", () => {
    const juego = new Tenis();
    expect(juego.obtenerScore()).toEqual("Love - Love");
  });
});