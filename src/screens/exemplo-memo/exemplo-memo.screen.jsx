import React, { useState, useEffect } from 'react'
import { PokeCard } from './sections/poke-card/poke-card.section'
import  pokemonsDb  from './db/pokedex.json'

export function ExemploMemoScreen() {
  const [pokemons, setPokemons] = useState([])
  const [novoPokemon, setNovoPokemon] = useState('')

  useEffect(() => {
    setPokemons(pokemonsDb)
  }, [])

  function onChangeNovoPokemon(event) {
    setNovoPokemon(event.target.value)
  }

  return (
    <>
      <input value={novoPokemon} onChange={onChangeNovoPokemon} />
      { pokemons.map((pokemon) => (
          <PokeCard key={pokemon.id} id={pokemon.id} nome={pokemon.name} />
        ))
      }
    </>
  )
}