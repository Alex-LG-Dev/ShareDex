import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { PokemonService } from './pokemon.service';
import { Pokemon } from '../models/pokemon.model';

describe('PokemonService', () => {
  let service: PokemonService;
  let httpTesting: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient(), provideHttpClientTesting()],
    });
    service = TestBed.inject(PokemonService);
    httpTesting = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTesting.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('getPokemon() hace GET a /api/pokemon/:name y devuelve los datos', () => {
    const mockPokemon = {
      name: 'pikachu',
      id: 25,
      type: 'electric',
      image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png',
    };

    service.getPokemon('pikachu').subscribe((pokemon: Pokemon) => {
      expect(pokemon).toEqual(mockPokemon);
    });

    const req = httpTesting.expectOne('http://localhost:3333/api/pokemon/pikachu');
    expect(req.request.method).toBe('GET');
    req.flush(mockPokemon);
  });
});
