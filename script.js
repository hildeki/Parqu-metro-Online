class Parquimetro {
    constructor(valorInserido) {
        this.valorInserido = valorInserido;
        this.tempoCalculado = null;
        this.troco = null;
    }

    calcularTempo() {
        if (this.valorInserido >= 1 && this.valorInserido < 1.75) { this.tempoCalculado = "30 minutos" }

        else if (this.valorInserido >= 1.75 && this.valorInserido < 3) { this.tempoCalculado = "60 minutos" }

        else if (this.valorInserido >= 3) { this.tempoCalculado = "120 minutos"}

        else { this.tempoCalculado = "Valor insuficiente" }
    }

    calcularTroco() {
        if (this.tempoCalculado === "30 minutos") { this.troco = this.valorInserido - 1 }

        else if (this.tempoCalculado === "60 minutos") { this.troco = this.valorInserido - 1.75 }

        else if (this.tempoCalculado === "120 minutos") { this.troco = this.valorInserido - 3 }

        else { this.troco = null }
    }

    exibirResultado() {
        if (this.tempoCalculado ==="Valor insuficiente") { 
            document.getElementById("resultado").innerHTML = "Valor insuficiente!";
            document.getElementById("resultado").className = "erro";
        }

        else { 
            document.getElementById("resultado").innerHTML = "Tempo: " + this.tempoCalculado + " | Troco: R$ " + this.troco.toFixed(2);
            document.getElementById("resultado").className = "sucesso";
        }
    }
}