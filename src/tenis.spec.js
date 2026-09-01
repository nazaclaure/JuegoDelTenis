import Tenis from "./tenis.js";

describe("Juego del Tenis", () => {
  it("deberia mostrar 'Love - Love' al iniciar el partido", () => {
    const juego = new Tenis();
    expect(juego.obtenerScore()).toEqual("Love - Love");
  });

  it("deberia mostrar '15 - Love' cuando el jugador 1 anota 1 vez", () => {
    const juego = new Tenis();
    juego.jugador1Anota();
    expect(juego.obtenerScore()).toEqual("15 - Love");
  });

  it("deberia mostrar '30 - Love' cuando el jugador 1 anota 2 veces", () => {
    const juego = new Tenis();
    juego.jugador1Anota();
    juego.jugador1Anota();
    expect(juego.obtenerScore()).toEqual("30 - Love");
  });

    it("deberia mostrar '40 - Love' cuando el jugador 1 anota 3 veces", () => {
     const juego = new Tenis();
     juego.jugador1Anota();
     juego.jugador1Anota();
     juego.jugador1Anota();
     expect(juego.obtenerScore()).toEqual("40 - Love");
    });
    it("deberia mostrar 'Game for Player 1' cuando el jugador 1 anota 4 veces", () => {
     const juego = new Tenis();
     juego.jugador1Anota();
     juego.jugador1Anota();
     juego.jugador1Anota();
     juego.jugador1Anota();
     expect(juego.obtenerScore()).toEqual("Game for Player 1");
    });
    it("deberia mostrar 'Love - 15' cuando el jugador 2 anota 1 vez", () => {
        const juego = new Tenis();
        juego.jugador2Anota();
        expect(juego.obtenerScore()).toEqual("Love - 15");
    });

    it("deberia mostrar 'Love - 30' cuando el jugador 2 anota 2 veces", () => {
    const juego = new Tenis();
    juego.jugador2Anota();
    juego.jugador2Anota();
    expect(juego.obtenerScore()).toEqual("Love - 30");
    });
});