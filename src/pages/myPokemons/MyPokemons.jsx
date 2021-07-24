import React from 'react'
import { selectMyPokemons, selectPokemon } from '../../redux/user/user.selector'
import { createStructuredSelector } from 'reselect'
import {connect} from 'react-redux';
import { addNewPokemon, removeMyPokemon } from '../../redux/user/user.action';
import { Box, Grid, CloseButton, GridItem  } from "@chakra-ui/react"
import PokemonCard from '../../components/PokemonCard/PokemonCard';
import { Link } from 'react-router-dom';

const MyPokemons = ({ myPokemons, addPokemon, removePokemon }) => {
    return (
        <div style={{padding: '0px 70px'}}>
            
            <Grid gap={6} templateColumns="repeat(4, 1fr)">
                {
                    myPokemons.length > 0
                        ? myPokemons.map((pokemon, idx) => <div key={`pokemon-${idx}`} >
                            <CloseButton onClick={() => removePokemon(pokemon)} />
                            <Link

                                to={`/pokemon/${pokemon}`}>
                                <PokemonCard pokemon={pokemon} />
                            </Link>

                        </div>)
                        : <Box>No pokemons in yout team!</Box>
                }
            </Grid>
        
            
        </div>
    )
}

const mapStateTopProps = createStructuredSelector({
    myPokemons: selectMyPokemons,
})

const mapDispatchToProps = dispatch=>({
    addPokemon: name => dispatch(addNewPokemon(name)),
    removePokemon: name=>dispatch(removeMyPokemon(name))
})

export default connect(mapStateTopProps, mapDispatchToProps)(MyPokemons)
