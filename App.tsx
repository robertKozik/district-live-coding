import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { PokemonList } from './components/PokemonList';
import { Pokemon } from './types/pokemon';
import React, { useEffect, useState } from 'react';
import { PokemonDetails } from './components/PokemonDetails';

// https://pokeapi.co/api/v2/

const PokemonContext = React.createContext<{pokemonList: Pokemon[], selectedPokemon: string}>({pokemonList: [], selectedPokemon: ''});

export default function App() {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [selectedPokemon, setSelectedPokemon] = useState<string>('');

  useEffect(() => {
    const fetchPokemons = async () => {
      const response = await fetch('https://pokeapi.co/api/v2/pokemon');
      const data = await response.json();
      const pokemons = data.results;
      setPokemons(pokemons);
    }
    fetchPokemons();
  }, [])

  return (
      <SafeAreaView style={styles.container}>
        <PokemonList pokemons={pokemons} setPokemon={setSelectedPokemon} />
        <PokemonDetails pokemonUrl={selectedPokemon} setSelectedPokemon={setSelectedPokemon} />
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
