// Gato.ts
export class Gato {
    constructor(
      public nombre: string,
      public sexo: string,
      public age: number,
      public weight: number,
      public color: string,
      public texture: string
    ) {}
  
    mostrarInfo(): void {
      console.log(`Gato: ${this.nombre}`);
      console.log(`Sexo: ${this.sexo}`);
      console.log(`Edad: ${this.age} años`);
      console.log(`Peso: ${this.weight} kg`);
      console.log(`Color: ${this.color}`);
      console.log(`Textura: ${this.texture}`);
    }
  }
  
  export class GatoNombre {
    constructor(private gato: Gato) {}
  
    mostrarGatoInfo(): void {
      console.log("Información del gato :");
      this.gato.mostrarInfo();
    }
  }
  