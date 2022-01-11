export const mainPagePokemons = async (list) => {
  const mainList = list.reduce((acc, el) => acc.concat(el.name), [])
  return mainList
}
