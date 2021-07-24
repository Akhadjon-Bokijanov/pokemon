import React from 'react'
import { createStructuredSelector } from 'reselect'
import { selectPokemon } from '../../redux/user/user.selector'
import { connect } from 'react-redux'
import PokemonCard from '../PokemonCard/PokemonCard'
import { Link } from 'react-router-dom'

const PokemonShow = ({ pokemon }) => {
    return (
        <div>
            {
                pokemon 
                ? <Link to={`/pokemon/${pokemon.name}`}><PokemonCard pokemon={pokemon.name} /></Link> 
                : null
            }
            
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    pokemon: selectPokemon
})

export default connect(mapStateToProps)(PokemonShow)
