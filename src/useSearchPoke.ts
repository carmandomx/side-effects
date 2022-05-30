import React, { useState, useEffect } from 'react'
import { fetchPoke } from './pokeApi.service';

type PokeSearch = (pokemon: any) => void

const useSearchPoke = (): [string, string, string, React.Dispatch<React.SetStateAction<string>>, PokeSearch] => {
    const [name, setName] = useState('')
    const [imgUrl, setImgUrl] = useState('');
    const [searchTerm, setSearchTermm] = useState('pikachu')

    const updateState = (pokemon: any) => {
        setName(pokemon.name)
        setImgUrl(pokemon.sprites.front_default)
    }

    useEffect(() => {
      
        if (searchTerm) {
         (async () => {
   
           const res = await fetchPoke(searchTerm);
           const miPikachu = await res.json();
           updateState(miPikachu)
         })()
        }
   
           
         
       }, [searchTerm])


    return [name, imgUrl, searchTerm, setSearchTermm, updateState]

}



export default useSearchPoke