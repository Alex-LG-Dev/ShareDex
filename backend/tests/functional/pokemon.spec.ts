import { test } from '@japa/runner'

test.group('Pokemon API', () => {
  test('GET /api/pokemon/:name devuelve datos del pokemon', async ({ client }) => {
    const response = await client.get('/api/pokemon/pikachu')

    response.assertStatus(200)
    response.assertBodyContains({
      name: 'pikachu',
      id: 25,
      type: 'electric',
    })
    response.assertBodyContains({ image: response.body().image })
  })
})
