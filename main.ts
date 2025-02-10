import { Gato, GatoNombre } from "../Gato";

const miGato = new Gato("Michi", "Macho", 2, 4.5, "Gris", "Suave");
const handler = new GatoNombre(miGato);
handler.mostrarGatoInfo();
