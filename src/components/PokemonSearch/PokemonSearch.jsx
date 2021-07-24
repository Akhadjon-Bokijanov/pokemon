import React from 'react'
import { Input } from "@chakra-ui/react"
import { searchPokemon } from '../../redux/user/user.action'
import { connect } from 'react-redux';


const PokemonSearch = ({ sPokemon }) => {

    const handleChange = (e)=>{
        let value = e.target.value;
        sPokemon(value)
    }

    return (
        <div>
            <Input placeholder="Search pokemon" onChange={handleChange} />
        </div>
    )
}

const mapDispatchToProps = dispatch=>({
    sPokemon: s=>dispatch(searchPokemon(s))
})

export default connect(null, mapDispatchToProps)(PokemonSearch)
