import { Component, signal } from '@angular/core';
import { Pokemon } from './models/pokemon.model';
import { Pokedex } from './pokedex/pokedex'; //è il componente 

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Pokedex],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('Pokedex-Advanced')

  selectedPokemon?: Pokemon; //è una variabile che tiene in mente il pokemon selezionato, è di tipo Pokemon

pokemons: Pokemon[] = [
    { 
      id: 1, 
      name: 'Bulbasaur', 
      type: 'Erba', 
      imageUrl: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/001.png', 
      description: 'Fin dalla nascita, questo Pokémon ha un grosso seme piantato sulla schiena che cresce man mano che lui si nutre e si sviluppa assorbendo i raggi solari.' 
    },
    { 
      id: 2, 
      name: 'Ivysaur', 
      type: 'Erba', 
      imageUrl: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/002.png', 
      description: 'Il bocciolo sul suo dorso sboccia quando assorbe molta energia solare. Il profumo dolce del fiore indica che è ormai pronto ad evolversi.' 
    },
    { 
      id: 4, 
      name: 'Charmander', 
      type: 'Fuoco', 
      imageUrl: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/004.png', 
      description: 'La fiamma sulla punta della sua coda indica la sua salute e il suo stato d\'animo. Se si dovesse spegnere, la sua vita potrebbe essere in serio pericolo.' 
    },
    { 
      id: 5, 
      name: 'Charmeleon', 
      type: 'Fuoco', 
      imageUrl: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/005.png', 
      description: 'Ha un\'indole feroce e ama combattere senza sosta. Usa i suoi artigli affilati come rasoi e il respiro infuocato per sopraffare i nemici.' 
    },
    { 
      id: 6, 
      name: 'Charizard', 
      type: 'Fuoco', 
      imageUrl: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/006.png', 
      description: 'Le sue poderose ali gli permettono di volare ad altitudini incredibili. Il calore delle sue fiamme, in grado di fondere le rocce, aumenta in base all\'esperienza accumulata.' 
    },
    { 
      id: 7, 
      name: 'Squirtle', 
      type: 'Acqua', 
      imageUrl: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/007.png', 
      description: 'Il suo guscio non serve solo a proteggerlo: la forma arrotondata e le scanalature lo aiutano a minimizzare l\'attrito per nuotare a grandissima velocità.' 
    },
    { 
      id: 8, 
      name: 'Wartortle', 
      type: 'Acqua', 
      imageUrl: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/008.png', 
      description: 'Considerato un simbolo di longevità. Le sue grandi orecchie e la folta coda pelosa gli permettono di mantenere il perfetto equilibrio mentre nuota agilmente.' 
    },
    { 
      id: 9, 
      name: 'Blastoise', 
      type: 'Acqua', 
      imageUrl: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/009.png', 
      description: 'I getti d\'acqua pressurizzata che spara dai massicci cannoni sul suo guscio sono così potenti da poter perforare lastre di solido acciaio.' 
    },
    { 
      id: 10, 
      name: 'Caterpie', 
      type: 'Coleottero', 
      imageUrl: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/010.png', 
      description: 'Per proteggersi dai predatori, rilascia un odore terribile dalle antenne rosse sul capo. Le sue zampette a ventosa gli permettono di scalare qualsiasi superficie.' 
    },
    { 
      id: 25, 
      name: 'Pikachu', 
      type: 'Elettro', 
      imageUrl: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/025.png', 
      description: 'Immagazzina enormi quantità di elettricità nelle sacche delle sue guance. Quando è messo alle strette, rilascia potenti scariche elettriche paralizzanti.' 
    },
    { 
      id: 39, 
      name: 'Jigglypuff', 
      type: 'Normale', 
      imageUrl: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/039.png', 
      description: 'Gonfia il suo corpo rotondo per cantare una melodia rilassante e misteriosa. Chiunque ascolti questa ninna nanna cade immediatamente in un sonno profondo.' 
    },
    { 
      id: 52, 
      name: 'Meowth', 
      type: 'Normale', 
      imageUrl: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/052.png', 
      description: 'Di natura notturna, ama vagare per le strade alla ricerca di oggetti tondi e luccicanti. Alla vista di una moneta, i suoi occhi brillano d\'entusiasmo.' 
    },
    { 
      id: 54, 
      name: 'Psyduck', 
      type: 'Acqua', 
      imageUrl: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/054.png', 
      description: 'Soffre costantemente di emicranie debilitanti. Quando il dolore diventa insopportabile, scatena poteri psichici devastanti di cui non conserva alcuna memoria.' 
    },
    { 
      id: 94, 
      name: 'Gengar', 
      type: 'Spettro', 
      imageUrl: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/094.png', 
      description: 'Di notte si nasconde furtivamente nelle ombre delle persone per assorbirne l\'energia vitale e il calore, provocando un improvviso brivido di freddo nelle sue vittime.' 
    },
    {
      id: 65, 
      name: 'Alakazam', 
      type: 'Psico', 
      imageUrl: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/065.png', 
      description: 'Il suo cervello è in continua crescita e gli permette di ricordare ogni dettaglio della sua vita. Con un QI che supera i 5000, affida ogni movimento del suo corpo alla telecinesi.' 
    },
    { 
      id: 68, 
      name: 'Machamp', 
      type: 'Lotta', 
      imageUrl: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/068.png', 
      description: 'Con le sue quattro poderose braccia può sferrare una raffica devastante di mille pugni in soli due secondi. La sua forza incalcolabile gli permette di spostare montagne.' 
    },
    { 
      id: 130, 
      name: 'Gyarados', 
      type: 'Acqua', 
      imageUrl: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/130.png', 
      description: 'Conosciuto per la sua indole incredibilmente feroce e distruttiva. Una volta infuriato, non si placa finché non ha raso al suolo tutto ciò che lo circonda con potenti raggi di energia.' 
    },
    { 
      id: 133, 
      name: 'Eevee', 
      type: 'Normale', 
      imageUrl: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/133.png', 
      description: 'Possiede un corredo genetico estremamente irregolare che gli permette di mutare rapidamente per adattarsi a qualsiasi ambiente, sviluppandosi in numerose evoluzioni diverse.' 
    },
    { 
      id: 143, 
      name: 'Snorlax', 
      type: 'Normale', 
      imageUrl: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/143.png', 
      description: 'Passa l\'intera giornata a mangiare e dormire in un ciclo continuo. Il suo stomaco di ferro gli permette di digerire perfino i cibi andati a male senza il minimo problema.' 
    },
    { 
      id: 150, 
      name: 'Mewtwo', 
      type: 'Psico', 
      imageUrl: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/150.png', 
      description: 'Il risultato di anni di crudeli esperimenti genetici per creare il Pokémon più forte di tutti. È dotato di immensi poteri psichici, ma è del tutto privo di un cuore compassionevole.' 
    }
  ];
  SelectPokemon(p: Pokemon) { //è una funzione che prende in input un pokemon dal click del html
    this.selectedPokemon = p; // e lo assegna alla varibile selectedPokemon
  }
}