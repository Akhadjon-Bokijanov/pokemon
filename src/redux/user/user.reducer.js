import { UserActions } from "./user.actionTypes";

const INITIAL_STATE = {
    pokemon: null,
    myPokemons: []
}

const userReducer = (state=INITIAL_STATE, action)=>{
    switch(action.type){
        
        case UserActions.SET_POKEMON: return { ...state, pokemon: action.payload }
        
        case UserActions.ADD_POKEMON: return { 
            ...state, 
            myPokemons: addToPokemons(state.myPokemons, action.payload) 
        }
        
        case UserActions.REMOVE_POKEMON: return {
            ...state,
            myPokemons: removeFromPokemons(state.myPokemons, action.payload)
        }

        default: return state;
    }
}

export default userReducer

//supporter functions
const addToPokemons = (pokemons, newPokemon)=>{
    const pokemonExists = pokemons.find(name => name===newPokemon);

    if(pokemonExists || pokemons.length >= 6){
        return [...pokemons]
    }

    return [ ...pokemons, newPokemon ];
}

const removeFromPokemons = (pokemons, p)=>{
    return pokemons.filter(pokemon => pokemon!==p)
}