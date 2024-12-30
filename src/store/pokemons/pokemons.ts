import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SimplePokemon } from '@/pokemons';

interface PokemonsState {
  favorites: {
    [key: string]: SimplePokemon;
  }
}

// const getInitialState = (): PokemonsState => {

//   /* if ( typeof( localStorage ) === 'undefined' ) return {}; */

//   const favorites = JSON.parse( localStorage.getItem('favourite-pokemons') ?? '{}' );

//   return favorites;
// }

const initialState: PokemonsState = {
  favorites: {},
  /* ...getInitialState(), */
  /* '1': { id: '1', name: 'bulbasaur' } */
}

const pokemonsSlice = createSlice({
  name: 'pokemons',
  initialState,
  reducers: {
    setFavoritePokemons( state, action: PayloadAction<{[key: string]: SimplePokemon}> ) {
      state.favorites = action.payload;
    },
    toggleFavourite( state, action: PayloadAction<SimplePokemon>) {

      const pokemon = action.payload;
      const { id } = pokemon;

      if ( !!state.favorites[id] ) {
        delete state.favorites[id];
        return;
      } else {
        state.favorites[id] = pokemon;
      }

      // TODO: No se debe de hacer en redux
      localStorage.setItem('favourite-pokemons', JSON.stringify(state.favorites));

    }
  }
});

export const {
  setFavoritePokemons,
  toggleFavourite
} = pokemonsSlice.actions

export default pokemonsSlice.reducer