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
    if (this.puntosP1 === 3 && this.puntosP2 === 3) {
      return "Deuce";
    }
    if (this.puntosP1 === 4) {
      return "Game for Player 1";
    }
    if (this.puntosP2 === 4) {
      return "Game for Player 2";
    }
    if (this.puntosP1 === 2 && this.puntosP2 === 1) {
      return "30 - 15";
    }
    if (this.puntosP1 === 3) {
      return "40 - Love";
    }
    if (this.puntosP1 === 2) {
      return "30 - Love";
    }
    if (this.puntosP1 === 1) {
      return "15 - Love";
    }
    if (this.puntosP2 === 3) {
      return "Love - 40";
    }
    if (this.puntosP2 === 2) {
      return "Love - 30";
    }
    if (this.puntosP2 === 1) {
      return "Love - 15";
    }
    return "Love - Love";
  }
}

export default Tenis;