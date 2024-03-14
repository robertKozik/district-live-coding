export type Pokemon = {
    name: string;
    weight: number;
    url: string;
}

export type PokemonDetails = {
    abilities: {ability: {name: string}}[];
    moves: {move: {name: string}}[];
}