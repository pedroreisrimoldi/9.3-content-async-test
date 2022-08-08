require('../mocks/fetchSimulator');
const { fetchCharacter } = require('../src/fetchCharacter');

describe('Teste a função fetchCharacter', () => {
  it('Nome igual', async () => {
    const hero = await fetchCharacter('720');
    expect(hero.name).toBe('Wonder Woman')
    console.log(hero.name);
  });
  it('Falha', async () => {
    const fail = await fetchCharacter();
    expect(fail).toEqual(new Error('You must provide an url'))
    console.log(fail);
  });
});