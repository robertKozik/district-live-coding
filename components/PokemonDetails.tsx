import React, { useEffect, useState } from "react";
import { Modal, Pressable, SafeAreaView, Text, Image } from "react-native";
import { Pokemon, PokemonDetails as SinglePokemonDetails } from "../types/pokemon";

// "https://pokeapi.co/api/v2/pokemon/1/"

export const PokemonDetails = ({pokemonUrl, setSelectedPokemon}: {pokemonUrl: string, setSelectedPokemon: Function}) => {
    const [pokemon, setPokemon] = useState<SinglePokemonDetails | null>(null);

    useEffect(() => {
        const fetchPokemons = async () => {
            const response = await fetch(pokemonUrl);
            const data = await response.json();
            setPokemon(data);
        }
        if (pokemonUrl) {
            fetchPokemons();
        }
        }, [pokemonUrl])

    console.warn(pokemon?.abilities);
    return (
        <Modal visible={!!pokemonUrl.length}>
            <SafeAreaView>
                <Pressable onPress={() => setSelectedPokemon('')}><Text>X</Text></Pressable>
                <Image source={{uri: `https://img.pokemondb.net/artwork/${pokemon.name}.jpg`}} style={{width: 100, height: 100}} />
                <Text>{pokemonUrl}</Text>
                <Text style={{fontSize: 50}}>abilities</Text>
                {pokemon && pokemon.abilities.map(({ability}) =><Text>{ability.name}</Text>)}
                <Text style={{fontSize: 50}}>moves</Text>
                {pokemon && pokemon.moves.map(({move}) =><Text>{move.name}</Text>)}
            </SafeAreaView>
        </Modal>
    )
}