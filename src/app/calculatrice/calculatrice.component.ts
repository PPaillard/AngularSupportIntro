import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculatrice',
  templateUrl: './calculatrice.component.html',
  styleUrls: ['./calculatrice.component.css'],
})
export class CalculatriceComponent implements OnInit {
  nombre1: number | undefined;
  nombre2: number | undefined;
  resultat: number | undefined;

  constructor() {}

  ngOnInit(): void {}

  generateRandom1(): void {
    this.nombre1 = this.randomize(0, 100);
  }
  generateRandom2(): void {
    this.nombre2 = this.randomize(0, 100);
  }

  randomize(min: number, max: number): number {
    return Math.round( Math.random() * (max - min) + min);
  }

  setOperateur(operateur: string): void {
    if (this.nombre1 != undefined && this.nombre2 != undefined) {
      switch (operateur) {
        case '+':
          this.resultat = this.nombre1 + this.nombre2;
          break;
          case '-':
            this.resultat = this.nombre1 - this.nombre2;
            break;
            case '*':
          this.resultat = this.nombre1 * this.nombre2;
          break;
          case '/':
          this.resultat = this.nombre1 / this.nombre2;
          break;
        default:
          break;
      }
    }
  }
}
