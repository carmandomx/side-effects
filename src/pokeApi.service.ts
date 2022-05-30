export const fetchPoke = async (pokeName: string) => {
    const req = await fetch('https://pokeapi.co/api/v2/pokemon/' + pokeName);

    return req;
}