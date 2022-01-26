import React, { createContext, useEffect, useState } from 'react'
import { getAllPokemon, getPokemonData, getOnePokemon } from '../services/pokemon';

export const MainContext = createContext({})

export const MainContextProvider = ({ children }) => {

    const [pokemon, setPokemon] = useState("");
    const [pokemonData, setPokemonData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [nextUrl, setNextUrl] = useState('');
    const [prevUrl, setPrevUrl] = useState('');
    const [shiny, setShiny] = useState(false);
    const [classic, setClassic] = useState(true);
    const [pageNumber, setPageNumber] = useState(1);
    const initialUrl = `https://pokeapi.co/api/v2/pokemon`

    useEffect(() => {
        async function fetchData() {
            let response = await getAllPokemon(initialUrl);
            setNextUrl(response.next);
            setPrevUrl(response.previous);

            await loadingPokemon(response.results);

            setLoading(false);
            setPageNumber(1);
        }

        fetchData();
    }, [pokemon === ""]);

    const next = async () => {
        setLoading(true);
        let data = await getAllPokemon(nextUrl);
        await loadingPokemon(data.results)
        setNextUrl(data.next);
        setPrevUrl(data.previous);
        setLoading(false);
        setPageNumber(pageNumber + 1);
    }

    const prev = async () => {
        if (!prevUrl) return;

        setLoading(true);
        let data = await getAllPokemon(prevUrl);
        await loadingPokemon(data.results)
        setNextUrl(data.next);
        setPrevUrl(data.previous);
        setLoading(false);
        setPageNumber(pageNumber - 1);
    }

    const loadingPokemon = async (data) => {
        let _pokemonData = await Promise.all(data.map(async pokemon => {
            let pokemonRecord = await getPokemonData(pokemon.url);
            return pokemonRecord
        }))

        setPokemonData(_pokemonData)
    }

    async function filterPokemon(e) {
        e.preventDefault();
        const toArray = [];

        let value = pokemon.trim();

        if (value !== "") {
            let response = await getOnePokemon(`${initialUrl}/${pokemon}`);
            toArray.push(response);
            console.log(response)
            setPokemonData(toArray);
        }
    }

    return (
        <MainContext.Provider
            value={{
                pokemonData,
                setPokemonData,
                nextUrl,
                prevUrl,
                next,
                prev,
                loading,
                shiny,
                setShiny,
                classic,
                setClassic,
                pokemon,
                setPokemon,
                pageNumber,
                initialUrl,
                filterPokemon,
            }}
        >
            {children}
        </MainContext.Provider>
    )
}