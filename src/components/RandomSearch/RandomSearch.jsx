import React from 'react'
import { Button } from "@chakra-ui/react"
import axios from 'axios'
import { setPokemon } from '../../redux/user/user.action'
import { connect } from 'react-redux';

const RandomSearch = ({ setRandomPokemon }) => {

    const getRandomPokemon = ()=>{

        let randomOffset = Math.floor(Math.random() * 1118);

        axios({
            url:`/pokemon/?limit=1&offset=${randomOffset}`
        }).then(res=>{
            console.log(res.data)
            setRandomPokemon(res.data?.results[0])
        }).catch(e=>{
            console.error(e)
        })
    }

    return (
        <div>
            <Button onClick={getRandomPokemon} colorScheme="blue">Get Random Pokemon</Button>
        </div>
    )
}

const mapDispatchToProps = dispatch=>({
    setRandomPokemon: (data) => dispatch(setPokemon(data))
})

export default connect(null, mapDispatchToProps)(RandomSearch)
