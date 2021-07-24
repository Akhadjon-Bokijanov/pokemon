import React from 'react'
import { Box } from '@chakra-ui/layout';
import './PokemonCardStyle.css'

export const PokemonCard = ({ pokemon }) => {
    return (
        <Box bg="tomato" w="100%" p={4} color="white" className="pokemon-card-box">
            { pokemon }
        </Box>
    )
}

export default PokemonCard;