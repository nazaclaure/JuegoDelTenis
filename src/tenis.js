class Tenis {
  constructor() {
    this.puntosP1 = 0;
    this.puntosP2 = 0;
  }

  jugador1Anota() {
    this.puntosP1++;
  }

  jugador2Anota() {
    this.puntosP2++;
  }

  obtenerScore() {
    if (this.puntosP1 === 2) {
      return "30 - Love";
    }
    if (this.puntosP1 === 1) {
      return "15 - Love";
    }
    return "Love - Love";
  }
}

export default Tenis;