import { createSelector } from 'reselect';

const userSelector = state=>state.user;

export const selectPokemon = createSelector(
    [userSelector],
    user=>user.pokemon
)

export const selectMyPokemons = createSelector(
    [userSelector],
    user=>user.myPokemons
)