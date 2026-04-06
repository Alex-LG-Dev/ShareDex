import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PokemonService } from './services/pokemon.service';
import { Pokemon } from './models/pokemon.model';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('TrainerHub');
  pokemon = signal<Pokemon | null>(null);

  private pokemonService = inject(PokemonService);

  getPokemon() {
    this.pokemonService.getPokemon('pikachu').subscribe({
      next: (data) => {
        this.pokemon.set(data);
        console.log('Pokemon recibido:', data);
      },
      error: (err) => {
        console.error('Error:', err);
      },
    });
  }
}
