import React from 'react';
import { FlatList, View, Text, Image, Pressable } from 'react-native';
import { Pokemon } from '../types/pokemon';

export const PokemonList = ({pokemons, setPokemon}: {pokemons: Pokemon[], setPokemon: Function}) => {
    return (
        <FlatList 
            data={pokemons}
            renderItem={({item}) => <PokemonItem pokemon={item} onPress={() => setPokemon(item.url)} />}
        />
    )
};

const PokemonItem = ({pokemon, onPress}: {pokemon: Pokemon, onPress: Function}) => {

    return (
    <Pressable onPress={onPress}>
        <View style={{display: 'flex', flexDirection: 'row'}}>
            <Image source={{uri: `https://img.pokemondb.net/artwork/${pokemon.name}.jpg`}} style={{width: 50, height: 50}} />
            <View>
                <Text>{pokemon.name}</Text>
                <Text>{pokemon.weight}</Text>
            </View>
        </View>
    </Pressable>
    )
}

// https://img.pokemondb.net/artwork/<name>.jpg