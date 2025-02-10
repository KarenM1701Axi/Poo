"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GatoNombre = exports.Gato = void 0;
// Gato.ts
class Gato {
    constructor(nombre, sexo, age, weight, color, texture) {
        this.nombre = nombre;
        this.sexo = sexo;
        this.age = age;
        this.weight = weight;
        this.color = color;
        this.texture = texture;
    }
    mostrarInfo() {
        console.log(`Gato: ${this.nombre}`);
        console.log(`Sexo: ${this.sexo}`);
        console.log(`Edad: ${this.age} años`);
        console.log(`Peso: ${this.weight} kg`);
        console.log(`Color: ${this.color}`);
        console.log(`Textura: ${this.texture}`);
    }
}
exports.Gato = Gato;
class GatoNombre {
    constructor(gato) {
        this.gato = gato;
    }
    mostrarGatoInfo() {
        console.log("Información del gato :");
        this.gato.mostrarInfo();
    }
}
exports.GatoNombre = GatoNombre;
