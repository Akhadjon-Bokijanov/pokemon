import React from 'react'
import PokemonSearch from '../../components/PokemonSearch/PokemonSearch'
import RandomSearch from '../../components/RandomSearch/RandomSearch'
import PokemonShow from '../../components/PokemonShow/PokemonShow'

const Home = () => {
    return (
        <div style={{ textAlign: 'center'}}>
            
            <div style={{width: '50%', margin: 'auto'}}>
                <PokemonSearch />
            </div>

            <div style={{ marginTop: 20}}>
                <RandomSearch />
            </div>

            <PokemonShow />

        </div>
    )
}

export default Home
