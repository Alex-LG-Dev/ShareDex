// src/app/services/pokemon.service.ts
import { Injectable, inject } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { Pokemon } from '../models/pokemon.model'

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  private http = inject(HttpClient)
  private apiUrl = 'http://localhost:3333/api'

  getPokemon(name: string): Observable<Pokemon> {
    return this.http.get<Pokemon>(`${this.apiUrl}/pokemon/${name}`)
  }
}
