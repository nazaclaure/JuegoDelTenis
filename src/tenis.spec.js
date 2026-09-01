import obtenerMarcador from "./tenis.js";

describe("Juego del Tenis", () => {
  it("deberia estar en 'Love - Love' cuando se inicia el partido", () => {
    expect(obtenerMarcador(0, 0)).toEqual("Love - Love");
  });
});