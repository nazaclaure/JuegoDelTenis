class Tenis {
  constructor() {
    this.puntosP1 = 0;
    this.puntosP2 = 0;
    this.nombresPuntos = ["Love", "15", "30", "40"];
  }

  jugador1Anota() {
    this.puntosP1++;
  }

  jugador2Anota() {
    this.puntosP2++;
  }

  obtenerScore() {
    if (this.hayGanador()) {
      return `Game for Player ${this.puntosP1 > this.puntosP2 ? 1 : 2}`;
    }
    if (this.hayVentaja()) {
      return `Advantage for Player ${this.puntosP1 > this.puntosP2 ? 1 : 2}`;
    }
    if (this.esDeuce()) {
      return "Deuce";
    }
    return `${this.nombresPuntos[this.puntosP1]} - ${this.nombresPuntos[this.puntosP2]}`;
  }

  hayGanador() {
    const diferencia = Math.abs(this.puntosP1 - this.puntosP2);
    const maxPuntos = Math.max(this.puntosP1, this.puntosP2);
    return maxPuntos >= 4 && diferencia >= 2;
  }

  hayVentaja() {
    const diferencia = Math.abs(this.puntosP1 - this.puntosP2);
    return this.puntosP1 >= 3 && this.puntosP2 >= 3 && diferencia === 1;
  }

  esDeuce() {
    return this.puntosP1 >= 3 && this.puntosP2 >= 3 && this.puntosP1 === this.puntosP2;
  }
}

export default Tenis;