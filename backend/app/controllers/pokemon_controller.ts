// app/controllers/pokemon_controller.ts
import type { HttpContext } from '@adonisjs/core/http'

export default class PokemonController {
  async show({ params, response }: HttpContext) {
    // Por ahora, devolvemos datos estáticos para probar
    const pokemonData = {
      name: params.name,
      id: 25,
      type: 'electric',
      image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png',
    }
    return response.json(pokemonData)
  }
}
