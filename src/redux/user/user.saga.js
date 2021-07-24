import { takeLatest, all, call, put } from 'redux-saga/effects';
import { UserActions } from './user.actionTypes';
import axios from 'axios';
import { setPokemon } from './user.action';

export function* searchPokemonAsync(){
    yield takeLatest(UserActions.SEARCH_POKEMON, searchPokemon);
}

function* searchPokemon({ payload }){
    try{
        if(payload){
            let data = yield axios({
                url: `/pokemon/${payload}`
            })

            if (data.data) {
                yield put(setPokemon(data.data))
            }
        }
        
    }catch(e){
        console.error(e)
    }
    
}

export function* userSaga(){
    yield all([
        call(searchPokemonAsync)
    ])
}