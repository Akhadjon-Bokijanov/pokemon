import { UserActions } from "./user.actionTypes";

export const setPokemon = (data)=>({
    type: UserActions.SET_POKEMON,
    payload: data
})

export const searchPokemon = search=>({
    type: UserActions.SEARCH_POKEMON,
    payload: search
})

export const addNewPokemon = name=>({
    type: UserActions.ADD_POKEMON,
    payload: name
})

export const removeMyPokemon = name=>({
    type: UserActions.REMOVE_POKEMON,
    payload: name
})