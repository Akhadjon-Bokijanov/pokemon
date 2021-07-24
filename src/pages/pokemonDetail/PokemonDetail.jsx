import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { List, ListIcon, ListItem, Text, Grid, Box } from '@chakra-ui/layout'
import { CheckCircleIcon } from '@chakra-ui/icons'
import { selectMyPokemons } from '../../redux/user/user.selector'
import { createStructuredSelector } from 'reselect'
import { connect } from 'react-redux';
import { addNewPokemon, removeMyPokemon } from '../../redux/user/user.action';
import { Button } from '@chakra-ui/react'

const PokemonDetail = ({ match, myPokemons, addPokemon, removePokemon }) => {

    const [pokemon, setPokemon] = useState(null)
    const name = match.params?.pokemonName;

    useEffect(()=>{
        if(name){
            axios({
                url: `/pokemon/${name}`
            }).then(res=>{
                setPokemon(res.data)
            }).catch(e=>{
                console.error(e)
            });
        }
    }, [name])

    return (
        <div style={{padding: '0px 70px'}}>
            <Text fontSize="4xl" style={{textTransform: 'uppercase', textAlign: 'center'}}>{match.params?.pokemonName}</Text >

            <Grid gap={6} templateColumns="repeat(3, 1fr)">
                <Box>
                    <Text fontSize="lg">Abilities</Text>
                    <List spacing={3}>
                        {
                            pokemon?.abilities.map((ability, idx) => <ListItem key={`ability-${idx}`}>
                                <ListIcon as={CheckCircleIcon} color="green.500" />
                                {ability.ability.name}
                            </ListItem>)
                        }
                    </List>
                </Box>
                <Box>
                    <Text fontSize="lg">Stats</Text>
                    <List spacing={3}>
                        {
                            pokemon?.stats.map((stat, idx) => <ListItem key={`stat-${idx}`}>
                                <ListIcon as={CheckCircleIcon} color="green.500" />
                                {stat.stat.name}
                            </ListItem>)
                        }
                    </List>
                </Box>
                <Box>
                    <Text fontSize="lg">Held items</Text>
                    <List spacing={3}>
                        {
                            pokemon?.held_items.map((item, idx) => <ListItem key={`item-${idx}`}>
                                <ListIcon as={CheckCircleIcon} color="green.500" />
                                {item.item.name}
                            </ListItem>)
                        }
                    </List>
                </Box>
            </Grid>
            {
                myPokemons.find(pokemon=>pokemon===name)
                ? <Button onClick={()=>removePokemon(name)} colorScheme="pink">Remove from my team</Button>
                : <Button onClick={()=>addPokemon(name)} colorScheme="blue">Add to my team</Button>
            }
            
        </div>
    )
}

const mapStateTopProps = createStructuredSelector({
    myPokemons: selectMyPokemons
})

const mapDispatchToProps = dispatch => ({
    addPokemon: name => dispatch(addNewPokemon(name)),
    removePokemon: name => dispatch(removeMyPokemon(name))
})

export default connect(mapStateTopProps, mapDispatchToProps)(PokemonDetail)
