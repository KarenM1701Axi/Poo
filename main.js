"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Gato_1 = require("../Gato");
const miGato = new Gato_1.Gato("Michi", "Macho", 2, 4.5, "Gris", "Suave");
const handler = new Gato_1.GatoNombre(miGato);
handler.mostrarGatoInfo();
