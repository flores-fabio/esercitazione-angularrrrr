import { Component, Input } from '@angular/core';
import { Pokemon } from '../models/pokemon.model'; //i puntini servono per risalire alla cartella padre, in questo caso app, e poi alla cartella models, e infine al file pokemon.model.ts
@Component({
  selector: 'app-pokedex',
  standalone: true,
  imports: [],
  templateUrl: './pokedex.html',
  styleUrls: ['./pokedex.css'],
})
export class Pokedex {

  @Input() pokemon!: Pokemon; //qui aspetta l'input dal padre che è di tipo Pokemon, è obbligatorio (per questo c'è il !)

}
